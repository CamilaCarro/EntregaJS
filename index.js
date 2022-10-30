function saludoprincipal() {
    const bienvenidouser = prompt('Como es tu nombre?')
    const bienvenido = alert(`Bienvenido ${bienvenidouser} a View Boutique`)
}
saludoprincipal()

let menu = true
let carrito = parseInt(prompt('Ingrese 1.Comprar Chaleco 2.comprar Jean 3.Comprar Remera 4.Comprar Campera'))
let finalizacion
let catalogo
let totalcompra = 0

while (menu === true) {
    if (carrito === 1) {
        totalcompra = totalcompra + 500
    } else if (carrito === 2) {
        totalcompra = totalcompra + 800
    } else if (carrito === 3) {
        totalcompra = totalcompra+ 1000
    } else {
        totalcompra = totalcompra + 800
    }


    finalizacion = parseInt(prompt('Preciona 1.Seguir comprando 2.Finalizar'))
    if (finalizacion === 1) {
        let carrito = parseInt(prompt('Ingrese 1.Comprar Chaleco 2.comprar Jean 3.Comprar Remera 4.Comprar Campera'))
    } else {
        menu = false
    }

}

alert (`Total de tu compra es ${totalcompra}`)




