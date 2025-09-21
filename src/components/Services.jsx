import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Wrench, Code, DollarSign, ArrowRight } from 'lucide-react'

const Services = () => {
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

  const services = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Build secure, scalable cloud foundations tailored to your business needs. From AWS to Azure, we design architectures that grow with you.",
      features: [
        "Multi-cloud strategy design",
        "Cost optimization",
        "Security-first approach",
        "Scalable infrastructure"
      ],
      slug: "cloud-architecture"
    },
    {
      icon: Wrench,
      title: "DevOps Services",
      description: "Automate delivery pipelines, monitoring, and operations for speed and reliability. Transform your development workflow.",
      features: [
        "CI/CD pipeline automation",
        "Infrastructure as Code",
        "Monitoring & alerting",
        "Performance optimization"
      ],
      slug: "devops-services"
    },
    {
      icon: Code,
      title: "Development Services",
      description: "Create custom applications that solve complex business challenges. From web apps to microservices architecture.",
      features: [
        "Full-stack development",
        "API design & integration",
        "Modern frameworks",
        "Performance optimization"
      ],
      slug: "development-services"
    },
    {
      icon: DollarSign,
      title: "FinOps Services",
      description: "Optimize your cloud costs with financial operations expertise. Get visibility, control, and optimization of your cloud spending.",
      features: [
        "Cloud cost optimization",
        "Spending visibility & reporting",
        "Budget management & forecasting",
        "Resource rightsizing"
      ],
      slug: "finops-services"
    }
  ]

  return (
    <section id="services" ref={ref} className="section-padding bg-gray-900/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions that drive business growth 
              and operational efficiency.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-background/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href={`/services/${service.slug}`}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
            >
              Let's Talk About Your Project
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
