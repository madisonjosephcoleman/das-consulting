import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CaseStudy from '../components/CaseStudy'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <CaseStudy />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
