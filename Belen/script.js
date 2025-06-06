// Guardar producto en localStorage para ver detalles
function verDetalles(nombre, descripcion, precio) {
const producto = { nombre, descripcion, precio };
localStorage.setItem("productoDetalles", JSON.stringify(producto));
window.location.href = "detalles.html";
}

// Agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
const producto = { nombre, precio };
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
carrito.push(producto);
localStorage.setItem("carrito", JSON.stringify(carrito));
alert("Producto agregado al carrito");
}

// Mostrar carrito y total
window.onload = function () {
if (document.getElementById("carrito")) {
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let lista = document.getElementById("carrito");
let total = 0;

carrito.forEach(p => {
let item = document.createElement("li");
item.textContent = `${p.nombre} - MXN$${p.precio}`;
lista.appendChild(item);
total += p.precio;
});

document.getElementById("total").textContent = total.toFixed(2);
}
}

// Vaciar carrito
function vaciarCarrito() {
localStorage.removeItem("carrito");
location.reload();
}

// Enviar formulario
function enviarFormulario() {
alert("¡Gracias por tu compra!");
localStorage.removeItem("carrito");
return true; // Puedes redirigir si quieres
}