let ranking = [];

function agregarPersona() {
    const nombre = document.getElementById('nombre').value;
    const puntuacion = parseInt(document.getElementById('puntuacion').value);

    if (nombre && !isNaN(puntuacion)) {
        ranking.push({ nombre, puntuacion });
        ranking.sort((a, b) => b.puntuacion - a.puntuacion);
        actualizarRanking();
        document.getElementById('nombre').value = ''; // Limpiar campo nombre
        document.getElementById('puntuacion').value = ''; // Limpiar campo puntuación
    } else {
        alert('Por favor, introduce un nombre y una puntuación válida.');
    }
}

function actualizarRanking() {
    const lista = document.getElementById('ranking-list');
    lista.innerHTML = '';
    ranking.forEach((persona, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-pos', `${index + 1}`); // Añadir número de posición

        // Añadir icono de corona si es el primer lugar
        if (index === 0) {
            li.innerHTML = `${persona.nombre} 👑 - ${persona.puntuacion} Flexiones`;
        } else {
            li.textContent = `${persona.nombre} - ${persona.puntuacion} Flexiones`;
        }

        lista.appendChild(li);
    });
}