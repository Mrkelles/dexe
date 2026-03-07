
"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Badge } from '@/components/ui/badge'

export function BeforeAfter() {
  const beforeImg = PlaceHolderImages.find(img => img.id === 'before-comparison')
  const afterImg = PlaceHolderImages.find(img => img.id === 'after-comparison')

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-brand-red/10 text-brand-red border-none rounded-full px-4 py-1 uppercase text-xs font-bold tracking-widest">
            Visible Transformation
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-brand-dark tracking-tight">
            See The <span className="text-brand-coral">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Thousands have experienced the 10-day transformation. No magic, just consistent collagen repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="relative group">
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-brand-dark text-white px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest shadow-xl">
                Before
              </span>
            </div>
            <div className="aspect-[3/4] relative rounded-[40px] overflow-hidden border-4 border-[#F8F7F5] shadow-2xl">
              {beforeImg && (
                <Image
                  src={beforeImg.imageUrl}
                  alt="Skin before Sadoer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint={beforeImg.imageHint}
                />
              )}
            </div>
            <div className="mt-4 text-center md:text-left">
               <p className="font-bold text-muted-foreground uppercase text-xs tracking-widest">Dull, Uneven & Rough Texture</p>
            </div>
          </div>

          {/* After */}
          <div className="relative group">
            <div className="absolute top-6 right-6 z-20">
              <span className="bg-brand-coral text-white px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest shadow-xl">
                After
              </span>
            </div>
            <div className="aspect-[3/4] relative rounded-[40px] overflow-hidden border-4 border-brand-coral/20 shadow-2xl">
              {afterImg && (
                <Image
                  src={afterImg.imageUrl}
                  alt="Skin after Sadoer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint={afterImg.imageHint}
                />
              )}
            </div>
            <div className="mt-4 text-center md:text-right">
               <p className="font-bold text-brand-coral uppercase text-xs tracking-widest">Smooth, Bright & Youthful Glow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
