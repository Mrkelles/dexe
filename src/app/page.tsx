
import React from 'react'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { PromoBanner } from '@/components/landing/PromoBanner'
import { SideFeature } from '@/components/landing/SideFeature'
import { StoryFeature } from '@/components/landing/StoryFeature'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { ProductShowcase } from '@/components/landing/ProductShowcase'
import { TestimonialSlider } from '@/components/landing/TestimonialSlider'
import { ReviewGrid } from '@/components/landing/ReviewGrid'
import { UsageGuide } from '@/components/landing/UsageGuide'
import { OrderForm } from '@/components/landing/OrderForm'
import { Toaster } from '@/components/ui/toaster'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function Home() {
  const whatsapp1 = PlaceHolderImages.find(img => img.id === 'whatsapp-proof-1')
  const whatsapp2 = PlaceHolderImages.find(img => img.id === 'whatsapp-proof-2')

  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />

      <PromoBanner />

      <StoryFeature />

      <SideFeature />

      {/* Trust Banner */}
      <div className="bg-[#F8F7F5] py-12 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-8">Trusted by families in Lagos, Abuja, Ibadan & more</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {['Beauty Daily', 'Glow Mag', 'Health Hub', 'Nigeria Skincare'].map((name, i) => (
              <span key={i} className="text-xl font-black">{name}</span>
            ))}
          </div>
        </div>
      </div>

      <ProblemSolution />

      <ProductShowcase />

      <TestimonialSlider />

      <UsageGuide />

      <ReviewGrid />

      {/* WhatsApp Testimonials */}
      <section className="py-24 bg-[#F4F2F0]">
        <div className="container mx-auto px-4 text-center space-y-12">
          <h2 className="text-4xl font-black text-brand-dark">More WhatsApp Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              {whatsapp1 && (
                <Image 
                  src={whatsapp1.imageUrl} 
                  alt="WhatsApp Proof" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint={whatsapp1.imageHint}
                />
              )}
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              {whatsapp2 && (
                <Image 
                  src={whatsapp2.imageUrl} 
                  alt="WhatsApp Proof 2" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint={whatsapp2.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <OrderForm />

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs text-muted-foreground">
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
            </p>
            <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <p>&copy; 2024 Sadoer Youthful Glow. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-brand-coral">Privacy Policy</a>
                <a href="#" className="hover:text-brand-coral">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  )
}
