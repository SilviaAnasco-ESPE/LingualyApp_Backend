## 🛠 Lingualy Backend - API REST para Aprendizaje de Idiomas  

Este repositorio contiene el **código backend** de la aplicación **Lingualy**, una plataforma diseñada para ayudar a los usuarios a mejorar su redacción de correos electrónicos en inglés en espacios profesionales. Este backend está diseñado para ser desplegado en **AWS Elastic Beanstalk** y ya incluye las configuraciones necesarias para su implementación. Aunque es posible ejecutarlo localmente, el propósito principal es su uso en un entorno en la nube.  

> 📢 **Nota**: Este es el backend de **Lingualy**. El frontend de la aplicación se encuentra en el repositorio https://github.com/SheyleeEnriquez/LingualyApp.

---

## ✨ **Funcionalidades Principales**  

- 👨‍🏫 **Autenticación de Usuarios** con sistemas seguros de login y registro.  
- 📅 **Gestión de Lecciones y Ejercicios** para aprendizaje personalizado.  
- 🔒 **Seguridad** con autenticación y autorización para proteger la información.  
- 🛋️ **Integración con Base de Datos** para almacenar información de usuarios y recursos.  

---

## 🔧 **Pila Tecnológica**  

- **JavaScript** → Lenguaje de desarrollo principal  
- **Node.js** → Entorno de ejecución del servidor  
- **Express.js** → Framework para crear la API REST  
- **PostgreSQL** → Base de datos para almacenar información  

---

## 🌐 **Despliegue en AWS Elastic Beanstalk**  

Este backend está diseñado específicamente para ser desplegado en **AWS Elastic Beanstalk**. Ya se han subido las versiones necesarias del backend para que, una vez que configures tu servicio en AWS Elastic Beanstalk, solo necesites subir la versión correspondiente del código.  

### **Pasos para desplegar en AWS Elastic Beanstalk**  

1️⃣ **Crear una Aplicación en Elastic Beanstalk**  
   - Abre la consola de AWS y ve a Elastic Beanstalk.
   - Haz clic en Create Application.
   - Asigna un nombre a tu aplicación y selecciona Node.js como plataforma.
   - Sube el archivo .zip de la version del codigo que se desee (en el repositorio está hasta la versión 4.0).
   - Configura las opciones según tus necesidades y haz clic en Create environment. 

3️⃣ **Configurar la Base de Datos en Elastic Beanstalk**  
   - En la configuración del entorno, habilita una base de datos **PostgreSQL** en **Amazon RDS**.   

5️⃣ Acceder a tu Aplicación
   - Una vez que el entorno esté en ejecución, podrás acceder a tu aplicación a través de la URL proporcionada en la consola de Elastic Beanstalk.

---

## 🚀 **Instalación y Configuración Local (Opcional)**  

Si bien este backend está diseñado para ejecutarse en **AWS Elastic Beanstalk**, también puedes ejecutarlo localmente para pruebas o desarrollo.

### 1️⃣ **Clonar el Repositorio**  
```sh
git clone https://github.com/usuario/lingualy-backend.git
cd lingualy-backend
```

### 2️⃣ **Instalar Dependencias**  
```sh
npm install
```

### 3️⃣ **Configurar Variables de Entorno**  
Crea un archivo **.env** en la raíz del proyecto y agrega las variables necesarias para la conección a la base de datos PostgreSQL local que tengas, como por ejemplo:  
```env
DB_USER=usuario
DB_PASSWORD=contraseña
DB_HOST=tu-host-db
DB_NAME=nombre-db
DB_PORT=5432
```

### 5️⃣ **Ejecutar el Servidor Localmente**  
```sh
npm start
```

El servidor se ejecutará en `http://localhost:3000` por defecto.  

---


## 💌 **Contacto**  

Si tienes dudas o sugerencias, abre un **issue** en GitHub o contacta con el equipo de desarrollo.  

📌 **¡Gracias por contribuir al aprendizaje de idiomas con Lingualy!** 🚀  

