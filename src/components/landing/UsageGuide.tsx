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
                <h2 className="text-3xl lg:text-5xl font-black text-white">How To Use For Best Results</h2>
                <p className="text-lg text-white/60 font-medium">Follow this simple routine to unlock your baby-smooth skin.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-amber flex items-center justify-center shrink-0">
                    <Moon className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Night/Indoor Routine</h4>
                    <p className="text-white/60 text-sm">Massage the serum into your face and follow up immediately with the face cream. Best used at night or when indoors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Sun Protection</h4>
                    <p className="text-white/60 text-sm">Always use a sunscreen during the day to protect your new glowing skin from the harsh Nigerian sun.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-amber flex items-center justify-center shrink-0">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Pro-Tip</h4>
                    <p className="text-white/60 text-sm">Consistency is key. Use daily for 10 days straight to see the magic happen!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-heroPanel border border-white/10 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 p-8">
                <div className="h-20 w-20 rounded-full bg-brand-amber flex items-center justify-center -rotate-12 shadow-heroPanel">
                  <span className="text-white font-black text-center text-[10px] uppercase leading-none tracking-widest">Limited<br/>Offer</span>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white">Limited Time Bundle</h3>
                <div className="space-y-1">
                  <p className="text-white/40 line-through text-lg font-medium">Normal Price: ₦43,500</p>
                  <p className="text-5xl font-black text-brand-amber tracking-tighter tabular-nums">₦29,500</p>
                  <p className="text-brand-amber font-bold uppercase tracking-widest text-[10px]">Save ₦14,000 Today!</p>
                </div>
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <p className="text-xs font-medium text-white/70 italic leading-relaxed">"I finally feel confident going out without makeup again."</p>
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-white/20 overflow-hidden border border-white/20">
                      <img src="https://picsum.photos/seed/face1/100/100" alt="Reviewer" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">Ma. Grace, Lagos</span>
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