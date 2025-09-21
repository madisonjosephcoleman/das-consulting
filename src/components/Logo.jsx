import React from 'react'

const Logo = ({ 
  variant = 'light', // 'light', 'dark', or 'original'
  size = 'default', // 'sm', 'default', 'lg', 'xl'
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    default: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
    '3xl': 'w-32 h-32',
    '4xl': 'w-40 h-40',
    '5xl': 'w-52 h-52'
  }

  const getLogoSrc = () => {
    switch (variant) {
      case 'light':
        return '/logo-light.svg'
      case 'dark':
        return '/logo-dark.svg'
      case 'original':
      default:
        return '/logo.png'
    }
  }

  return (
    <img 
      src={getLogoSrc()}
      alt="DAS Consulting Logo" 
      className={`${sizeClasses[size]} object-contain ${className}`}
      {...props}
    />
  )
}

export default Logo
