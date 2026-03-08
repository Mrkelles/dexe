'use server';

import { Resend } from 'resend';

// Initialize Resend inside the action or ensure it's handled correctly
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitOrder(formData: any) {
  try {
    const { 
      package: selectedPackage, 
      fullName, 
      phone, 
      whatsapp, 
      address, 
      deliveryTime, 
      questions 
    } = formData;

    // Validate the API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return { success: false, error: 'Internal configuration error: API key missing' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Sadoer Orders <onboarding@resend.dev>',
      to: ['cckelles@gmail.com'],
      subject: `New Order from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #1A0A00;">New Order Details</h1>
          <hr />
          <p><strong>Customer Name:</strong> ${fullName}</p>
          <p><strong>Package selected:</strong> ${selectedPackage}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Requested Delivery:</strong> ${deliveryTime}</p>
          <p><strong>Questions/Notes:</strong> ${questions || 'None'}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Submitted via Sadoer Youthful Glow Landing Page</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: error.message || 'Failed to send email via Resend' };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Submission processing error:', err);
    return { success: false, error: err.message || 'An unexpected error occurred during submission' };
  }
}
