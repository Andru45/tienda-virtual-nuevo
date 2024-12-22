let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");

function mostrarCarrito() {
  listaCarrito.innerHTML = carrito.map((item, index) => `
    <div>
      <span>${item.nombre} - $${item.precio.toFixed(2)}</span>
      <button onclick="eliminarProducto(${index})">Eliminar</button>
    </div>
  `).join("");

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

mostrarCarrito();
