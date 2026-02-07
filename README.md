# Dentisur - Página Web Odontológica

Página web profesional para el consultorio odontológico Dentisur, desarrollada con Next.js y React.

## Características

- ✨ Diseño elegante y moderno
- 📱 Completamente responsive
- 🦷 Información sobre servicios odontológicos
- 📍 Sección de ubicación con mapa
- 💬 Integración con WhatsApp
- 🌍 Paquetes internacionales

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Construye para producción:
```bash
npm run build
```

## Tecnologías Utilizadas

- Next.js 14
- React 18
- CSS3
- Google Fonts (Poppins)

## Estructura del Proyecto

```
dentisur/
├── src/
│   ├── components/     (Navbar, Inicio, Servicios, Fotos, Ubicacion, etc.)
│   ├── pages/         (_app.js, index.js, agendar-cita.js, servicios/[servicioId].js)
│   ├── assets/images/
│   ├── App.css
│   └── index.css
├── public/             (images, robots.txt, sitemap.xml)
├── backend/            (NestJS, API citas)
├── functions/          (Firebase Cloud Functions, agendarCita)
├── next.config.js
├── firebase.json
└── package.json
```

## Backend y formulario de citas

- **Local:** backend NestJS en `backend/` (puerto 3003). Ver `backend/README.md`.
- **Producción (Firebase):** el backend puede desplegarse en Firebase Cloud Functions. Ver **[FIREBASE-DEPLOY.md](./FIREBASE-DEPLOY.md)** para configurar Firebase y la URL de la función en Vercel (`NEXT_PUBLIC_AGENDAR_CITA_URL`).

## Contacto

WhatsApp: +57 319 399 7118 (debe coincidir con el número en `WhatsAppButton.jsx`, `Inicio.jsx`, `Servicios.jsx`, `PaquetesInternacionales.jsx`)


