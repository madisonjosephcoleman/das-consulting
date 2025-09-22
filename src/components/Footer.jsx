import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/das-consulting', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container-custom">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/logo.png" 
                    alt="DAS Consulting Logo" 
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-2xl font-heading font-semibold text-white">
                    DAS Consulting
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Transforming businesses through cloud architecture, DevOps automation, 
                  and custom development solutions.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-4 h-4 mr-3" />
                    <a href="mailto:madison@das.consulting" className="hover:text-primary transition-colors">
                      madison@das.consulting
                    </a>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-3" />
                    <span>Remote & On-site Services</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-3" />
                    <a href="https://calendly.com/das-consulting/consultation" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      Schedule a Consultation
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} DAS Consulting. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
