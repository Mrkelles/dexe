
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

    const { data, error } = await resend.emails.send({
      from: 'Sadoer Orders <onboarding@resend.dev>',
      to: ['cckelles@gmail.com'],
      subject: `New Order from ${fullName}`,
      html: `
        <h1>New Order Details</h1>
        <p><strong>Customer Name:</strong> ${fullName}</p>
        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Requested Delivery:</strong> ${deliveryTime}</p>
        <p><strong>Questions/Notes:</strong> ${questions || 'None'}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true };
  } catch (err) {
    console.error('Submission error:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
