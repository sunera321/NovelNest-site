'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="heading-lg text-white mb-4">
            Join Our <span className="text-green1">Community</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Be part of a thriving community of storytellers and readers
          </p>
        </motion.div>
      </div>
    </section>
  )
}
