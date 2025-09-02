const estudiantes = [
  {id:1, nombre: "Juan Pérez", edad: 20, pais: "México", notas: [80, 90, 85] },
  {id:2, nombre: "María López", edad: 22, pais: "Argentina", notas: [70, 75, 72] },
  {id:3, nombre: "Carlos Ramírez", edad: 21, pais: "Chile", notas: [88, 92, 95] },
  {id:4, nombre: "Ana Torres", edad: 19, pais: "Perú", notas: [65, 70, 68] },
  {id:5, nombre: "Luis Gómez", edad: 23, pais: "Colombia", notas: [90, 93, 97] },
  {id:6, nombre: "Fernanda Ruiz", edad: 20, pais: "Bolivia", notas: [85, 80, 88] },
  {id:7, nombre: "Pedro Silva", edad: 24, pais: "Uruguay", notas: [60, 65, 70] },
  {id:7, nombre: "Sofía Castro", edad: 22, pais: "Ecuador", notas: [95, 92, 96] },
  {id:8, nombre: "Andrés Fernández", edad: 21, pais: "Venezuela", notas: [78, 82, 80] },
  {id:9, nombre: "Camila Díaz", edad: 20, pais: "Paraguay", notas: [88, 85, 90] },
  {id:10, nombre: "Rodrigo Morales", edad: 23, pais: "México", notas: [70, 75, 72] },
  {id:11, nombre: "Valentina Rojas", edad: 19, pais: "Chile", notas: [98, 95, 99] },
  {id:12, nombre: "Martín Herrera", edad: 22, pais: "Argentina", notas: [85, 87, 83] },
];
 const iconEdit=`
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

 `;

  const iconDelete=`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

 `;

 const iconAdd=`
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-blue-700">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
</svg>
 `;

 const openBtn = document.querySelector("button"); 
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
      modal.classList.add("flex");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
      modal.classList.remove("flex");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });

  document.getElementById("modalForm").addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.add("hidden");
  });

const listarEstudiantes = (estudiantes) => {
    console.log(estudiantes)
  const tbody = document.getElementById("tabla-tbody");
  estudiantes.forEach((estudiante) => {
    const sumaNotas = estudiante.notas.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const promedioNota = sumaNotas / estudiante.notas.length;
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    tdNombre.textContent = estudiante.nombre;
    tdNombre.className = "py-3 px-4 text-center";
    const tdEdad = document.createElement("td");
    tdEdad.textContent = estudiante.edad;
    tdEdad.className = "py-3 px-4 text-right";
    const tdPais = document.createElement("td");
    tdPais.textContent = estudiante.pais;
    tdPais.className = "py-3 px-4 text-center";
    const tdPromedio = document.createElement("td");
    tdPromedio.textContent = promedioNota.toFixed(2);
    tdPromedio.className =
      "py-3 px-4 font-semibold text-center " +
      (promedioNota >= 70 ? "text-green-600" : "text-yellow-600");
    const tdActions = document.createElement("td");
    tdActions.innerHTML=`
    <div class="flex gap-3 cursor-pointer">
        <span class="delete">${iconDelete}</span>
        <span class="edit">${iconEdit}</span>
        <span class="add">${iconAdd}</span>
      </div>
    `;

     tdActions.querySelector(".edit").addEventListener("click", () => {
    //   document.getElementById("inputId").value = estudiante.id;
      document.getElementById("inputNombre").value = estudiante.nombre;
      document.getElementById("inputEdad").value = estudiante.edad;
      document.getElementById("inputPais").value = estudiante.pais;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });

    tr.appendChild(tdNombre);
    tr.appendChild(tdEdad);
    tr.appendChild(tdPais);
    tr.appendChild(tdPromedio);
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });
};

listarEstudiantes(estudiantes)