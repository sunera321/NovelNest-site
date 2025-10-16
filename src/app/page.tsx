import dynamic from 'next/dynamic'

// Dynamically import all client components with ssr: false to avoid hydration issues
const Hero = dynamic(() => import('@/components/home/Hero'), { ssr: false })
const Features = dynamic(() => import('@/components/home/Features'), { ssr: false })
const HowItWorks = dynamic(() => import('@/components/home/HowItWorks'), { ssr: false })
const ForAuthors = dynamic(() => import('@/components/home/ForAuthors'), { ssr: false })
const ForReaders = dynamic(() => import('@/components/home/ForReaders'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: false })
const About = dynamic(() => import('@/components/home/About'), { ssr: false })
const Contact = dynamic(() => import('@/components/home/Contact'), { ssr: false })
const CTA = dynamic(() => import('@/components/home/CTA'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <ForReaders />
      <ForAuthors />
      <Testimonials />
      <About />
      <Contact />
 
    </>
  )
}
