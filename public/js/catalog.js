// Script base para la vista de catálogo
// Aquí deben consumir la API de items y mostrarlos en la página

// Constante con la URL base de la API
const API_URL = "/api/items";


// TODO: Seleccionar el contenedor donde se mostrarán los items
const catalogContainer = document.getElementById("catalogContainer");

// Referencias al modal
const modal = document.getElementById("itemModal");
const closeModal = document.getElementById("closeModal");
const modalName = document.getElementById("modal-name");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");





// Función principal para cargar los items desde la API
async function loadCatalog() {
    try {
        // 1. Hacer fetch a la API (GET /api/items)
        const res = await fetch(API_URL);
        // 2. Parsear la respuesta a JSON
        //se convierte en un array de objetos de js
        const items = await res.json();
        // 3. Limpiar el contenedor del catálogo
        catalogContainer.innerHTML = "";
        // 4. Iterar sobre cada item y llamar a renderItem()
        items.forEach(item => renderItem(item));


    } catch (err) {
        console.error("Error cargando catálogo:", err);
        // TODO: Mostrar mensaje de error en la UI
    }
}

// Función para renderizar un item en el catálogo
function renderItem(item) {
    // TODO: Crear un elemento HTML (ej: div o card)
     const card = document.createElement("div");
    card.classList.add("card");

    // TODO: Asignar los datos del item (name, description, etc.)
     card.innerHTML = `
        <img src="${item.img || 'https://picsum.photos/300/200'}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="details-btn">Ver más</button>
    `;
    // TODO: Insertar el elemento en el contenedor

    catalogContainer.appendChild(card);

    // Evento del botón "Ver más" para abrir el modal con detalle
    card.querySelector(".details-btn").addEventListener("click", () => {
        modalName.textContent = item.name;
        modalImg.src = item.img || "https://picsum.photos/300/200";
        modalDesc.textContent = item.description;
        modalPrice.textContent = item.precio ? `$${item.precio}` : "N/A";

        modal.classList.remove("hidden"); // Mostrar modal
    });
}

// Cerrar modal al dar click en el botón de cerrar
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// Inicializar el catálogo cuando cargue la página
loadCatalog();