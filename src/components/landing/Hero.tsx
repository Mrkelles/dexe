
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-main')

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050505] to-[#111111] py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#22C55E]/20 text-[#22C55E] border-none rounded-full px-4 py-1 uppercase text-[10px] font-bold tracking-widest">
                Restore Your Youth Instantly
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
                Turn Grey Hair Back to <span className="text-[#22C55E]">Natural Black</span> in 5 Minutes!
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                Dexe Black Hair Shampoo is the original instant hair dye solution. No mixing, no salon appointments, and no messy chemicals. Just wash and glow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/order">
                <Button 
                  className="h-14 px-10 rounded-full bg-[#22C55E] text-white text-lg font-bold hover:bg-[#16A34A] shadow-heroPanel transition-all hover:scale-105"
                >
                  GET MY PACK NOW
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-[#1A1A1A]">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-[#1A1A1A] bg-[#22C55E]/20 overflow-hidden relative">
                    <Image 
                      src={`https://picsum.photos/seed/user-hair${i}/100/100`} 
                      alt="User" 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-[#22C55E] text-[#22C55E]" />)}
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Trusted by 10,000+ Men & Women across Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-[#22C55E]/10 rounded-full blur-3xl" />
              
              {heroImage && (
                <Image 
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl rounded-[20px]"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              
              <div className="absolute top-1/4 -left-4 z-20 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <p className="text-[10px] font-bold text-[#22C55E] uppercase tracking-wider">Original Dexe</p>
                <p className="text-sm font-black text-white">Lasts up to 30 Days!</p>
              </div>

              <div className="absolute bottom-1/4 -right-4 z-20 bg-[#22C55E] p-4 rounded-2xl shadow-heroPanel text-white">
                <p className="text-2xl font-black">₦25,000</p>
                <p className="text-xs text-white/60 line-through font-bold">₦35,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
