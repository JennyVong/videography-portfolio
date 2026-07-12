'use client';

import { useState, useEffect } from 'react';
import { initEmailJS, sendContactEmail, ContactFormData } from '@/app/clients/emailjs';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PACKAGE_SELECT_OPTIONS } from '@/app/constants';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

type FormState = 'idle' | 'sending' | 'success' | 'error';

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  package: '',
  message: '',
};

// Common personal/professional email domains
const ALLOWED_DOMAINS = [
  'gmail.com', 'googlemail.com',
  'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
  'yahoo.com', 'yahoo.co.uk', 'yahoo.com.au',
  'icloud.com', 'me.com', 'mac.com',
  'proton.me', 'protonmail.com',
  'aol.com',
];

function validateEmail(email: string): string {
  const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!basicFormat.test(email)) return 'Please enter a valid email address.';

  const domain = email.split('@')[1]?.toLowerCase();

  // Allow any company/custom domain (contains a dot and isn't a known bad pattern)
  // Only reject if it's clearly not a real domain
  if (!domain || !domain.includes('.')) return 'Please enter a valid email address.';

  // Block obviously fake domains
  const fakeDomains = ['test.com', 'example.com', 'fake.com', 'none.com'];
  if (fakeDomains.includes(domain)) return 'Please use a real email address.';

  return '';
}

function validateDate(date: string): string {
  if (!date) return ''; // date is optional
  const selected = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selected < today) return 'Please select a future date.';
  return '';
}

function validate(formData: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!formData.name.trim())
    errors.name = 'Name is required.';

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  if (!formData.phone.trim())
    errors.phone = 'Phone number is required.';

  if (!formData.eventDate)
    errors.eventDate = 'Project date is required.';
  else {
    const dateError = validateDate(formData.eventDate);
    if (dateError) errors.eventDate = dateError;
  }

  if (!formData.package)
    errors.package = 'Please select a package.';

  if (!formData.message.trim())
    errors.message = 'Message is required.';

  return errors;
}

// Today's date in YYYY-MM-DD for the min attribute on the date input
function todayString(): string {
  return new Date().toISOString().split('T')[0];
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Re-validate touched fields on change
    if (touched[name as keyof ContactFormData]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched and run full validation
    setTouched({ name: true, email: true, phone: true, eventDate: true, package: true, message: true });
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setFormState('sending');
    setErrorMessage('');

    try {
      await sendContactEmail(formData);
      setFormState('success');
      setFormData(INITIAL_FORM);
      setTouched({});
      setErrors({});
      setTimeout(() => setFormState('idle'), 5000);
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setErrorMessage(err?.text ?? err?.message ?? 'Something went wrong. Please try emailing me directly.');
      setFormState('error');
      setTimeout(() => setFormState('idle'), 6000);
    }
  };

  const isBusy = formState === 'sending';

  const fieldClass = (field: keyof ContactFormData) =>
    `bg-gray-800 border text-white placeholder-gray-500 focus:ring-red-600 focus:border-transparent transition-colors ${
      touched[field] && errors[field] ? 'border-red-500' : 'border-gray-700'
    }`;

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Fill out the form below and I'll get
            back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-xl text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { Icon: Mail,   label: 'Email',    value: 'rjustfitness@gmail.com',  href: 'mailto:rjustfitness@gmail.com' },
                  { Icon: MapPin, label: 'Location', value: 'Toronto, ON', href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="bg-red-600/20 p-3 rounded-lg">
                      <Icon className="text-red-500" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-400 hover:text-red-500 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h4 className="font-bold text-white mb-3">Response Time</h4>
              <p className="text-gray-400 text-sm">
                I typically respond within 24 hours on business days.
                For urgent requests, please call directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">

                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">Full Name *</Label>
                  <Input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange} onBlur={handleBlur}
                    disabled={isBusy} placeholder="John Doe"
                    className={fieldClass('name')}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">Email Address *</Label>
                  <Input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange} onBlur={handleBlur}
                    disabled={isBusy} placeholder="john@gmail.com"
                    className={fieldClass('email')}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-gray-300 mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone" name="phone" type="tel"
                    value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                    disabled={isBusy} placeholder="(555) 123-4567"
                    className={fieldClass('phone')}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                  )}
                  </div>
                <div>
                    <Label htmlFor="eventDate" className="text-gray-300 mb-2 block">Project Date *</Label>
                    <Input
                      id="eventDate" name="eventDate" type="date"
                      min={todayString()}
                      value={formData.eventDate} onChange={handleChange} onBlur={handleBlur}
                      disabled={isBusy}
                      className={fieldClass('eventDate')}
                    />
                    {touched.eventDate && errors.eventDate && (
                      <p className="mt-1 text-xs text-red-400">{errors.eventDate}</p>
                    )}
                  </div>
              </div>

                {/* Package */}
              <div className="mb-6">
                <Label htmlFor="package" className="text-gray-300 mb-2 block">Package Interest *</Label>
                <select
                  id="package" name="package"
                  value={formData.package} onChange={handleChange} disabled={isBusy}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none text-white transition-colors ${
                    touched.package && errors.package ? 'border-red-500' : 'border-gray-700'
                  }`}
                >
                  <option value="">Select a package</option>
                  {PACKAGE_SELECT_OPTIONS.map((group) =>
                    group.group ? (
                      <optgroup key={group.group} label={group.group}>
                        {group.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </optgroup>
                    ) : (
                      group.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))
                    )
                  )}
                </select>
                {touched.package && errors.package && (
                  <p className="mt-1 text-xs text-red-400">{errors.package}</p>
                )}
              </div>

                {/* Message */}
                <div className="mb-6">
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">Message *</Label>
                  <Textarea
                    id="message" name="message" required rows={6}
                    value={formData.message} onChange={handleChange} onBlur={handleBlur}
                    disabled={isBusy} placeholder="Tell me about your project..."
                    className={`${fieldClass('message')} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Status messages */}
                {formState === 'success' && (
                  <div className="mb-4 flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-md">
                    <CheckCircle size={18} />
                    <span>Message sent! I'll be in touch within 24 hours.</span>
                  </div>
                )}
                {formState === 'error' && (
                  <div className="mb-4 flex items-start gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-md">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isBusy || formState === 'success'}
                  className="w-full bg-red-600 text-white py-4 rounded-md hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isBusy ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending…
                    </>
                  ) : formState === 'success' ? (
                    <><CheckCircle size={18} /> Sent!</>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}