
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function PromoBanner() {
  const promoImg = PlaceHolderImages.find(img => img.id === 'promo-banner')
  
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full lg:w-[80%] aspect-[21/9] relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F8F7F5]">
          {promoImg && (
            <Image
              src={promoImg.imageUrl}
              alt={promoImg.description}
              fill
              className="object-cover"
              data-ai-hint={promoImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-md space-y-4">
               <p className="text-white font-black text-3xl md:text-5xl leading-tight drop-shadow-lg">
                 Real Results, <br/><span className="text-brand-coral">Real Confidence</span>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
