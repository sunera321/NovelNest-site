'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green1/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-white mb-6">
            Ready to Start Your <span className="text-green1">Story Journey</span>?
          </h2>
          <p className="text-xl text-gray-100 mb-10 leading-relaxed">
            Join NovelNest today and discover a world of stories. Whether you're here to read or write, 
            your next adventure begins now.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white mt-8">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span>100% Free to Start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span>Easy to Get Started</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
