import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, Filter, Clock, Users, TrendingUp } from 'lucide-react'

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [selectedService, setSelectedService] = useState('All Services')

  const industries = ['All Industries', 'Finance', 'Insurance', 'Healthcare', 'Technology', 'Manufacturing']
  const services = ['All Services', 'Cloud Architecture', 'DevOps Services', 'Development Services', 'FinOps Services']

  const caseStudies = [
    {
      id: 'data-lake-automation',
      title: 'Automating Data Lake Infrastructure: From 2 Weeks to Less Than a Day',
      industry: 'Finance',
      service: 'DevOps Services',
      solution: 'We revolutionized a finance company\'s data infrastructure by automating their entire data lake build process using Terraform, Azure DevOps pipelines, and Data Factory. The transformation reduced deployment time from 2 weeks with multiple teams to under a day with automated processes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=768&h=512&fit=crop&crop=center&auto=format&q=80',
      results: [
        'Reduced deployment time from 2 weeks to less than 1 day',
        'Eliminated manual errors and configuration drift',
        'Enabled self-service infrastructure provisioning',
        'Improved team productivity and focus on business value'
      ],
      technologies: ['Azure Data Factory', 'Azure Data Lake', 'SSIS', 'Terraform', 'Azure DevOps', 'PowerShell']
    },
    {
      id: 'insurance-modernization',
      title: 'Complete Infrastructure Modernization: From Legacy VMs to Cloud-Native',
      industry: 'Insurance',
      service: 'Cloud Architecture',
      solution: 'We modernized an insurance company\'s entire technology stack, converting legacy Jenkins pipelines to Azure DevOps and migrating from AWS VMs to Azure App Services and Container Services. The comprehensive transformation included infrastructure rearchitecture, pipeline modernization, and complete application migration across all environments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=768&h=512&fit=crop&crop=center&auto=format&q=80',
      results: [
        'Modernized CI/CD pipelines from Jenkins to Azure DevOps',
        'Migrated from AWS VMs to Azure App Services and Container Services',
        'Reduced infrastructure complexity and maintenance overhead',
        'Improved deployment reliability and scalability'
      ],
      technologies: ['Azure DevOps', 'Azure App Services', 'Azure Container Services', 'Jenkins', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 'dev-team-training',
      title: 'Development Team Training & Modern Architecture Implementation',
      industry: 'Manufacturing',
      service: 'Development Services',
      solution: 'We provided comprehensive 8-week training to a manufacturing company\'s development team on Terraform and pipeline development, culminating in building a complete architecture for a new application using Azure Logic Apps, Function Apps, and modern cloud practices.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=768&h=512&fit=crop&crop=center&auto=format&q=80',
      results: [
        'Trained development team on Terraform and pipeline development',
        'Built complete architecture for new application',
        'Implemented Azure Logic Apps and Function Apps',
        'Enabled team to maintain and extend modern infrastructure'
      ],
      technologies: ['Terraform', 'Azure DevOps', 'Azure Logic Apps', 'Azure Function Apps', 'Azure App Services', 'PowerShell']
    },
    {
      id: 'insurance-finops-optimization',
      title: 'FinOps Transformation: Automated Data Lifecycle & Cost Optimization',
      industry: 'Insurance',
      service: 'FinOps Services',
      solution: 'We implemented a comprehensive FinOps strategy for a major insurance company, automating data lifecycle management to move older, less-accessed data to cost-effective storage while maintaining legal compliance. The solution included automated dev environment scheduling, resource right-sizing, and intelligent cost allocation across business units.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=768&h=512&fit=crop&crop=center&auto=format&q=80',
      results: [
        'Achieved 70% cost reduction on dev environments through automated scheduling',
        'Automated data lifecycle management for legal compliance and cost optimization',
        'Implemented intelligent resource right-sizing reducing waste by 45%',
        'Established cost allocation and chargeback system for business units',
        'Reduced overall cloud spend by $2.3M annually while improving performance'
      ],
      technologies: ['Azure Cost Management', 'Azure Automation', 'Azure Logic Apps', 'Azure Storage Tiers', 'PowerShell', 'Azure Monitor', 'Azure Policy', 'Terraform']
    },
    {
      id: 'medical-azure-landing-zone',
      title: 'Multi-Acquisition Azure Landing Zone: Automated Cloud Foundation for Healthcare',
      industry: 'Healthcare',
      service: 'Cloud Architecture',
      solution: 'We architected and implemented a comprehensive Azure Landing Zone for a rapidly growing medical company with multiple acquisitions. The solution included automated Terraform-based infrastructure provisioning, GitHub Actions CI/CD pipelines, and standardized architecture templates for each business unit. Each new acquisition could be onboarded with fully automated subscription creation, networking, security, and backup configurations.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=768&h=512&fit=crop&crop=center&auto=format&q=80',
      results: [
        'Reduced new acquisition onboarding time from 6 weeks to 3 days',
        'Implemented standardized Azure Landing Zone architecture across 8 business units',
        'Automated subscription provisioning with Terraform and GitHub Actions',
        'Established consistent security, networking, and backup policies',
        'Enabled rapid scaling and compliance for healthcare data requirements',
        'Achieved 99.9% infrastructure consistency across all business units'
      ],
      technologies: ['Azure Landing Zone', 'Terraform', 'GitHub Actions', 'Azure Policy', 'Azure Blueprints', 'Azure Monitor', 'Azure Security Center', 'Azure Backup', 'Azure Virtual Network', 'Azure Active Directory']
    }
  ]

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'All Industries' || study.industry === selectedIndustry
    const serviceMatch = selectedService === 'All Services' || study.service === selectedService
    return industryMatch && serviceMatch
  })

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
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Discover how we've transformed businesses across industries with innovative, 
                results-driven Cloud Architecture, DevOps, and Development solutions—explore our 
                case studies for real-world success stories.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="pb-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-heading font-semibold text-white">Filters:</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Industry Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">by Industry</h3>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <button
                        key={industry}
                        onClick={() => setSelectedIndustry(industry)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedIndustry === industry
                            ? 'bg-primary text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">by Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedService === service
                            ? 'bg-primary text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
                >
                  {/* Case Study Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="font-medium">Industry:</span>
                        <span className="text-primary">{study.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="font-medium">Services:</span>
                        <span className="text-primary">{study.service}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {study.solution}
                    </p>

                    {/* Key Results */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                            +{study.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <motion.a
                      href={`/case-studies/${study.id}`}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
                    >
                      Continue Reading
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-400 text-lg">No case studies found for the selected filters.</p>
              </motion.div>
            )}
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
                Ready to transform your business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's craft the perfect solution for your needs.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Let's Chat!
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CaseStudiesPage
