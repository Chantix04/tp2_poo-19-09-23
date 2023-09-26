interface Producto {
  id: number
  nombre: string
  stock: number
  precio: number
  marca: string
}

export class Productos {
  private id:number = 0
  private nombre: string = ''
  private stock: number = 0
  private precio: number = 0
  private marca: string = ''
  private idEdited : boolean = false

  constructor ({ nombre, stock, precio, marca } :
    {nombre:string, stock:number, precio:number, marca:string}) {
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
    this.marca = marca
  }

  getProducto (): Producto {
    return {
      id: this.id,
      nombre: this.nombre,
      stock: this.stock,
      precio: this.precio,
      marca: this.marca
    }
  }

  descontarStock (cantidad:number) {
    this.stock -= cantidad
    return this.stock
  }

  aumentarStock (cantidad:number) {
    this.stock += cantidad
    return this.stock
  }

  setId (id:number) {
    if (!this.idEdited) {
      this.id = id
      this.idEdited = true
      return 'Id editado correctamente'
    }
    return 'No se puede editar este Id'
  }
}
