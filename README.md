# Daily Trends

Prueba técnica para [Muchosol](https://www.muchosol.es/).

## Descripción

Se pide realizar un API (DailyTrends) que exponga un feed de noticias. Este feed es un agregador de noticias de diferentes periódicos. DailyTrends es un periódico que une las portadas de los periódicos número uno.

Cuando un usuario abre DailyTrends, se encuentra con las 5 noticias de portada de El País y El Mundo del día en el que lo abre, además se pueden añadir noticias a mano desde el API.

## Tareas previas

1. Crear un repositorio de GIT (Bitbucket, GitHub o similar) con acceso público.
2. Antes de empezar las tareas, envíanos por e-mail el enlace del repositorio.
3. Haz los commits que consideres oportunos conforme vayas desarrollando las
diferentes tareas (mínimo un commit por tarea).

## Tareas a realizar

1. Crea un proyecto TypeScript con una arquitectura de ficheros que consideres apropiada.
2. Crea un modelo Feed y define sus atributos. El origen de datos tiene que ser MongoDB, por lo que puedes usar algún ODM.
3. Define los diferentes endpoints para gestionar los servicios CRUD del modelo Feed. Intenta desacoplar las capas del API lo máximo posible.
4. Crea un “servicio de lectura de feeds” que extraiga por [web scraping](https://es.wikipedia.org/wiki/Web_scraping) (no lectura de fuentes RSS) en cada uno de los periódicos sus noticias de portada y que las guarde como Feeds. Esta es la parte donde más conceptos de orientación a objetos puedes usar y la más “compleja”, ponle especial atención.

## Otros detalles

1. Representa en un dibujo la arquitectura y las capas de la aplicación.
2. Usa todas las buenas prácticas que conozcas.
3. Demuestra conocimientos en programación orientada a objetos: abstracción,
encapsulamiento, herencia y polimorfismo.
4. Haz los tests que consideres necesarios.

## Ficha técnica

- Repositorio: [GitHub](https://github.com/hitses/daily-trends-muchosol)
  - No se van a crear ramas de preproducción (pre) ni de desarrollo (dev), únicamente una rama principal de producción (pro).
  - Sí van a crearse ramas específicas para cada tarea o subtareas y así llevar un mejor control del trabajo y los cambios que se lleven a cabo en la API.
  - Los commits tienen una nomenclatura inicial para indicar qué tipo de cambio o añadido hay. Son los siguientes:
    - A - Message: se añade contenido.
    - U - Message: se actualiza contenido.
    - D - Message: se elimina contenido.
    - B - Message: se corrige un bug.
- Tecnologías utilizadas:
  - Node.JS: 20.0.0

### Pasos para ejecutar el proyecto en desarrollo

**NOTA**: se debe utilizar siempre Yarn, NPM o cualquier otro gestor de paquetes para la instalación/ejecución de comandos pero no mezclarlos.

#### Iniciar la base de datos local en Docker

**NOTA**: se debe instalar [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```
docker-compose up -d
```

Ruta a la base de datos:

```
mongodb://localhost:27017/daily-trends
```

**NOTA**: para esta prueba la base de datos no tiene ni usuario ni contraseña al estar en un entorno cerrado de pruebas.

#### Instalación de las dependencias

```
yarn
```

o

```
npm i
```

Para levantar el entorno de desarrollo en local se debe ejecutar el comando siguiente:

```
yarn dev
```

o

```
npm run dev
```
