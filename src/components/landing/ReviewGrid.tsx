
"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const allReviews = [
  {
    name: "Ma. Grace",
    location: "Lagos",
    content: "My face used to have visible wrinkles and fine lines, and my skin looked tired all the time. But since I started using both the serum and the cream together, the difference has been clear. My skin is now brighter, smoother.",
    imageId: "testimonial-1"
  },
  {
    name: "Vincent E.",
    location: "Port Harcourt",
    content: "My job keeps me constantly stressed, and it was really showing on my face—dull skin, dark under-eyes. My skin now looks fresher, brighter, and more alive. Highly recommend it!",
    imageId: "testimonial-2"
  },
  {
    name: "Adesuwa",
    location: "Abeokuta",
    content: "My skin was looking tired and I had some dark patches from pregnancy. I've been using this sadoer set for about two months now and the changes are clear. My face just looks fresh!",
    imageId: "testimonial-3"
  },
  {
    name: "Mrs. Olayinka",
    location: "Lagos",
    content: "At 50, I had tried so many products with no real results. But using the Sadoer Serum and Cream together changed everything. My skin is now softer, brighter.",
    imageId: "testimonial-4"
  },
  {
    name: "Chinedu A.",
    location: "Lagos",
    content: "I’ve always been skeptical about skincare products, but after noticing dark patches and dullness on my face, I decided to try the Sadoer combo set. Within 2 weeks, my skin tone became more even.",
    imageId: "testimonial-5"
  },
  {
    name: "Felicia",
    location: "Abuja",
    content: "My face was rough Even makeup couldn’t hide it anymore. I used to feel so self-conscious. My face was full of fine lines, rough patches, and it just looked tired all the time. But within 2 weeks, I noticed my face was firmer.",
    imageId: "testimonial-6"
  },
  {
    name: "Veronica",
    location: "Lagos",
    content: "I Can’t Believe My Acne Scars Are Fading! For years, I honestly thought my acne scars were permanent. Within weeks, my acne scars started fading, my face felt so much smoother.",
    imageId: "testimonial-7"
  },
  {
    name: "Funmi A.",
    location: "Ibadan",
    content: "After having my second baby, my skin changed so much. It became dull, patchy, and had weird breakouts. The difference? Amazing. My skin is smooth, the dark patches have reduced!",
    imageId: "testimonial-8"
  },
  {
    name: "Blessing O.",
    location: "Benin City",
    content: "I finally found what works! The dark spots on my cheeks that wouldn't budge are finally clearing up. My skin feels so soft and hydrated throughout the day.",
    imageId: "testimonial-9"
  }
]

export function ReviewGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-dark">More Stories of Transformation</h2>
          <p className="text-muted-foreground">Real people, real results, real confidence restored.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allReviews.map((rev, i) => {
            const reviewImage = PlaceHolderImages.find(img => img.id === rev.imageId)
            return (
              <Card key={i} className="h-full border-none shadow-xl rounded-[40px] overflow-hidden bg-white group hover:scale-[1.02] transition-transform duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {reviewImage && (
                    <Image 
                      src={reviewImage.imageUrl} 
                      alt={rev.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={reviewImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-4 w-4 fill-current" />)}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-brand-coral/10 rotate-180" />
                      <p className="text-base font-medium text-brand-dark leading-relaxed relative z-10 italic">
                        "{rev.content}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="font-black text-brand-dark uppercase tracking-tight">{rev.name}</p>
                      <p className="text-xs font-bold text-brand-coral uppercase tracking-widest">{rev.location}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-brand-coral/10 flex items-center justify-center">
                      <Quote className="h-5 w-5 text-brand-coral" />
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
