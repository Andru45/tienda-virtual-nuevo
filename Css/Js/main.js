let carrito = [];

document.querySelectorAll(".producto button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const producto = button.parentElement;
    const nombre = producto.querySelector("h3").textContent;
    const precio = parseFloat(producto.querySelector("p").textContent.replace("$", ""));
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${nombre} agregado al carrito`);
  });
});
