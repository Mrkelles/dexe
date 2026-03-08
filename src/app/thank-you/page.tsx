
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Home } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F4F2F0] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-[40px] shadow-2xl p-8 md:p-16 text-center space-y-8 border-4 border-brand-coral/10">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-brand-coral/10 flex items-center justify-center">
            <CheckCircle2 className="h-16 w-16 text-brand-coral" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
            Thank You for <br /> Your Order!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your transformation journey has officially begun. We have received your order details and our delivery team will contact you shortly to confirm the delivery time.
          </p>
        </div>

        <div className="bg-brand-coral/5 p-6 rounded-3xl border border-brand-coral/10">
          <p className="font-bold text-brand-dark">What happens next?</p>
          <p className="text-sm text-muted-foreground mt-2">
            Keep your phone close. You'll receive a confirmation call or WhatsApp message within the next few hours.
          </p>
        </div>

        <Link href="/" className="block">
          <Button className="w-full h-14 rounded-full bg-brand-dark hover:bg-brand-dark/90 text-white font-bold text-lg gap-2 shadow-xl transition-all hover:scale-105 active:scale-95">
            <Home className="h-5 w-5" />
            BACK TO HOME
          </Button>
        </Link>
      </div>
    </main>
  )
}
