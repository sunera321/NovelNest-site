'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, TrendingUp, Award, Heart, Sparkles } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Vast Library',
    description: 'Access thousands of stories across multiple genres, from romance to sci-fi.',
    color: 'from-cyan to-blue2'
  },
  {
    icon: Users,
    title: 'Connect with Authors',
    description: 'Follow your favorite authors and get notified when they publish new chapters.',
    color: 'from-green1 to-green2'
  },
  {
    icon: TrendingUp,
    title: 'Personalized Recommendations',
    description: 'Discover new stories tailored to your reading preferences and history.',
    color: 'from-secondary to-cyan'
  },
  {
    icon: Award,
    title: 'Author Analytics',
    description: 'Track your story performance with detailed analytics and reader engagement.',
    color: 'from-primary to-blue2'
  },
  {
    icon: Heart,
    title: 'Interactive Reading',
    description: 'Rate, comment, and engage with stories and fellow readers in real-time.',
    color: 'from-green2 to-cyan'
  },
  {
    icon: Sparkles,
    title: 'Rich Text Editor',
    description: 'Create beautiful stories with our intuitive rich text editor with formatting tools.',
    color: 'from-cyan to-green1'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Powerful Features for
            <span className="text-secondary"> Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a reader or a writer, NovelNest has everything you need for an amazing storytelling experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary via-blue2 to-secondary rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Everything You Need in One App
              </h3>
              <p className="text-xl text-gray-200 mb-6">
                NovelNest combines the best features of reading platforms with powerful writing tools, creating the ultimate storytelling ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green1 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Real-time sync across all your devices</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green2 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Free to use with no hidden charges</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
