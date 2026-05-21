import React from 'react'
import Image from 'next/image'

export function StoryFeature() {

  return (
    <section className="bg-black py-12 md:py-20">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full lg:max-w-5xl bg-[#111111] rounded-[20px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-10 border border-[#22C55E]/10">
          <div className="w-full md:w-1/2 aspect-square relative rounded-[16px] overflow-hidden shadow-lg shrink-0">
            <Image
              src="https://picsum.photos/seed/hair-story/800/800"
              alt="Hair Transformation Story"
              fill
              className="object-cover"
              data-ai-hint="hair dye results"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter uppercase italic">
              "I Used to Spend ₦15,000 Every Month at the Barbing Salon"
            </h3>
            <p className="text-lg font-medium text-muted-foreground leading-relaxed">
              Every time my grey hair started showing, I'd rush to the salon. It was expensive and time-consuming. Then my brother introduced me to Dexe. Now, I just spend 5 minutes in my bathroom once a month, and I look 10 years younger instantly. It's the best investment for my confidence.
            </p>
            <div className="pt-2">
               <p className="text-[11px] font-bold uppercase bg-[#22C55E] text-black inline-block px-4 py-1.5 rounded-full">Real Customer Story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}