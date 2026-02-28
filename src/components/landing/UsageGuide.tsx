import React from 'react'
import { Lightbulb, Moon, ShieldCheck } from 'lucide-react'

export function UsageGuide() {
  return (
    <section id="how-to-use" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black">How To Use For Best Results</h2>
                <p className="text-lg text-brand-offwhite/60">Follow this simple routine to unlock your baby-smooth skin.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-brand-coral flex items-center justify-center shrink-0">
                    <Moon className="h-6 w-6 text-brand-dark" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">Night/Indoor Routine</h4>
                    <p className="text-brand-offwhite/70">Massage the serum into your face and follow up immediately with the face cream. Best used at night or when indoors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-brand-red flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">Sun Protection</h4>
                    <p className="text-brand-offwhite/70">Always use a sunscreen during the day to protect your new glowing skin from the harsh Nigerian sun.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Lightbulb className="h-6 w-6 text-brand-coral" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">Pro-Tip</h4>
                    <p className="text-brand-offwhite/70">Consistency is key. Use daily for 10 days straight to see the magic happen!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-darkBrown p-10 rounded-[40px] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <div className="h-24 w-24 rounded-full bg-brand-red flex items-center justify-center -rotate-12 shadow-2xl">
                  <span className="text-white font-black text-center text-xs uppercase leading-none">Limited<br/>Offer</span>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black">Limited Time Bundle</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 line-through text-lg">Normal Price: ₦43,500</p>
                  <p className="text-5xl font-black text-brand-coral">₦29,500</p>
                  <p className="text-brand-red font-bold uppercase tracking-widest text-sm">Save ₦14,000 Today!</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <p className="text-sm font-medium text-brand-offwhite/60 italic">"I finally feel confident going out without makeup again."</p>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-500 overflow-hidden">
                      <img src="https://picsum.photos/seed/face1/100/100" alt="Reviewer" />
                    </div>
                    <span className="text-xs font-bold uppercase">Ma. Grace, Lagos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
