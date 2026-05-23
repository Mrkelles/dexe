
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, ShoppingCart } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function PricingSection() {
  const plans = [
    {
      name: "Single Bottle",
      quantity: 1,
      price: "₦25,000",
      originalPrice: "₦35,000",
      description: "Perfect for a trial or personal use.",
      savings: null,
      highlight: false,
      imageId: "pricing-1"
    },
    {
      name: "Double Pack",
      quantity: 2,
      price: "₦45,000",
      originalPrice: "₦55,000",
      description: "Most popular for couples or gifting.",
      savings: "Save ₦10,000",
      highlight: true,
      imageId: "pricing-2"
    },
    {
      name: "Family Bundle",
      quantity: 3,
      price: "₦65,000",
      originalPrice: "₦85,000",
      description: "Best value for long-term hair care.",
      savings: "Save ₦20,000",
      highlight: false,
      imageId: "pricing-3"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => {
            const planImage = PlaceHolderImages.find(img => img.id === plan.imageId)
            
            return (
              <div 
                key={i} 
                className={`relative flex flex-col p-8 rounded-[32px] border transition-all duration-500 backdrop-blur-xl ${
                  plan.highlight 
                    ? 'bg-white/[0.08] border-[#22C55E] md:scale-105 z-10 shadow-heroPanel' 
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="bg-[#22C55E] text-black font-black uppercase px-6 py-1.5 text-xs tracking-widest border-none">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                {/* Full-Width Glassmorphic Image Header */}
                <div className="mb-10 relative h-64 -mx-8 -mt-8 rounded-t-[32px] bg-black/20 overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                  {planImage && (
                    <Image 
                      src={planImage.imageUrl}
                      alt={planImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={planImage.imageHint}
                    />
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-black text-[#22C55E] tabular-nums tracking-tighter">
                        {plan.price}
                      </span>
                      <span className="text-lg font-bold text-white/40 line-through decoration-white/60">
                        {plan.originalPrice}
                      </span>
                    </div>
                    {plan.savings && (
                      <p className="text-[10px] font-black text-[#22C55E] uppercase tracking-[0.2em] bg-[#22C55E]/10 w-fit px-2 py-0.5 rounded">
                        {plan.savings}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Original Dexe Formula",
                    "Free Delivery Nationwide",
                    "Pay on Delivery Available",
                    "Scalp-Friendly Herbal Base"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                      <div className="h-5 w-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-[#22C55E]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/order" className="block mt-auto">
                  <Button 
                    className={`w-full h-14 rounded-full font-black text-xs uppercase tracking-[0.15em] transition-all hover:scale-[1.03] active:scale-95 shadow-none ${
                      plan.highlight 
                        ? 'bg-[#22C55E] hover:bg-[#16A34A] text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    CLAIM THIS DEAL
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
