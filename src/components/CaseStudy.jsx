import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

const CaseStudy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="section-padding bg-gray-900/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Real results from real clients. See how we've helped businesses transform 
              their technology infrastructure and operations.
            </p>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 md:p-16"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <img 
                  src="/logo.png" 
                  alt="DAS Consulting Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">
                Client Success Stories
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover how we've transformed businesses with our innovative solutions. 
                From data lake automation to cloud architecture, see real results from real clients.
              </p>

              {/* Placeholder Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { number: "40%", label: "Cost Reduction" },
                  { number: "300%", label: "Deployment Speed" },
                  { number: "99.9%", label: "Uptime" },
                  { number: "50%", label: "Faster Development" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/case-studies"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  View Case Studies
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Be Our Next Success Story
                </motion.a>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-8 right-8 w-4 h-4 bg-primary/30 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-8 left-8 w-6 h-6 bg-primary/20 rounded-full"
              animate={{
                y: [0, 15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Bottom Note */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-8 text-sm"
          >
            Interested in seeing our work in action? Let's discuss your specific challenges 
            and how we can help you achieve similar results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudy
