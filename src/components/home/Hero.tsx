'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-blue2 to-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-green1/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <Sparkles className="w-5 h-5 text-cyan" />
              <span className="text-sm font-medium">Where Stories Come to Life</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Discover Stories,
              <br />
              <span className="text-cyan">Unleash</span> Your
              <br />
              <span className="text-green1">Imagination</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 max-w-lg"
            >
              Join thousands of readers and writers in the ultimate digital storytelling platform. Read, write, and share captivating stories.
            </motion.p>

          </motion.div>

          {/* Right Content - App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              {/* Phone mockup */}
              <div className="relative mx-auto w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-8 bg-gray-900 rounded-b-3xl z-20 flex justify-center items-center">
                  <div className="w-20 h-4 bg-gray-800 rounded-full"></div>
                </div>
                <div className="h-full bg-gradient-to-br from-primary to-secondary p-6 pt-12">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="w-full h-32 bg-cyan/20 rounded-xl mb-3"></div>
                      <div className="h-4 bg-white/30 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="w-full h-24 bg-green1/20 rounded-xl mb-3"></div>
                      <div className="h-4 bg-white/30 rounded w-2/3 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 -right-10 w-20 h-20 bg-cyan/30 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-20 -left-10 w-16 h-16 bg-green1/30 backdrop-blur-sm rounded-2xl border border-white/20"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
