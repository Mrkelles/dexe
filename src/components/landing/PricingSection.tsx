
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, ShoppingCart } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function PricingSection() {
  const bottleImage = PlaceHolderImages.find(img => img.id === 'hero-main')

  const plans = [
    {
      name: "Single Bottle",
      quantity: 1,
      price: "₦25,000",
      description: "Perfect for a trial or personal use.",
      savings: null,
      highlight: false,
    },
    {
      name: "Double Pack",
      quantity: 2,
      price: "₦45,000",
      description: "Most popular for couples or gifting.",
      savings: "Save ₦5,000",
      highlight: true,
    },
    {
      name: "Family Bundle",
      quantity: 3,
      price: "₦65,000",
      description: "Best value for long-term hair care.",
      savings: "Save ₦10,000",
      highlight: false,
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-black border-t border-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Choose Your <span className="text-[#22C55E]">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Select the bundle that fits your needs. All orders include Free Shipping and Pay on Delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 rounded-[32px] border transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#111111] border-[#22C55E] scale-105 z-10 shadow-heroPanel' 
                  : 'bg-[#0A0A0A] border-[#1A1A1A] hover:border-[#22C55E]/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#22C55E] text-black font-black uppercase px-4 py-1">MOST POPULAR</Badge>
                </div>
              )}

              <div className="mb-8 relative h-48 flex items-center justify-center">
                {/* Visual stacking logic for bottles */}
                <div className="relative w-full h-full">
                  {Array.from({ length: plan.quantity }).map((_, idx) => (
                    <div 
                      key={idx}
                      className="absolute inset-0 transition-transform"
                      style={{ 
                        transform: `translateX(${(idx - (plan.quantity - 1) / 2) * 30}px) scale(${1 - idx * 0.05})`,
                        zIndex: 10 - idx
                      }}
                    >
                      {bottleImage && (
                        <Image 
                          src={bottleImage.imageUrl}
                          alt="Dexe Bottle"
                          fill
                          className="object-contain"
                          data-ai-hint="dexe bottle"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-black text-white uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#22C55E] tabular-nums">{plan.price}</span>
                  {plan.savings && (
                    <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider">{plan.savings}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Original Dexe Formula",
                  "Free Delivery Nationwide",
                  "Pay on Delivery Available",
                  "Scalp-Friendly Herbal Base"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <Check className="h-4 w-4 text-[#22C55E]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/order" className="block mt-auto">
                <Button 
                  className={`w-full h-12 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${
                    plan.highlight 
                      ? 'bg-[#22C55E] hover:bg-[#16A34A] text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Order This Pack
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
