
import React from 'react'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { PromoBanner } from '@/components/landing/PromoBanner'
import { ProofGallery } from '@/components/landing/ProofGallery'
import { StoryFeature } from '@/components/landing/StoryFeature'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { ProductShowcase } from '@/components/landing/ProductShowcase'
import { ReviewGrid } from '@/components/landing/ReviewGrid'
import { UsageGuide } from '@/components/landing/UsageGuide'
import { OrderForm } from '@/components/landing/OrderForm'
import { BeforeAfter } from '@/components/landing/BeforeAfter'
import { ResultFocus } from '@/components/landing/ResultFocus'
import { GlobalTrust } from '@/components/landing/GlobalTrust'
import { NaturalIngredients } from '@/components/landing/NaturalIngredients'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-body">
      <Header />
      
      <Hero />
      
      <div className="bg-[#0A0A0A] py-12 border-y border-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-8">Trusted by families in Lagos, Abuja, Ibadan & more</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale invert">
            {['Beauty Daily', 'Glow Mag', 'Health Hub', 'Nigeria Skincare'].map((name, i) => (
              <span key={i} className="text-xl font-black text-white">{name}</span>
            ))}
          </div>
        </div>
      </div>

      <StoryFeature />

      <BeforeAfter />

      <PromoBanner />

      <ProblemSolution />

      <ProofGallery />

      <GlobalTrust />

      <ReviewGrid />
 
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
