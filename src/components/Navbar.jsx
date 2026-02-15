import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../context/LanguageContext'
import logoImage from '../assets/images/logo.jpeg'
import instagramIcon from '../assets/images/instagram-icon.png'

const Navbar = ({ activeSection, scrollToSection }) => {
  const router = useRouter()
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    setIsServicesOpen(false)
  }, [router.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicios = [
    { id: 'ortodoncia', label: 'Ortodoncia', path: '/servicios/ortodoncia' },
    { id: 'blanqueamiento', label: 'Blanqueamiento Dental', path: '/servicios/blanqueamiento' },
    { id: 'diseno-sonrisa', label: 'Diseño de Sonrisa', path: '/servicios/diseno-sonrisa' },
    { id: 'implantes', label: 'Implantes Dentales', path: '/servicios/implantes' },
    { id: 'endodoncia', label: 'Endodoncia', path: '/servicios/endodoncia' },
    { id: 'periodoncia', label: 'Periodoncia', path: '/servicios/periodoncia' },
    { id: 'profilaxis', label: 'Profilaxis Dental', path: '/servicios/profilaxis' }
  ]

  const menuItems = [
    { id: 'inicio', labelKey: 'nav.inicio' },
    { id: 'quienes-somos', labelKey: 'nav.quienesSomos' },
    { id: 'servicios', labelKey: 'nav.servicios', hasDropdown: true },
    { id: 'fotos', labelKey: 'nav.fotos' },
    { id: 'ubicacion', labelKey: 'nav.ubicacion' },
    { id: 'paquetes', labelKey: 'nav.paquetes' }
  ]

  const handleMenuClick = (sectionId) => {
    setIsMobileMenuOpen(false)
    
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            const offset = 140
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }, 300)
      })
    } else {
      scrollToSection(sectionId)
    }
  }

  const handleLogoClick = (e) => {
    if (router.pathname === '/') {
      e.preventDefault()
      scrollToSection('inicio')
    }
  }

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
          </div>
          <div className="top-bar-right">
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/dentisur8" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="social-icon instagram-icon"
              >
                <img src={typeof instagramIcon === 'string' ? instagramIcon : (instagramIcon?.src || '')} alt="Instagram" className="instagram-icon-image" />
              </a>
            </div>
            <div className="language-selector" role="group" aria-label={t('nav.language')}>
              <button type="button" className={`language-btn ${language === 'es' ? 'active' : ''}`} onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</button>
              <span className="language-sep">|</span>
              <button type="button" className={`language-btn ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            </div>
          </div>
        </div>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <Link href="/" className="navbar-logo" onClick={handleLogoClick} aria-label="Ir al inicio">
              <img src={typeof logoImage === 'string' ? logoImage : (logoImage?.src || '')} alt="Dentisur Logo" className="logo-image" />
            </Link>
          </div>
          
          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className={`navbar-item-wrapper ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <a
                  href={item.hasDropdown ? '#' : `#${item.id}`}
                  className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                  aria-label={t(item.labelKey)}
                  onClick={(e) => {
                    e.preventDefault()
                    if (!item.hasDropdown) {
                      handleMenuClick(item.id)
                      if (router.pathname === '/') {
                        window.history.pushState(null, '', `#${item.id}`)
                      }
                    } else {
                      setIsServicesOpen(!isServicesOpen)
                    }
                  }}
                >
                  {t(item.labelKey)}
                  {item.hasDropdown && <span className="dropdown-arrow">▼</span>}
                </a>
                {item.hasDropdown && (
                  <div className={`services-dropdown ${isServicesOpen ? 'open' : ''}`}>
                    {servicios.map((servicio) => {
                      const linkHref = typeof servicio.path === 'string' ? servicio.path : `/servicios/${String(servicio.id)}`
                      return (
                        <Link
                          key={servicio.id}
                          href={linkHref}
                          className="dropdown-item"
                          prefetch={false}
                          onClick={() => {
                            setIsServicesOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          {t(servicio.labelKey)}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar


