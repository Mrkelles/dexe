"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

export function Hero() {

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-brand-coral/10 text-brand-coral border-none rounded-full px-4 py-1 uppercase text-xs font-bold tracking-widest">
                10-Day Skin Transformation
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-brand-dark">
                Transform Rough Skin Into a <span className="text-brand-coral">Baby-Smooth</span> Glow
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Get a younger, brighter face in just 10 days with our 2-in-1 Anti-Aging Glow Set. No bleaching, no irritation—just pure collagen restoration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-14 px-10 rounded-full bg-brand-dark text-white text-lg font-bold hover:bg-brand-dark/90 shadow-xl transition-all hover:scale-105"
              >
                PLACE YOUR ORDER NOW
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                    <Image 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
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
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm font-medium text-brand-dark">
                  Join <span className="text-brand-coral">3,500+</span> Men & Women who transformed their skin
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-brand-coral/5 rounded-full blur-3xl" />
              
                <Image 
                  src="https://i.ibb.co/WNPMRZHH/Untitled-500-x-300-px-20251012-014242-0000-removebg-preview-1-2.png"
                  alt="product bundle"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl"
                  data-ai-hint="product bundle"
                />
              
              
              <div className="absolute top-1/4 -left-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-brand-coral/10 animate-bounce-slow">
                <p className="text-xs font-bold text-brand-coral uppercase tracking-tighter">Bonus Gift</p>
                <p className="text-sm font-black text-brand-dark">Free Face Mask Included!</p>
              </div>

              <div className="absolute bottom-1/4 -right-4 z-20 bg-brand-dark p-4 rounded-2xl shadow-xl text-white">
                <p className="text-2xl font-black">₦29,500</p>
                <p className="text-xs text-gray-400 line-through">₦43,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
