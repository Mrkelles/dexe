
"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const allReviews = [
  {
    name: "Alhaji Musa",
    location: "Kano",
    content: "I've been using hair dye for years, but the mess was always too much. Dexe is like magic. I just wash my hair with it in the morning, and by the time I'm out of the shower, my grey is gone.",
    imageId: "testimonial-1"
  },
  {
    name: "Mrs. Ngozi",
    location: "Lagos",
    content: "My husband was looking so much older than his age because of grey hair. I bought this for him and he looks 10 years younger now. Even the hair texture improved!",
    imageId: "testimonial-2"
  },
  {
    name: "Emeka V.",
    location: "Enugu",
    content: "Great product. It doesn't stain my skin like regular dyes. The black is very deep and natural-looking. I'm on my 3rd box now.",
    imageId: "testimonial-3"
  }
]

export function ReviewGrid() {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">Real Stories of Transformation</h2>
          <p className="text-muted-foreground font-medium">Real people, real results, real confidence restored.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {allReviews.map((rev, i) => {
            const reviewImage = PlaceHolderImages.find(img => img.id === rev.imageId)
            return (
              <Card key={i} className="h-full border border-[#1A1A1A] shadow-2xl rounded-[16px] overflow-hidden bg-[#0A0A0A] group hover:border-[#22C55E]/40 transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {reviewImage && (
                    <Image 
                      src={reviewImage.imageUrl} 
                      alt={rev.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={reviewImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex text-[#22C55E]">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-3 w-3 fill-current" />)}
                    </div>
                    <p className="text-sm font-medium text-white leading-relaxed italic">
                      "{rev.content}"
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-tight">{rev.name}</p>
                      <p className="text-[10px] font-bold text-[#22C55E] uppercase tracking-widest">{rev.location}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                      <Quote className="h-4 w-4 text-[#22C55E]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
