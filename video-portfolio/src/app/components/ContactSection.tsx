'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    package: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `Video Production Inquiry - ${formData.package || 'Custom Package'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Package: ${formData.package}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:rj@rjfilms.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        package: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-xl text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-3 rounded-lg">
                    <Mail className="text-red-500" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:rj@rjfilms.com" className="text-gray-400 hover:text-red-500">
                      rj@rjfilms.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-3 rounded-lg">
                    <Phone className="text-red-500" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-400 hover:text-red-500">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-3 rounded-lg">
                    <MapPin className="text-red-500" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
              <h4 className="font-bold text-white mb-3">Response Time</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to inquiries within 24 hours during business days.
                For urgent requests, please call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="block text-gray-300 mb-2">
                    Full Name *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="eventDate" className="block text-gray-300 mb-2">
                    Project Date
                  </Label>
                  <Input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="package" className="block text-gray-300 mb-2">
                  Package Interest
                </Label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white"
                >
                  <option value="">Select a package</option>
                  <optgroup label="One-Time Packages">
                    <option value="Starter Pack">Starter Pack - $199</option>
                    <option value="Creator Pack">Creator Pack - $399</option>
                    <option value="Brand Package">Brand Package - $799</option>
                  </optgroup>
                  <optgroup label="Monthly Retainers">
                    <option value="Influencer Retainer">Influencer Retainer - $1,200/month</option>
                    <option value="Brand Retainer">Brand Retainer - $2,500/month</option>
                  </optgroup>
                  <option value="Custom">Custom Package</option>
                </select>
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="block text-gray-300 mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Tell me about your project..."
                ></Textarea>
              </div>

              <Button
                type="submit"
                disabled={submitted}
                className="w-full bg-red-600 text-white py-4 rounded-md hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:bg-green-600 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>Message Sent Successfully!</>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}