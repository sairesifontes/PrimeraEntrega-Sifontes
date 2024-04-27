# productManager cartManager
    Primera PreEntrega del curso BackEnd en CoderHouse

    La entrega implementa:
    Uso de GET, POST, DELETE, PUT para los productos.
    Uso de GET, POST, para el carrito, permitiendonos crear uno nuevo y agregar productos.

    -Utiliamos POSTMAN, para hacer las verificaciones de los endpoint.


## Iniciar:
- npm run dev

## TEST (desde POSTMAN)

### Productos

### Obtener un limite de productos
- http://localhost:8080/api/licores?limit=5

### Obtener todos los productos 
- http://localhost:8080/api/licores

### Obtener un producto por id
- http://localhost:8080/api/licores/id

### Eliminar un producto 
- http://localhost:8080/api/licores/2599

### Carrito 

#### Crear nuevo carrito
- http://localhost:8080/api/carts/

### Agregar productos al carrito 
- http://localhost:8080/api/carts/idCarrito/licor/productoId

### Obtener carrito
- http://localhost:8080/api/carts/idProducto

### 


## Author

- [@sairesifontes](https://github.com/sairesifontes)