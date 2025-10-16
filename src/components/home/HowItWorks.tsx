'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUserPlus, FaBookOpen, FaPencilAlt, FaUsers } from 'react-icons/fa'

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: FaUserPlus,
      title: 'Sign Up',
      description: 'Create your free account in seconds. Choose your favorite genres and preferences.',
      color: 'from-secondary to-cyan',
    },
    {
      icon: FaBookOpen,
      title: 'Discover',
      description: 'Browse thousands of stories or get personalized recommendations just for you.',
      color: 'from-cyan to-green1',
    },
    {
      icon: FaPencilAlt,
      title: 'Create',
      description: 'Write and publish your own stories with our intuitive rich text editor.',
      color: 'from-green1 to-green2',
    },
    {
      icon: FaUsers,
      title: 'Connect',
      description: 'Follow your favorite authors, engage with readers, and build your community.',
      color: 'from-green2 to-secondary',
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">
            How <span className="gradient-text">NovelNest</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with NovelNest in four simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-cyan to-green1 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Number and Icon */}
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-br ${step.color} w-24 h-24 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white text-4xl" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-primary font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
