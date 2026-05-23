
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Home } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 font-body">
      <div className="max-w-xl w-full bg-[#0A0A0A] rounded-[32px] shadow-2xl p-8 md:p-16 text-center space-y-8 border border-[#1A1A1A]">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
            <CheckCircle2 className="h-16 w-16 text-[#22C55E]" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
            Order <br /> <span className="text-[#22C55E]">Confirmed!</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Your transformation journey has officially begun. We've received your order and our delivery team will contact you shortly to confirm the details.
          </p>
        </div>

        <div className="bg-[#111111] p-8 rounded-[20px] border border-[#22C55E]/10 space-y-3">
          <p className="font-black text-white uppercase tracking-wider text-sm">What happens next?</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Keep your phone close. You'll receive a confirmation call or WhatsApp message within the next few hours to confirm delivery.
          </p>
        </div>

        <div className="pt-4">
          <Link href="/" className="block">
            <Button className="w-full h-14 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-lg gap-2 transition-all hover:scale-105 active:scale-95 shadow-none">
              <Home className="h-5 w-5" />
              RETURN TO HOME
            </Button>
          </Link>
        </div>
        
        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest pt-4">
          Secure Order Confirmation | Dexe
        </p>
      </div>
    </main>
  )
}
