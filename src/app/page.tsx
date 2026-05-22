
import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { PromoBanner } from '@/components/landing/PromoBanner'
import { ProofGallery } from '@/components/landing/ProofGallery'
import { StoryFeature } from '@/components/landing/StoryFeature'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { ProductShowcase } from '@/components/landing/ProductShowcase'
import { UsageGuide } from '@/components/landing/UsageGuide'
import { OrderForm } from '@/components/landing/OrderForm'
import { BeforeAfter } from '@/components/landing/BeforeAfter'
import { ResultFocus } from '@/components/landing/ResultFocus'
import { GlobalTrust } from '@/components/landing/GlobalTrust'
import { NaturalIngredients } from '@/components/landing/NaturalIngredients'
import { Toaster } from '@/components/ui/toaster'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function Home() {
  const trustImage = PlaceHolderImages.find(img => img.id === 'trust-banner-product')
  const testimonialImage = PlaceHolderImages.find(img => img.id === 'testimonial-full-image')

  return (
    <main className="min-h-screen bg-black text-white font-body">
      <Header />
      
      <Hero />
      
      <div className="bg-[#0A0A0A] py-12 border-y border-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-8">Trusted by families in Lagos, Abuja, Ibadan & more</p>
          <div className="flex flex-wrap justify-center gap-12">
            {['Beauty Daily', 'Glow Mag', 'Health Hub', 'Nigeria Skincare'].map((name, i) => (
              <span key={i} className="text-xl font-black text-[#22C55E]">{name}</span>
            ))}
          </div>
        </div>
      </div>

      <StoryFeature />

      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="relative aspect-[768/489] max-w-4xl mx-auto rounded-[20px] overflow-hidden">
            {trustImage && (
              <Image 
                src={trustImage.imageUrl}
                alt={trustImage.description}
                fill
                className="object-contain"
                data-ai-hint={trustImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>

      <BeforeAfter />

      <PromoBanner />

      <ProblemSolution />

      <ProofGallery />

      <GlobalTrust />

      {/* Replaced ReviewGrid with Testimonial Image Section */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">What Our Customers Say</h2>
            <p className="text-muted-foreground font-medium">Real results shared by our global community.</p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="relative aspect-[481/1024] w-full rounded-[20px] overflow-hidden bg-[#0A0A0A]">
              {testimonialImage && (
                <Image
                  src={testimonialImage.imageUrl}
                  alt={testimonialImage.description}
                  fill
                  className="object-contain"
                  data-ai-hint={testimonialImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
 
      <ResultFocus />

      <ProductShowcase />

      <NaturalIngredients />

      <UsageGuide />

      <OrderForm />

      <footer className="py-12 bg-black border-t border-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs text-muted-foreground">
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
            </p>
            <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <p>&copy; 2026 Oello Shop. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#22C55E]">Privacy Policy</a>
                <a href="#" className="hover:text-[#22C55E]">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  )
}
