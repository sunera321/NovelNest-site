'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const readerFeatures = [
  'Personalized reading recommendations',
  'Track reading progress across all stories',
  'Follow favorite authors for updates',
  'Rate and review your favorite chapters',
  'Create and manage your library',
  'Discover trending and popular stories',
  'Bookmark and save stories for later',
  'Engage with the community through comments'
]

export default function ForReaders() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-green1/20 to-green2/20 text-green1 px-5 py-2.5 rounded-full font-semibold mb-6 border border-green1/30"
            >
              For Readers
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary">Immerse Yourself in </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green1 to-green2">Endless Stories</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Dive into a world of captivating narratives. With NovelNest, discover stories that match your taste and keep you hooked from the first page to the last.
            </p>

            <div className="space-y-3.5">
              {readerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-green1 to-green2 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:pl-8"
          >
            <div className="relative">
              {/* Main card container */}
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative bg-gradient-to-br from-[#45DFB1] via-[#5CE5B8] to-[#80ED99] rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
              >
                {/* Decorative background patterns */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                
                {/* Story Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative bg-white/10 backdrop-blur-sm rounded-[1.5rem] p-6 mb-5 border border-white/20"
                >
                  <div className="flex items-start gap-4 mb-5">
                    {/* Avatar/Image placeholder */}
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex-shrink-0"></div>
                    {/* Title lines */}
                    <div className="flex-1 space-y-2.5">
                      <div className="h-3 bg-white/30 rounded-full"></div>
                      <div className="h-2.5 bg-white/20 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  {/* Content lines */}
                  <div className="space-y-2.5">
                    <div className="h-2 bg-white/25 rounded-full"></div>
                    <div className="h-2 bg-white/25 rounded-full w-11/12"></div>
                    <div className="h-2 bg-white/25 rounded-full w-4/5"></div>
                  </div>
                </motion.div>

                {/* Story Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="relative bg-white/10 backdrop-blur-sm rounded-[1.5rem] p-6 border border-white/20"
                >
                  <div className="flex items-start gap-4 mb-5">
                    {/* Avatar/Image placeholder */}
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex-shrink-0"></div>
                    {/* Title lines */}
                    <div className="flex-1 space-y-2.5">
                      <div className="h-3 bg-white/30 rounded-full w-4/5"></div>
                      <div className="h-2.5 bg-white/20 rounded-full w-2/5"></div>
                    </div>
                  </div>
                  {/* Content lines */}
                  <div className="space-y-2.5">
                    <div className="h-2 bg-white/25 rounded-full"></div>
                    <div className="h-2 bg-white/25 rounded-full w-5/6"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Background glow effect */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-gradient-to-br from-green1/20 to-green2/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
