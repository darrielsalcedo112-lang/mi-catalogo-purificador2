// script-detalle.js

// COPIA Y PEGA AQUÍ EL MISMO ARRAY DE PRODUCTOS DE script.js
const productos = [
    {
        id: 1,
        nombre: "Modelo Casero",
        descripcion: "El modelo casero, ideal para para la comodidad del bolsillo.",
        precio: 100,
        imagenUrl: "imagenes/Purificador.png.jpg",
        caracteristicas: ["Materiales Reciclables, ecologicos y sostenible", "Garantía de 6 meses", "Envío a toda Bolivia"]
        
    },
    {
        id: 2,
        nombre: "Modelo Casero mas Medidor de PH",
        descripcion: "Pequeño pero potente, la mejor opción para llevar a cualquier parte.",
        precio: 300,
        imagenUrl: "imagenes/Biopurificador2.png..png",
        caracteristicas: ["Filtro Biologico", "Garantía de 6 meses", "Medidor de PH basico"]
    }
];
// FIN DEL ARRAY DE PRODUCTOS


function obtenerIdDeURL() {
    // 1. Obtiene los parámetros de la URL (?id=X)
    const params = new URLSearchParams(window.location.search);
    // 2. Devuelve el valor del parámetro 'id'
    return parseInt(params.get('id')); 
}

function mostrarDetalleProducto() {
    const idProducto = obtenerIdDeURL();
    const contenedor = document.getElementById('detalle-producto');

    // Busca el producto en el array por su ID
    const producto = productos.find(p => p.id === idProducto);

    if (!producto) {
        contenedor.innerHTML = '<h2>Producto no encontrado.</h2>';
        return;
    }

    // Crea la lista de características
    const listaCaract = producto.caracteristicas.map(c => `<li>${c}</li>`).join('');

    // Rellena el contenedor con los detalles del producto
    contenedor.innerHTML = `
        <div class="detalle-img">
            <img src="${producto.imagenUrl}" alt="Imagen de ${producto.nombre}">
        </div>
        <div class="detalle-info">
            <h1>${producto.nombre}</h1>
            <p>${producto.descripcion}</p>

            <h3>Características Clave:</h3>
            <ul>
                ${listaCaract}
            </ul>

            <p class="detalle-precio">Bs ${producto.precio.toFixed(2)}</p>
            
            <a href="https://wa.me/[TuNúmeroDeWhatsApp]?text=Hola,%20me%20interesa%20el%20producto:%20${producto.nombre}" 
               target="_blank" 
               class="btn-compra-final">
                🛍️ Comprar por WhatsApp
            </a>
            
            <p style="margin-top: 15px; font-size: 0.9em; color: #666;">
                Haz clic en el botón para iniciar tu pedido.
            </p>
        </div>
    `;
}

// Ejecuta la función cuando la página se carga
document.addEventListener('DOMContentLoaded', mostrarDetalleProducto);