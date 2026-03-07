
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Check } from 'lucide-react'

export function SideFeature() {
  const featureImg = PlaceHolderImages.find(img => img.id === 'side-feature')

  return (
    <section className="py-24 bg-[#F8F7F5]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 aspect-square relative rounded-[40px] overflow-hidden shadow-xl">
            {featureImg && (
              <Image
                src={featureImg.imageUrl}
                alt={featureImg.description}
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
                data-ai-hint={featureImg.imageHint}
              />
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
                Deep Collagen <span className="text-brand-coral">Restoration</span> Technology
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Most skincare products only sit on the surface. Sadoer is formulated with nano-collagen particles that penetrate deep into your dermis to repair damaged cells from the inside out.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "Stimulates natural skin cell renewal",
                "Fills deep wrinkles & expression lines",
                "Balances skin pH for a healthy moisture barrier",
                "Lightweight formula—won't clog your pores"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-brand-dark font-bold text-lg">
                  <div className="h-8 w-8 rounded-full bg-brand-coral flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
