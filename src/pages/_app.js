import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { LanguageProvider } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import '../index.css'
import '../App.css'
import '../components/Navbar.css'
import '../components/Inicio.css'
import '../components/QuienesSomos.css'
import '../components/Servicios.css'
import '../components/Fotos.css'
import '../components/Ubicacion.css'
import '../components/PaquetesInternacionales.css'
import '../components/ServicioDetalle.css'
import '../components/WhatsAppButton.css'
import '../components/FormularioCita.css'

function MyApp({ Component, pageProps }) {
  const [activeSection, setActiveSection] = useState('inicio')
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  useEffect(() => {
    if (router.pathname.startsWith('/servicios/')) {
      return
    }

    if (router.asPath.includes('#')) {
      const sectionId = router.asPath.split('#')[1]
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
        }
      }, 100)
    }

    const handleScroll = () => {
      const sections = ['inicio', 'quienes-somos', 'servicios', 'fotos', 'ubicacion', 'paquetes']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [router.pathname, router.asPath])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <LanguageProvider>
    <div className="App">
      <Head>
        <title>Dentisur - Odontología de Excelencia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="description" content="Dentisur Dr. Rafael Valencia - Consultorio odontológico en Envigado. Ortodoncia, blanqueamiento, diseño de sonrisa, implantes, endodoncia y más. Agenda tu cita." />
        <meta name="keywords" content="dentista Envigado, odontología, ortodoncia, blanqueamiento dental, diseño de sonrisa, implantes dentales, Dentisur" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:title" content="Dentisur - Odontología de Excelencia" />
        <meta property="og:description" content="Consultorio odontológico en Envigado. Ortodoncia, blanqueamiento, diseño de sonrisa, implantes y más. Dr. Rafael Valencia." />
      </Head>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Component {...pageProps} />
      <WhatsAppButton />
    </div>
    </LanguageProvider>
  )
}

export default MyApp
