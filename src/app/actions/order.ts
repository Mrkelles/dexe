'use server';

import { Resend } from 'resend';

export async function submitOrder(formData: any) {
  // Initialize Resend inside the function to ensure environment variables are 
  // correctly picked up at runtime in the hosted environment.
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('[Order] CRITICAL: RESEND_API_KEY is missing from environment variables.');
    return { 
      success: false, 
      error: 'Configuration Error: Please ensure RESEND_API_KEY is set in your hosting provider settings.' 
    };
  }

  const resend = new Resend(apiKey);

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

    console.log(`[Order] Processing new submission for: ${fullName}`);

    const { data, error } = await resend.emails.send({
      from: 'Dexe Orders <onboarding@resend.dev>',
      to: ['cckelles@gmail.com'],
      subject: `New Dexe Order: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1A1A1A; background-color: #F2F2F0; border-radius: 12px;">
          <h1 style="color: #22C55E; margin-bottom: 20px; text-transform: uppercase; letter-spacing: -1px;">New Dexe Shampoo Order</h1>
          <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #E5E7EB; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #F3F4F6;">
               <p style="margin: 0; color: #6B7280; font-size: 12px; text-transform: uppercase; font-weight: bold;">Selected Package</p>
               <p style="margin: 5px 0 0 0; color: #22C55E; font-size: 18px; font-weight: 900;">${selectedPackage}</p>
            </div>
            <p style="margin: 10px 0;"><strong>Customer Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>WhatsApp:</strong> ${whatsapp}</p>
            <p style="margin: 10px 0;"><strong>Address:</strong> ${address}</p>
            <p style="margin: 10px 0;"><strong>Requested Delivery:</strong> ${deliveryTime}</p>
            <p style="margin: 10px 0;"><strong>Additional Notes:</strong> ${questions || 'None'}</p>
          </div>
          <p style="font-size: 11px; color: #9CA3AF; margin-top: 25px; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
            Dexe Instant Black Hair Shampoo - Landing Page Notification
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Order] Resend API Error:', error);
      // Return the actual error message from Resend to the UI for debugging
      return { success: false, error: `Email Service: ${error.message}` };
    }

    console.log(`[Order] Success! ID: ${data?.id}`);
    return { success: true };
  } catch (err: any) {
    console.error('[Order] Unhandled Exception:', err);
    return { success: false, error: 'An unexpected system error occurred. Please try again or contact support.' };
  }
}
