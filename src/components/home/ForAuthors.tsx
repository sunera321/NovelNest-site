'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPencilAlt, FaChartLine, FaUsers, FaBell } from 'react-icons/fa'

export default function ForAuthors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: FaPencilAlt,
      title: 'Rich Text Editor',
      description: 'Write and format your stories with our intuitive editor.',
    },
    {
      icon: FaChartLine,
      title: 'Detailed Analytics',
      description: 'Track reads, likes, and engagement on your stories.',
    },
    {
      icon: FaUsers,
      title: 'Build Your Audience',
      description: 'Gain followers and connect with your readers directly.',
    },
    {
      icon: FaBell,
      title: 'Instant Notifications',
      description: 'Notify followers when you publish new chapters.',
    },
  ]

  return (
    <section id="authors" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Author Dashboard</h3>
              
              {/* Recent Activity */}
              <div className="space-y-3">
                <div className="text-sm font-semibold mb-2">Recent Activity</div>
                {[
                  { activity: 'New chapter published', time: '2 hours ago' },
                  { activity: 'Reader left a comment', time: '5 hours ago' },
                  { activity: 'New follower gained', time: '1 day ago' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-lg p-3">
                    <div className="w-8 h-8 bg-green1 rounded-full flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.activity}</div>
                      <div className="text-xs opacity-70">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="heading-lg text-primary mb-6">
              For <span className="gradient-text">Authors</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Share your creativity with the world. Our platform gives you all the tools you need 
              to write, publish, and grow your readership.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="bg-gradient-to-br from-green1 to-green2 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
