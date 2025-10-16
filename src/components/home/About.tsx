'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBook, FaHeart, FaUsers, FaMobile, FaLightbulb } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: FaBook,
      title: 'Digital Storytelling',
      description: 'A modern platform designed for the digital age of storytelling and reading.',
    },
    {
      icon: FaUsers,
      title: 'Community Driven',
      description: 'Connect authors and readers in a vibrant, engaging community.',
    },
    {
      icon: FaMobile,
      title: 'Mobile First',
      description: 'Read and write on the go with our optimized mobile application.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Features',
      description: 'Rich text editor, analytics, notifications, and personalized recommendations.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-6">
            About <span className="gradient-text">NovelNest</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering storytellers and readers with a seamless digital experience
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Our <span className="gradient-text">Mission</span>
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              NovelNest is a digital storytelling platform that streamlines the user experience 
              for both authors and readers. We believe that everyone has a story to tell, and 
              every reader deserves access to diverse, engaging content.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to create a thriving ecosystem where creativity flourishes, 
              communities connect, and stories come to life in the hands of millions of readers 
              around the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-4 rounded-xl">
                  <FaHeart className="text-4xl text-green1" />
                </div>
                <h3 className="text-2xl font-bold">Built with Passion</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                NovelNest was created with love for storytelling and a deep understanding 
                of what authors and readers need. Every feature is carefully crafted to 
                enhance the reading and writing experience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan to-green1 p-3 rounded-xl flex-shrink-0">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
