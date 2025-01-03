class CarritoCompra {
constructor(){
    this.carrito = [];
}
agregarProducto(producto){
  this.carrito.push(producto)
}
calcularTotal(){
let total =0;
this.carrito.forEach((producto)=>{
 total = total + (producto.precio * producto.cantidad);
})
return total;
};


aplicarDescuento(porcentaje){
let total = 0;
let porcentajeDescuento;
this.carrito.forEach((producto)=>{
  
total = total + (producto.precio * producto.cantidad) 
porcentajeDescuento = total * (porcentaje /100);
})
let precioconDescuento = total - porcentajeDescuento;
return precioconDescuento;
}


};

module.exports = {CarritoCompra};




/* constructor(): Inicializa el carrito como un array vacío.

agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado */