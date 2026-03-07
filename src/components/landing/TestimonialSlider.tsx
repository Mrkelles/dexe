
"use client"

import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const testimonials = [
  {
    name: "Chinedu A.",
    location: "Lagos",
    content: "I’ve always been skeptical about skincare products, but after noticing dark patches and dullness on my face, I decided to try the Sadoer combo set. Within 2 weeks, my skin tone became more even, and the dull patches faded significantly without bleaching.",
    imageId: "testimonial-2"
  },
  {
    name: "Felicia",
    location: "Abuja",
    content: "My face was rough Even makeup couldn’t hide it anymore. I used to feel so self-conscious. My face was full of fine lines, rough patches, and it just looked tired all the time. But within 2 weeks, I noticed my face was firmer, smoother, and more alive. Now people say I look 10 years younger!",
    imageId: "testimonial-1"
  },
  {
    name: "Veronica",
    location: "Lagos",
    content: "I Can’t Believe My Acne Scars Are Fading! For years, I honestly thought my acne scars were permanent. Within weeks, my acne scars started fading, my face felt so much smoother, and the dull, rough look I had before? Gone.",
    imageId: "testimonial-3"
  },
  {
    name: "Funmi A.",
    location: "Ibadan",
    content: "After having my second baby, my skin changed so much. It became dull, patchy, and had weird breakouts. The difference? Amazing. My skin is smooth, the dark patches have reduced, and that pregnancy glow I thought I lost—it's back!",
    imageId: "testimonial-4"
  }
]

export function TestimonialSlider() {
  return (
    <section id="testimonials" className="py-24 bg-[#F4F2F0]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-dark">Testimonies From Happy Customers</h2>
          <p className="text-muted-foreground">Don't just take our word for it—see what others are saying.</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => {
                const testimonialImage = PlaceHolderImages.find(img => img.id === t.imageId)
                return (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <Card className="h-full border-none shadow-xl rounded-[40px] overflow-hidden bg-white group hover:scale-[1.02] transition-transform duration-300">
                      {/* Medium-sized, almost full-width image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        {testimonialImage && (
                          <Image 
                            src={testimonialImage.imageUrl} 
                            alt={t.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={testimonialImage.imageHint}
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
                              "{t.content}"
                            </p>
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                          <div>
                            <p className="font-black text-brand-dark uppercase tracking-tight">{t.name}</p>
                            <p className="text-xs font-bold text-brand-coral uppercase tracking-widest">{t.location}</p>
                          </div>
                          <div className="h-10 w-10 rounded-full bg-brand-coral/10 flex items-center justify-center">
                            <Quote className="h-5 w-5 text-brand-coral" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex -left-16 bg-white border-none shadow-lg hover:bg-brand-coral hover:text-white transition-colors" />
            <CarouselNext className="hidden xl:flex -right-16 bg-white border-none shadow-lg hover:bg-brand-coral hover:text-white transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
