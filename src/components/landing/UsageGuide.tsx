
import React from 'react'
import { Lightbulb, ShowerHead, Watch } from 'lucide-react'

export function UsageGuide() {
  return (
    <section id="how-to-use" className="py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-black text-white">How To Use For Best Results</h2>
                <p className="text-lg text-white/60 font-medium">Follow these simple steps to restore your natural black hair.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#F0A500] flex items-center justify-center shrink-0">
                    <ShowerHead className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Step 1: Wet Hair</h4>
                    <p className="text-white/60 text-sm">Wet your hair thoroughly and wipe it slightly so it is not dripping wet but still moist.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Watch className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Step 2: Apply & Wait</h4>
                    <p className="text-white/60 text-sm">Wear gloves, pour shampoo into your hands and massage into hair. Wait for 5-10 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#F0A500] flex items-center justify-center shrink-0">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Step 3: Rinse Off</h4>
                    <p className="text-white/60 text-sm">Rinse thoroughly with water. You'll see your jet black hair immediately!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-[20px] border border-white/10 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 p-8">
                <div className="h-20 w-20 rounded-full bg-[#F0A500] flex items-center justify-center -rotate-12 shadow-heroPanel">
                  <span className="text-white font-black text-center text-[10px] uppercase leading-none tracking-widest">Limited<br/>Offer</span>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white">Today's Special Deal</h3>
                <div className="space-y-1">
                  <p className="text-white/40 line-through text-lg font-medium">Normal Price: ₦25,000</p>
                  <p className="text-5xl font-black text-[#F0A500] tracking-tighter tabular-nums">₦18,500</p>
                  <p className="text-[#F0A500] font-bold uppercase tracking-widest text-[10px]">Save ₦6,500 Today!</p>
                </div>
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <p className="text-sm font-medium text-white/70 italic leading-relaxed">"It's like I have a new head of hair. I look and feel much more confident."</p>
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-white/20 overflow-hidden border border-white/20">
                      <img src="https://picsum.photos/seed/face-h/100/100" alt="Reviewer" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">Musa B., Abuja</span>
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
