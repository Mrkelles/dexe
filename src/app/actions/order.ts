
'use server';

import { Resend } from 'resend';

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

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return { success: false, error: 'Internal configuration error' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Dexe Orders <onboarding@resend.dev>',
      to: ['cckelles@gmail.com'],
      subject: `New Dexe Order from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1A1A1A; background-color: #F2F2F0;">
          <h1 style="color: #F0A500;">New Dexe Shampoo Order</h1>
          <hr style="border: none; border-top: 1px solid #EBEBEB;" />
          <p><strong>Customer Name:</strong> ${fullName}</p>
          <p><strong>Package selected:</strong> ${selectedPackage}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Requested Delivery:</strong> ${deliveryTime}</p>
          <p><strong>Notes:</strong> ${questions || 'None'}</p>
          <hr style="border: none; border-top: 1px solid #EBEBEB;" />
          <p style="font-size: 12px; color: #9A9A9A;">Dexe Instant Black Landing Page Submission</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Submission error:', err);
    return { success: false, error: err.message };
  }
}
