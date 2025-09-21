import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import ServicesDropdown from './ServicesDropdown'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'About', href: '/#about', isHash: true },
    { name: 'Case Studies', href: '/case-studies', isHash: false },
    { name: 'Contact', href: '/contact', isHash: false },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full relative">
        <div className="flex items-center justify-between h-36 pl-48 pr-4 sm:pr-6 lg:pr-8">
          {/* Logo - positioned absolutely to the left edge */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
            <Logo variant="original" size="3xl" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className={`text-secondary hover:text-primary transition-colors duration-300 font-medium ${
                    index === 0 ? 'mr-4' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="ml-4">
              <ServicesDropdown />
            </div>
          </nav>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="btn-primary hidden md:block"
            >
              Book a Consultation
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-secondary hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-secondary hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
