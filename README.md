# Humanizar Web

Sitio corporativo institucional de Humanizar.

## Stack

- React 18 + Vite 5
- Build estatico
- Publicacion por Vercel o contenedor Nginx

## Estructura

- `src/`: aplicacion React
- `public/assets/`: assets estaticos
- `ORGANIZACION_EMPRESA.md`: marco organizacional publicado

## Arranque rapido

```bash
npm install
npm run dev
```

## Build y despliegue

```bash
npm run build
npm run preview
```

Docker:

```bash
docker build -t humanizar-web .
docker run -p 8088:80 humanizar-web
```

Infraestructura:
- `Dockerfile`: build multi-stage con Nginx final
- `nginx.conf`: config de servicio estatico
- `vercel.json`: config de deploy y cache en Vercel
