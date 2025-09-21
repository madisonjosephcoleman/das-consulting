import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Zap, DollarSign, Shield } from 'lucide-react'

const WhyChooseUs = () => {
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

  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Years of experience delivering complex cloud and DevOps solutions across various industries and company sizes."
    },
    {
      icon: Zap,
      title: "Automation First",
      description: "We believe in automating everything that can be automated, reducing manual errors and increasing efficiency."
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Our solutions are designed with cost efficiency in mind, helping you get the most value from your technology investments."
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "Security is built into every solution from the ground up, not added as an afterthought."
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Why Choose <span className="gradient-text">DAS Consulting</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine technical excellence with business understanding to deliver 
              solutions that truly make a difference.
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <reason.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
