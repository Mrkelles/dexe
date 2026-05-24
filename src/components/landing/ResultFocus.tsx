
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function ResultFocus() {
  const resultImage = PlaceHolderImages.find(img => img.id === 'result-focus-main')
  
  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-8">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                The Result You've Been Praying For
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                Stop wasting money on products that don't work. Dexe Black Hair Shampoo is the final answer to your hair struggles. Get the youth you deserve today.
              </p>
            </div>
            <Link href="/order">
              <Button 
                className=" mt-8 h-14 px-12 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg font-bold shadow-none transition-all hover:scale-105 uppercase tracking-tight"
              >
                GET YOURS NOW
              </Button>
            </Link>
          </div>

          <div className="aspect-square relative rounded-[20px] overflow-hidden shadow-heroPanel max-w-2xl mt-16 mx-auto bg-[#0A0A0A]">
            {resultImage && (
              <Image
                src={resultImage.imageUrl}
                alt={resultImage.description}
                fill
                className="object-contain"
                data-ai-hint={resultImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
