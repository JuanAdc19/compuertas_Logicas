
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  
    actualizarCantidad(cantidad) {
      this.cantidad += cantidad;
      console.log(`Cantidad de ${this.nombre} actualizada. Nueva cantidad: ${this.cantidad}`);
    }
  
    mostrarInfo() {
      console.log(`Producto: ${this.nombre}, Precio: $${this.precio}, Cantidad en stock: ${this.cantidad}`);
    }
  }
  
  class Tienda {
    constructor(nombre) {
      this.nombre = nombre;
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
      console.log(`Producto ${producto.nombre} agregado a la tienda ${this.nombre}.`);
    }
  
    actualizarProducto(nombre, cantidad) {
      const producto = this.productos.find(p => p.nombre === nombre);
      if (producto) {
        producto.actualizarCantidad(cantidad);
      } else {
        console.log(`Producto ${nombre} no encontrado.`);
      }
    }
  
    mostrarInventario() {
      console.log(`Inventario de la tienda ${this.nombre}:`);
      this.productos.forEach(producto => producto.mostrarInfo());
    }
  }
  
  // Ejemplo de uso:
  
  // Crear tienda
  const miTienda = new Tienda("Mi Tienda de Ropa");
  
  // Crear productos
  const producto1 = new Producto("Camiseta", 15.99, 30);
  const producto2 = new Producto("Pantalón", 25.49, 20);
  const producto3 = new Producto("Zapatos", 45.99, 10);
  
  // Agregar productos a la tienda
  miTienda.agregarProducto(producto1);
  miTienda.agregarProducto(producto2);
  miTienda.agregarProducto(producto3);
  
  // Mostrar inventario
  miTienda.mostrarInventario();
  
  // Actualizar cantidad de un producto
  miTienda.actualizarProducto("Camiseta", 10);
  
  // Mostrar inventario actualizado
  miTienda.mostrarInventario();
  