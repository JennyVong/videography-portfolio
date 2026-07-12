import emailjs from '@emailjs/browser';

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? '';

export function initEmailJS() {
  if (!PUBLIC_KEY) return;
  emailjs.init({ publicKey: PUBLIC_KEY });
}

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  package: string;
  message: string;
};

export async function sendContactEmail(formData: ContactFormData): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'Email service not configured. Please add your EmailJS keys to .env.local.'
    );
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name:  formData.name,
    from_email: formData.email,
    phone:      formData.phone     || 'Not provided',
    event_date: formData.eventDate || 'Not specified',
    package:    formData.package   || 'Not selected',
    message:    formData.message,
  });
}