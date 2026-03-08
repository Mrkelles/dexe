"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ResultFocus() {
  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="aspect-[21/9] relative rounded-card overflow-hidden shadow-heroPanel border-8 border-brand-warmGrey">
            <Image
              src="https://picsum.photos/seed/transformation-large/1200/600"
              alt="Skin Transformation"
              fill
              className="object-cover"
              data-ai-hint="skincare results"
            />
          </div>
          <div className="text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
                The Result You've Been Praying For
              </h2>
              <p className="text-lg text-secondary-foreground max-w-2xl mx-auto font-medium">
                Stop wasting money on products that don't work. Our Collagen set is the final answer to your skin struggles.
              </p>
            </div>
            <Button 
              onClick={scrollToOrder}
              className="h-14 px-12 rounded-button bg-brand-amber hover:bg-brand-amber/90 text-white text-lg font-bold shadow-none transition-all hover:scale-105 uppercase tracking-tight"
            >
              GET YOURS NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}