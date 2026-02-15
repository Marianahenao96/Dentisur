import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>{t('notFound.title')} - Dentisur</title>
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
        <h1 style={{ fontSize: '1.5rem', color: '#2C5F8D', marginBottom: '0.5rem' }}>{t('notFound.title')}</h1>
        <p style={{ color: '#5a6c7d', marginBottom: '1.5rem' }}>{t('notFound.message')}</p>
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
          {t('notFound.back')}
        </Link>
      </div>
    </>
  )
}
