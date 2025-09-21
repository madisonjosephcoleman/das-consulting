import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle } from 'lucide-react'

const ServicePage = () => {
  const { serviceSlug } = useParams()

  const services = {
    'cloud-architecture': {
      title: 'Cloud Architecture',
      subtitle: 'Build secure, scalable cloud foundations tailored to your business needs',
      description: 'From AWS to Azure, we design architectures that grow with you. Our cloud architecture services help you build robust, secure, and scalable foundations that support your business objectives.',
      features: [
        'Multi-cloud strategy design and implementation',
        'Cost optimization and resource management',
        'Security-first approach with compliance',
        'Scalable infrastructure design',
        'Migration planning and execution',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security and compliance',
        'Better performance and reliability',
        'Future-proof architecture'
      ]
    },
    'devops-services': {
      title: 'DevOps Services',
      subtitle: 'Automate delivery pipelines, monitoring, and operations for speed and reliability',
      description: 'Transform your development workflow with our DevOps expertise. We help you automate processes, improve collaboration, and deliver software faster and more reliably.',
      features: [
        'CI/CD pipeline automation and optimization',
        'Infrastructure as Code implementation',
        'Monitoring and alerting systems',
        'Performance optimization and tuning',
        'Container orchestration with Kubernetes',
        'Security integration in DevOps processes'
      ],
      benefits: [
        'Faster time to market',
        'Improved code quality',
        'Reduced deployment risks',
        'Better team collaboration',
        'Increased system reliability'
      ]
    },
    'development-services': {
      title: 'Development Services',
      subtitle: 'Create custom applications that solve complex business challenges',
      description: 'From web apps to microservices architecture, we build solutions that drive your business forward. Our development services focus on creating scalable, maintainable applications.',
      features: [
        'Full-stack web application development',
        'API design and integration services',
        'Modern framework implementation',
        'Performance optimization',
        'Database design and optimization',
        'Third-party integrations'
      ],
      benefits: [
        'Custom solutions for your needs',
        'Modern, maintainable codebase',
        'Scalable architecture',
        'Integration with existing systems',
        'Ongoing support and maintenance'
      ]
    },
    'finops-services': {
      title: 'FinOps Services',
      subtitle: 'Optimize your cloud costs with financial operations expertise',
      description: 'Get visibility, control, and optimization of your cloud spending. Our FinOps services help you maximize value while minimizing costs in your cloud environment.',
      features: [
        'Cloud cost optimization and analysis',
        'Spending visibility and detailed reporting',
        'Budget management and forecasting',
        'Resource rightsizing recommendations',
        'Cost allocation and chargeback models',
        'Automated cost controls and alerts'
      ],
      benefits: [
        'Reduced cloud costs',
        'Better spending visibility',
        'Improved budget control',
        'Optimized resource utilization',
        'Predictable cost forecasting'
      ]
    }
  }

  const service = services[serviceSlug]

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <a href="/" className="btn-primary">Go Home</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                {service.subtitle}
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {service.description}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-gray-900/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
                What We Deliver
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
                Benefits You'll See
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-primary/10 rounded-2xl border border-primary/20"
                  >
                    <p className="text-white text-lg font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-900/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our {service.title.toLowerCase()} services can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
                >
                  Schedule a Consultation
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="/#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center gap-2 text-lg px-10 py-4"
                >
                  View All Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ServicePage
