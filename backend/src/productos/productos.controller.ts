import { Productos } from "./productos.model";

export class Tienda {
    private productos :Array<Productos> = []

    generarId () {
        const ids = this.productos.map(e => e.getProducto().id)
    
        if (!ids.length) {
          ids.push(0)
        }
    
        return Math.max(...ids) + 1
    }

    addProducto (producto:Productos) {
        producto.setId(this.generarId())
        return this.productos.push(producto)
    }

    getProductos () {
        return this.productos
    }

    
}