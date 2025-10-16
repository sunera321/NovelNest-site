'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Fantasy Author',
      avatar: '👩‍🦰',
      rating: 5,
      text: 'NovelNest has transformed the way I publish my stories. The analytics help me understand my readers better, and the community is incredibly supportive!',
    },
    {
      name: 'James Chen',
      role: 'Avid Reader',
      avatar: '👨',
      rating: 5,
      text: 'I\'ve discovered so many amazing stories on NovelNest. The personalized recommendations are spot-on, and I love being able to follow my favorite authors.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Romance Writer',
      avatar: '👩',
      rating: 5,
      text: 'The rich text editor makes writing so easy! I can format my chapters beautifully and publish them instantly. My readers love the clean reading experience.',
    },
    {
      name: 'Michael Thompson',
      role: 'Sci-Fi Enthusiast',
      avatar: '🧑',
      rating: 5,
      text: 'Best storytelling app I\'ve used! The offline reading feature is perfect for my commute, and the library organization is fantastic.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Mystery Author',
      avatar: '👩‍🦱',
      rating: 5,
      text: 'I\'ve built a loyal following on NovelNest. The notification system keeps my readers engaged, and the comment feature creates great discussions.',
    },
    {
      name: 'David Park',
      role: 'Book Reviewer',
      avatar: '👨‍💼',
      rating: 5,
      text: 'The variety of genres and quality of stories on NovelNest is impressive. It\'s my go-to platform for discovering new talent and hidden gems.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied authors and readers who have found their home on NovelNest
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <FaQuoteLeft className="text-secondary text-3xl opacity-20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
