import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Cloud, Wrench, Code, DollarSign } from 'lucide-react'

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: 'Cloud Architecture', href: '/services/cloud-architecture', icon: Cloud },
    { name: 'DevOps Services', href: '/services/devops-services', icon: Wrench },
    { name: 'Development Services', href: '/services/development-services', icon: Code },
    { name: 'FinOps Services', href: '/services/finops-services', icon: DollarSign },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-secondary hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1"
      >
        Services
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <service.icon size={18} className="text-primary" />
                  <span className="font-medium">{service.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ServicesDropdown
