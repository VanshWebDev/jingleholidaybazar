export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ImagesGrid from '@/components/ImagesGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ImagesGrid/>
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
