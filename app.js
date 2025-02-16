let ranking = [];

function agregarPersona() {
    const nombre = document.getElementById('nombre').value.trim();
    const puntuacion = parseInt(document.getElementById('puntuacion').value, 10);

    if (nombre && !isNaN(puntuacion)) {
        ranking.push({ nombre, puntuacion });
        ranking.sort((a, b) => b.puntuacion - a.puntuacion);
        actualizarRanking();
        document.getElementById('nombre').value = '';
        document.getElementById('puntuacion').value = '';
    } else {
        alert('Por favor, introduce un nombre y un número de Flexiones válida.');
    }
}

function eliminarPersona(index) {
    ranking.splice(index, 1); // Elimina la persona según el índice
    actualizarRanking();
}

function actualizarRanking() {
    const lista = document.getElementById('ranking-list');
    lista.innerHTML = '';

    ranking.forEach((persona, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-pos', `${index + 1}`);

        li.innerHTML = `
            <span>${index === 0 ? `<strong>${persona.nombre} 👑</strong>` : persona.nombre} - ${persona.puntuacion} Flexiones</span>
            <button class="eliminar" onclick="eliminarPersona(${index})">❌</button>
        `;

        lista.appendChild(li);
    });
}
