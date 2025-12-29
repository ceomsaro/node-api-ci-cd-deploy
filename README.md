[![CI Pipeline](https://github.com/ceomsaro/node-api-ci-cd-deploy/actions/workflows/ci.yml/badge.svg)](https://github.com/ceomsaro/node-api-ci-cd-deploy/actions/workflows/ci.yml)
# Node API CI/CD Deploy

## 📌 Descripción
API REST desarrollada con Node.js y Express, diseñada para practicar
principios DevOps como integración continua, pruebas automatizadas,
Dockerización y despliegue automático.

## 🛠️ Tecnologías
- Node.js
- Express
- Docker
- Jest
- Supertest
- GitHub Actions
- Render

## 🚀 Funcionalidades
- Endpoint de salud (`/health`)
- CRUD básico de tareas
- Validaciones de entrada
- Persistencia en memoria
- Pruebas automatizadas

## 🧪 Testing
- Pruebas unitarias y de integración con Jest
- Cobertura de código
- Validación de errores y edge cases

## 🔄 CI/CD
- Pipeline con GitHub Actions
- Instalación de dependencias
- Ejecución automática de tests
- Validación de cobertura
- Deploy automático en Render

## 🐳 Docker
- Imagen Docker optimizada
- Ejecución en contenedor
- Configuración de puertos

## ▶️ Cómo ejecutar
```bash
docker build -t node-api .
docker run -p 3000:3000 node-api
```

## 🌐 Demo
👉 https://TU-APP.onrender.com

## 3️⃣ Diagrama


```txt
GitHub
  ↓
GitHub Actions (CI)
  ↓
Docker build
  ↓
Render (Deploy)
  ↓
App corriendo
```
