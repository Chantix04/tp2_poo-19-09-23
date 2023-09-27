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

    addStock (id:number) {
        this.productos.filter(productos => productos.getProducto().id === id)[0].aumentarStock(1)
        return console.log('El stock del producto fue aumentado en 1')
    }

    addStockByNumber (id:number, stock:number) {
        this.productos.filter(productos => productos.getProducto().id === id)[0].aumentarStock(stock)
        return console.log(`El stock del producto fue aumentado en ${stock}`)
    }

    decreaseStock (id:number) {
        this.productos.filter(productos => productos.getProducto().id === id)[0].descontarStock(1)
        return console.log(`El stock del producto disminuyó en 1`)
    }

    decreaseStockByNumber (id: number, stock:number) {
        this.productos.filter(productos => productos.getProducto().id === id)[0].descontarStock(stock)
        return console.log(`El stock del producto fue disminuido en ${stock}`)
    }
    
}
