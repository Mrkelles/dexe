
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function PromoBanner() {
  const promo1 = PlaceHolderImages.find(img => img.id === 'promo-1')
  const promo2 = PlaceHolderImages.find(img => img.id === 'promo-2')
  
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Does Dexe <span className="text-[#22C55E]">Really Work?</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
            Yes it does and does so without the mess of dyes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            {promo1 && (
              <Image
                src={promo1.imageUrl}
                alt={promo1.description}
                fill
                className="object-contain"
                data-ai-hint={promo1.imageHint}
              />
            )}
          </div>
          
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            {promo2 && (
              <Image
                src={promo2.imageUrl}
                alt={promo2.description}
                fill
                className="object-contain"
                data-ai-hint={promo2.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
