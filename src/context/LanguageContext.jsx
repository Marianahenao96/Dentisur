import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext({ language: 'es', setLanguage: () => {}, t: (key) => key })

const STORAGE_KEY = 'dentisur-language'

function getStoredLanguage() {
  if (typeof window === 'undefined') return 'es'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

function getNested(obj, path) {
  const keys = path.split('.')
  let current = obj
  for (const key of keys) {
    if (current == null) return path
    current = current[key]
  }
  return typeof current === 'string' ? current : path
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('es')

  useEffect(() => {
    setLanguageState(getStoredLanguage())
  }, [])

  const setLanguage = (lang) => {
    if (lang !== 'es' && lang !== 'en') return
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (_) {}
  }

  const t = (key) => {
    if (key == null || typeof key !== 'string') return ''
    const dict = translations[language] || translations.es
    return getNested(dict, key) || getNested(translations.es, key) || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context || { language: 'es', setLanguage: () => {}, t: (k) => k }
}
