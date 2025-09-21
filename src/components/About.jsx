import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Zap, Shield, Users } from 'lucide-react'
import Logo from './Logo'

const About = () => {
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

  const stats = [
    { icon: Target, label: "Projects Delivered", value: "50+" },
    { icon: Zap, label: "Automation Success", value: "95%" },
    { icon: Shield, label: "Security First", value: "100%" },
    { icon: Users, label: "Happy Clients", value: "100%" },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              About <span className="gradient-text">DAS Consulting</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're a specialized consulting firm focused on transforming businesses through 
              cutting-edge cloud architecture, DevOps automation, and custom development solutions.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team combines deep technical expertise with business acumen to deliver 
              solutions that not only work today but scale for tomorrow's challenges.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-4 bg-background/50 rounded-lg border border-gray-800"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Inner Pattern */}
                <div className="absolute inset-4 bg-background/50 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Logo variant="light" size="lg" />
                    </div>
                    <div className="text-white font-heading font-semibold text-xl">DAS Consulting</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 left-8 w-4 h-4 bg-primary rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 w-6 h-6 bg-primary/60 rounded-full"
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-4 w-3 h-3 bg-primary/40 rounded-full"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 w-80 h-80 mx-auto bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
