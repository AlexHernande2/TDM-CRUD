export function renderItems(items, tableBody) {
    tableBody.innerHTML = "";
    items.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description || ""}</td>
            <td>${item.precio}</td>
            <td>${item.categoria}</td>
            <td>${item.stock}</td>
            <td>${item.marca}</td>
            <td>
                <button class="btn-edit" data-id="${item.id}">Editar</button>
                <button class="btn-delete" data-id="${item.id}">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


//
export function resetForm(form, submitBtn) {
    form.reset();
    if (submitBtn) submitBtn.textContent = "Agregar";
}

//Guardar los datos cuando se editan
export function fillForm(form, item, submitBtn) {
    form.querySelector("#name").value = item.name;
    form.querySelector("#description").value = item.description || "";
    form.querySelector("#precio").value = item.precio ;
    form.querySelector("#categoria").value = item.categoria ;
    form.querySelector("#stock").value = item.stock ;
    form.querySelector("#marca").value = item.marca ;
    if (submitBtn) submitBtn.textContent = "Guardar cambios";
}