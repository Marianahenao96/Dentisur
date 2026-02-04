import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página no encontrada - Dentisur</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem', color: '#2C5F8D', marginBottom: '0.5rem' }}>Página no encontrada</h1>
        <p style={{ color: '#5a6c7d', marginBottom: '1.5rem' }}>La ruta que buscas no existe.</p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#2C5F8D',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </>
  )
}
