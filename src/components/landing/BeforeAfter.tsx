"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function BeforeAfter() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-[#22C55E]/10 text-[#22C55E] border-none rounded-full px-4 py-1 uppercase text-xs font-bold tracking-widest">
            Instant Transformation
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase">
            Grey to <span className="text-[#22C55E]">Black</span> in 5 Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from our customers. No trick photography, just the power of Dexe herbal formula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="relative group">
            <div className="aspect-[3/4] relative rounded-[20px] overflow-hidden border-4 border-[#1A1A1A] shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/hair-before/600/800"
                  alt="Grey hair before Dexe"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="grey hair before"
                />
            </div>
            <div className="mt-4 text-center md:text-left">
               <p className="font-bold text-muted-foreground uppercase text-xs tracking-widest">Before: Visible Grey & Aged Look</p>
            </div>
          </div>

          {/* After */}
          <div className="relative group">
            <div className="aspect-[3/4] relative rounded-[20px] overflow-hidden border-4 border-[#22C55E]/20 shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/hair-after/600/800"
                  alt="Black hair after Dexe"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="black hair after"
                />
            </div>
            <div className="mt-4 text-center md:text-right">
               <p className="font-bold text-[#22C55E] uppercase text-xs tracking-widest">After: Natural Black & Youthful Glow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}