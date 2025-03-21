# Proyecto Final: The Woks - E-commerce de Comida
 Este proyecto simula una tienda online de comida con un catálogo de productos organizado en cuatro categorías: **Meat**, **Chicken**, **Fish** y **Seafood**. La aplicación permite a los usuarios navegar por el catálogo, ver detalles de productos, agregar items al carrito y finalizar compras, integrando una base de datos en la nube con Firebase Firestore.

---

## Objetivos del Proyecto

- Desarrollar el front-end de una web app de e-commerce utilizando **React**.
- Incorporar **Firestore** como base de datos para gestionar productos y órdenes de compra.

---

## Características y Requisitos Implementados

### Listado y Detalle de Productos
- **Listado dinámico**: El catálogo se genera a partir de datos obtenidos de Firestore (`ItemListContainer` y `ItemList`).
- **Vista en detalle**: Cada producto tiene una vista detallada accesible desde el listado (`ItemDetailContainer` y `ItemDetail`).
- **Separación de componentes**: Uso de contenedores y componentes de presentación para una arquitectura limpia y modular.

### Componente ItemCount
- Permite seleccionar la cantidad de unidades a agregar al carrito.
- Incluye validaciones: valor mínimo (1), límite por stock disponible, etc.
- Se oculta automáticamente tras agregar un producto al carrito.

### Navegación
- Implementación de **React Router** para navegación fluida entre secciones: catálogo, categorías, detalle, carrito y checkout.
- Modelo SPA: sin recargas de página, gestionado desde el componente `NavBar`.

### Gestión del Carrito
- Uso de **Context** para almacenar y gestionar el estado global del carrito.
- Componente `Cart`: muestra productos agregados, cantidades, subtotales y total general.
- Componente `CartWidget`: ícono del carrito en la barra de navegación con el total de unidades.

### Firebase Firestore
- **Colección de productos**: Almacena la información de los ítems (categorías: Meat, Chicken, Fish, Seafood).
- **Registro de compras**: Generación de un documento en Firestore al confirmar una orden, con detalles de la compra.
- Consultas dinámicas desde React para mostrar los productos en la app.

### Experiencia de Usuario
- **Renderizado condicional**: Uso de loaders y mensajes como "Producto sin stock" o "Carrito vacío".
- **Confirmación de compra**: Al finalizar, se muestra el ID de la orden generada en Firestore.

---
#   a l a v a n d e r o - C r e a t u L a n d i n g C o o k  
 