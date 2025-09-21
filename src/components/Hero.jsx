import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Wrench, Code, DollarSign } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BFA6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl z-10"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/3 rounded-full blur-3xl z-10"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-20 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto px-4 mt-16"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight drop-shadow-lg"
          >
            <span className="block mb-2">Cloud Architecture.</span>
            <span className="block mb-2">DevOps.</span>
            <span className="block gradient-text">Development.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            We design scalable, secure, and automated solutions to move your business forward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
            >
              Book a Consultation
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2 text-lg px-10 py-4"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Service Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-6 md:gap-8"
          >
            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors duration-300">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                Cloud Architecture
              </span>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors duration-300">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                DevOps
              </span>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors duration-300">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                Development
              </span>
            </motion.div>

            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors duration-300">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                FinOps
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
