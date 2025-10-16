'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-6">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with the NovelNest team
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-gradient-to-br from-cyan to-green1 p-4 rounded-xl">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Email</h4>
                    <a 
                      href="mailto:shehanikavishkarg@gmail.com"
                      className="text-secondary hover:text-cyan transition-colors text-base break-all"
                    >
                      shehanikavishkarg@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-gradient-to-br from-secondary to-cyan p-4 rounded-xl">
                    <FaPhone className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Phone</h4>
                    <a 
                      href="tel:+94712170538"
                      className="text-secondary hover:text-cyan transition-colors text-base"
                    >
                      +94 71 217 0538
                    </a>
                  </div>
                </div>
              </div>

              {/* Name Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-gradient-to-br from-green1 to-green2 p-4 rounded-xl">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Developer</h4>
                    <p className="text-gray-700 text-base">Shehani Kavishka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Feedback Section */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-3xl font-bold text-primary mb-4">Contact & Feedback</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions or feedback? We&apos;d love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                    <FaEnvelope className="mr-2 text-xl" />
                    Contact Us
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-secondary to-cyan text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                    <FaPhone className="mr-2 text-xl" />
                    Send Feedback
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
