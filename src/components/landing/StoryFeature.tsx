
import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function StoryFeature() {
  const storyImg = PlaceHolderImages.find(img => img.id === 'story-before-after')

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full lg:max-w-5xl bg-[#FFC800] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-6 md:p-8 gap-8">
          <div className="w-full md:w-[45%] aspect-[4/3] relative rounded-2xl overflow-hidden border-2 border-black">
            {storyImg && (
              <Image
                src={storyImg.imageUrl}
                alt={storyImg.description}
                fill
                className="object-cover"
                data-ai-hint={storyImg.imageHint}
              />
            )}
          </div>
          <div className="w-full md:w-[55%] space-y-4 md:pr-4">
            <h3 className="text-xl md:text-2xl font-black text-black leading-tight">
              After Having My Second Baby, My Skin Just Changed
            </h3>
            <p className="text-sm md:text-base font-medium text-black leading-relaxed">
              I Had Dark Patches, Dullness, And Wrinkles That Made Me Feel Older Than I Am. Nothing I Tried Worked—Until I Heard Someone At A Bridal Shower Mention The Sadoer Glow & Firm Set. Just 2 Weeks In, My Face Felt Smoother, Brighter, And Even My Husband Noticed, And That Meant Everything To Me.. I Finally Feel Confident Going Out Without Makeup Again.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
