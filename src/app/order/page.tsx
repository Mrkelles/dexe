
'use client';

import React from 'react';
import { Header } from '@/components/landing/Header';
import { OrderForm } from '@/components/landing/OrderForm';
import { Toaster } from '@/components/ui/toaster';
import { ShieldCheck, Truck, Lock } from 'lucide-react';

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-black text-white font-body">
      <Header />
      
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              Finalize Your <span className="text-[#22C55E]">Transformation</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Fill out the form below to receive your Dexe Black Hair Shampoo. 
              Pay only when you receive your order!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <OrderForm />
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0A0A0A] p-8 rounded-[20px] border border-[#1A1A1A] space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-[#22C55E]" />
                </div>
                <h3 className="text-xl font-bold uppercase">Free Shipping</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We offer free delivery to all major cities in Nigeria including Lagos, Abuja, Port Harcourt, and more.
                </p>
              </div>

              <div className="bg-[#0A0A0A] p-8 rounded-[20px] border border-[#1A1A1A] space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-[#22C55E]" />
                </div>
                <h3 className="text-xl font-bold uppercase">Pay On Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zero risk. Inspect your package before making any payment to our delivery partners.
                </p>
              </div>

              <div className="bg-[#0A0A0A] p-8 rounded-[20px] border border-[#1A1A1A] space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-[#22C55E]" />
                </div>
                <h3 className="text-xl font-bold uppercase">Secure Checkout</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your information is encrypted and protected. We never share your data with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-12 bg-black border-t border-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 Oello Shop. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}
