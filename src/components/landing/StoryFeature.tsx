
import React from 'react'
import Image from 'next/image'

export function StoryFeature() {

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full lg:max-w-5xl bg-[#FFC800] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-10 border-4 border-black">
          <div className="w-full md:w-1/2 aspect-square relative rounded-3xl overflow-hidden shadow-lg shrink-0">
            
              <Image
                src="https://i.ibb.co/7xgc3NFz/Whats-App-Image-2024-09-09-at-13-06-03-da9ab460-768x768-1.jpg"
                alt="pregnancy-before-after"
                fill
                className="object-cover"
                data-ai-hint="story-feature"
              />
            
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-black leading-tight uppercase italic tracking-tighter">
              "After Having My Second Baby, My Skin Just Changed"
            </h3>
            <p className="text-lg font-bold text-black leading-relaxed">
              I Had Dark Patches, Dullness, And Wrinkles That Made Me Feel Older Than I Am. Nothing I Tried Worked—Until I Heard Someone At A Bridal Shower Mention The Sadoer Glow & Firm Set. Just 2 Weeks In, My Face Felt Smoother, Brighter, And Even My Husband Noticed, And That Meant Everything To Me.. I Finally Feel Confident Going Out Without Makeup Again.
            </p>
            <div className="pt-2">
               <p className="text-xs font-black uppercase bg-black text-[#FFC800] inline-block px-4 py-1.5 rounded-full">Real Customer Story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
