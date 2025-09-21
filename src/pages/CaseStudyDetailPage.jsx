import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Clock, Users, TrendingUp, Zap } from 'lucide-react'

const CaseStudyDetailPage = () => {
  const { caseStudyId } = useParams()

  const caseStudies = {
    'data-lake-automation': {
      title: 'Automating Data Lake Infrastructure: From 2 Weeks to Less Than a Day',
      industry: 'Finance',
      service: 'DevOps Services',
      client: 'Major Financial Institution',
      challenge: 'A major financial institution was struggling with manual data lake deployments that took 2 weeks and required coordination across multiple teams. The process was error-prone, inconsistent, and prevented rapid iteration and scaling.',
      solution: 'We designed and implemented a fully automated data lake infrastructure solution using Infrastructure as Code principles. The solution leveraged Terraform for infrastructure provisioning, Azure DevOps for CI/CD pipelines, and Azure Data Factory for data orchestration, creating a seamless, repeatable deployment process.',
      results: [
        'Reduced deployment time from 2 weeks to less than 1 day',
        'Eliminated manual configuration errors and environment drift',
        'Enabled self-service infrastructure provisioning for development teams',
        'Improved team productivity by 85% through automation',
        'Reduced infrastructure costs by 30% through optimized resource allocation',
        'Achieved 99.9% deployment success rate'
      ],
      technologies: [
        'Azure Data Factory',
        'Azure Data Lake Gen2',
        'SQL Server Integration Services (SSIS)',
        'Terraform',
        'Azure DevOps',
        'PowerShell',
        'Azure Key Vault',
        'Azure Monitor'
      ],
      timeline: '6 weeks',
      team: '3 engineers'
    },
    'insurance-modernization': {
      title: 'Complete Infrastructure Modernization: From Legacy VMs to Cloud-Native',
      industry: 'Insurance',
      service: 'Cloud Architecture',
      client: 'Major Insurance Provider',
      challenge: 'An insurance company was struggling with legacy infrastructure running on AWS virtual machines and outdated Jenkins CI/CD pipelines. The system was complex, difficult to maintain, and lacked the scalability and reliability needed for modern business operations. They needed a complete modernization of their technology stack.',
      solution: 'We executed a comprehensive infrastructure modernization project that included converting legacy Jenkins pipelines to Azure DevOps, migrating from AWS VMs to Azure App Services and Container Services, and completely rearchitecting the infrastructure across all three environments. The project involved rebuilding the legacy application, migrating data, and implementing modern cloud-native practices.',
      results: [
        'Successfully converted Jenkins pipelines to Azure DevOps with enhanced features',
        'Migrated entire application from AWS VMs to Azure App Services and Container Services',
        'Completed full infrastructure rearchitecture across all 3 environments',
        'Implemented modern CI/CD practices with improved reliability and speed',
        'Reduced infrastructure maintenance overhead by 60%',
        'Improved application scalability and performance',
        'Enhanced security and compliance posture',
        'Enabled faster feature delivery and deployment cycles'
      ],
      technologies: [
        'Azure DevOps',
        'Azure App Services',
        'Azure Container Services',
        'Jenkins',
        'AWS EC2',
        'Docker',
        'Kubernetes',
        'Azure SQL Database',
        'Azure Storage',
        'Terraform',
        'PowerShell'
      ],
      timeline: '24 weeks',
      team: '5 engineers'
    },
    'dev-team-training': {
      title: 'Development Team Training & Modern Architecture Implementation',
      industry: 'Manufacturing',
      service: 'Development Services',
      client: 'Manufacturing Company',
      challenge: 'A manufacturing company\'s development team needed to modernize their infrastructure practices and learn how to implement Infrastructure as Code. They lacked experience with Terraform, modern CI/CD pipelines, and cloud-native architecture patterns. The team needed comprehensive training and hands-on experience to build and maintain modern applications using Azure services.',
      solution: 'We conducted an intensive 8-week training program covering Terraform fundamentals, pipeline development, and modern cloud architecture. The training culminated in a hands-on project where we built a complete architecture for a new application using Azure Logic Apps, Function Apps, and other modern Azure services. The team gained practical experience in infrastructure as code, automated deployments, and cloud-native development practices.',
      results: [
        'Successfully trained development team on Terraform and Infrastructure as Code',
        'Built comprehensive CI/CD pipelines using Azure DevOps',
        'Implemented complete architecture for new application using Azure Logic Apps and Function Apps',
        'Enabled team to independently maintain and extend modern infrastructure',
        'Improved deployment reliability and consistency',
        'Reduced manual infrastructure management by 80%',
        'Enhanced team confidence in cloud-native development',
        'Established best practices for future projects'
      ],
      technologies: [
        'Terraform',
        'Azure DevOps',
        'Azure Logic Apps',
        'Azure Function Apps',
        'Azure App Services',
        'Azure SQL Database',
        'PowerShell',
        'ARM Templates',
        'Azure Key Vault',
        'Azure Monitor'
      ],
      timeline: '8 weeks',
      team: '4 engineers + client team'
    }
  }

  const study = caseStudies[caseStudyId]

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-300 mb-8">The case study you're looking for doesn't exist.</p>
          <a href="/case-studies" className="btn-primary">View All Case Studies</a>
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
              className="max-w-4xl mx-auto"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                  {study.industry} • {study.service}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                {study.title}
              </h1>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-gray-400 text-sm">Timeline</p>
                    <p className="text-white font-semibold">{study.timeline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-gray-400 text-sm">Team Size</p>
                    <p className="text-white font-semibold">{study.team}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-gray-400 text-sm">Client</p>
                    <p className="text-white font-semibold">{study.client}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="section-padding bg-gray-900/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {study.challenge}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {study.solution}
              </p>

              {/* Technologies Used */}
              <div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-6">
                  Technologies & Tools
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.technologies.map((tech, index) => (
                    <div key={index} className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
                      <p className="text-primary font-semibold">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-gray-900/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-8">
                Results & Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-background/50 rounded-2xl border border-gray-800"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Achievement Highlight */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-primary/30">
                <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-heading font-bold text-white mb-4">
                  Key Achievement
                </h3>
                <p className="text-2xl text-gray-300 mb-6">
                  Reduced deployment time from <span className="text-primary font-bold">2 weeks</span> to 
                  <span className="text-primary font-bold"> less than 1 day</span>
                </p>
                <p className="text-lg text-gray-400">
                  This represents a <span className="text-primary font-semibold">95% reduction</span> in deployment time, 
                  enabling rapid iteration and faster time-to-market for critical business initiatives.
                </p>
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
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help you automate and optimize your infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="/case-studies"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center gap-2 text-lg px-10 py-4"
                >
                  View More Case Studies
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

export default CaseStudyDetailPage
