import React from 'react'
import Head from 'next/head'
import Inicio from '../components/Inicio'
import QuienesSomos from '../components/QuienesSomos'
import Servicios from '../components/Servicios'
import Fotos from '../components/Fotos'
import Ubicacion from '../components/Ubicacion'
import PaquetesInternacionales from '../components/PaquetesInternacionales'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Dentisur Dr. Rafael Valencia - Consultorio odontológico en Envigado. Más de 20 años de experiencia. Ortodoncia, blanqueamiento, diseño de sonrisa, implantes dentales. Agenda tu cita." />
      </Head>
      <Inicio />
      <QuienesSomos />
      <Servicios />
      <Fotos />
      <Ubicacion />
      <PaquetesInternacionales />
    </>
  )
}
