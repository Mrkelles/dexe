"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Chinedu A.",
    location: "Lagos",
    content: "I’ve always been skeptical about skincare products, but after noticing dark patches and dullness on my face, I decided to try the Sadoer combo set. Within 2 weeks, my skin tone became more even, and the dull patches faded significantly without bleaching.",
  },
  {
    name: "Felicia",
    location: "Abuja",
    content: "My face was rough Even makeup couldn’t hide it anymore. I used to feel so self-conscious. My face was full of fine lines, rough patches, and it just looked tired all the time. But within 2 weeks, I noticed my face was firmer, smoother, and more alive. Now people say I look 10 years younger!",
  },
  {
    name: "Veronica",
    location: "Lagos",
    content: "I Can’t Believe My Acne Scars Are Fading! For years, I honestly thought my acne scars were permanent. Within weeks, my acne scars started fading, my face felt so much smoother, and the dull, rough look I had before? Gone.",
  },
  {
    name: "Funmi A.",
    location: "Ibadan",
    content: "After having my second baby, my skin changed so much. It became dull, patchy, and had weird breakouts. The difference? Amazing. My skin is smooth, the dark patches have reduced, and that pregnancy glow I thought I lost—it's back!",
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

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <Card className="h-full border-none shadow-xl rounded-[32px] overflow-hidden">
                    <CardContent className="p-8 space-y-6 flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-4 w-4 fill-current" />)}
                        </div>
                        <Quote className="h-10 w-10 text-brand-coral/20" />
                        <p className="text-lg font-medium text-brand-dark leading-relaxed">
                          "{t.content}"
                        </p>
                      </div>
                      <div className="pt-6 border-t border-gray-100">
                        <p className="font-black text-brand-dark">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16" />
            <CarouselNext className="hidden md:flex -right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
