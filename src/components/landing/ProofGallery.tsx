
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function ProofGallery() {
  const proof1 = PlaceHolderImages.find(img => img.id === 'proof-1')
  const proof2 = PlaceHolderImages.find(img => img.id === 'proof-2')
  
  return (
    <section className="bg-black py-16 md:py-24 border-t border-[#1A1A1A]">
      <div className="container mx-auto px-4">
       
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            {proof1 && (
              <Image
                src={proof1.imageUrl}
                alt={proof1.description}
                fill
                className="object-contain"
                data-ai-hint={proof1.imageHint}
              />
            )}
          </div>
          
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            {proof2 && (
              <Image
                src={proof2.imageUrl}
                alt={proof2.description}
                fill
                className="object-contain"
                data-ai-hint={proof2.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
