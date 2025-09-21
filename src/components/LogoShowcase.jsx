import React from 'react'
import Logo from './Logo'

const LogoShowcase = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Logo Variants</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Original Logo */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Original</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Logo variant="original" size="2xl" />
          </div>
        </div>

        {/* Light Logo */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Light Version</h4>
          <div className="bg-gray-800 p-4 rounded-lg">
            <Logo variant="light" size="2xl" />
          </div>
        </div>

        {/* Dark Logo */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Dark Version</h4>
          <div className="bg-gray-200 p-4 rounded-lg">
            <Logo variant="dark" size="2xl" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Size Variants</h4>
        <div className="flex items-center justify-center space-x-4">
          <Logo variant="light" size="sm" />
          <Logo variant="light" size="default" />
          <Logo variant="light" size="lg" />
          <Logo variant="light" size="xl" />
          <Logo variant="light" size="2xl" />
          <Logo variant="light" size="3xl" />
        </div>
      </div>
    </div>
  )
}

export default LogoShowcase
