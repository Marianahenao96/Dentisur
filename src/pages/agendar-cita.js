import React from 'react'
import Head from 'next/head'
import FormularioCita from '../components/FormularioCita'

export default function AgendarCitaPage() {
  return (
    <>
      <Head>
        <title>Agendar cita - Dentisur</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Solicita tu cita en Dentisur. Completa el formulario y te contactaremos para confirmar tu consulta con el Dr. Rafael Valencia en Envigado." />
      </Head>
      <FormularioCita />
    </>
  )
}
