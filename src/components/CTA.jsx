import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
    <section id="contact" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Ready to <span className="gradient-text">modernize</span> your business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Let's talk about how we can help you build scalable, secure, and automated solutions 
              that drive your business forward.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="https://calendly.com/das-consulting/consultation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-4"
            >
              <MessageCircle size={20} />
              Schedule a Call
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-3 text-lg px-10 py-4"
            >
              Contact Form
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-gray-800 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-2">Free Consultation</div>
              <div className="text-gray-300">
                No obligation 30-minute call to discuss your needs
              </div>
            </div>
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-gray-800 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-2">Quick Response</div>
              <div className="text-gray-300">
                We respond to all inquiries within 24 hours
              </div>
            </div>
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-gray-800 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-2">Tailored Solutions</div>
              <div className="text-gray-300">
                Custom solutions designed for your specific challenges
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-12 text-sm max-w-2xl mx-auto"
          >
            Whether you're just starting your cloud journey or looking to optimize existing infrastructure, 
            we're here to help you succeed.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
