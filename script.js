// Función para comenzar el juego
function startGame() {
    window.location.href = "prepare.html";
}

// Función para guardar los nombres de los jugadores y comenzar el juego
function saveNames() {
    // Obtener los nombres de los jugadores
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;

    // Validar que los nombres no estén vacíos
    if (player1Name.trim() !== "" && player2Name.trim() !== "") {
        // Guardar los nombres en el almacenamiento local
        localStorage.setItem("player1Name", player1Name);
        localStorage.setItem("player2Name", player2Name);
        // Redireccionar al juego
        window.location.href = "game.html";
    } else {
        alert("Por favor, introduce un nombre para cada jugador.");
    }
}

// Función para cargar los nombres de los jugadores
function loadNames() {
    // Obtener los nombres de los jugadores del almacenamiento local
    const player1Name = localStorage.getItem("player1Name");
    const player2Name = localStorage.getItem("player2Name");

    // Mostrar los nombres en la página
    document.getElementById("currentPlayerName").innerText = player1Name;
}




// Función para cambiar el turno con animación
function changeTurn() {
    // Obtener los nombres de los jugadores desde el almacenamiento local
    let player1Name = localStorage.getItem("player1Name");
    let player2Name = localStorage.getItem("player2Name");

    // Girar la mesa y los nombres de los jugadores
    const table = document.querySelector('.table');
    const playerInfo = document.querySelector('.player-info');

    // Agregar clase de animación para girar la mesa
    table.classList.add('rotate-animation');

    // Lógica para cambiar los nombres de los jugadores
    const temp = player1Name;
    player1Name = player2Name;
    player2Name = temp;
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    // Actualizar los nombres en la página después de completar la animación
    setTimeout(() => {
        playerInfo.querySelector('h2').innerText = player1Name;
        // Remover la clase de animación después de completar la rotación
        table.classList.remove('rotate-animation');
    }, 1000);
}

// Función para apuntar el arma hacia arriba
function pointUp() {
    const gun = document.querySelector('.gun');
    gun.style.transform = 'rotate(0deg)';
}

// Función para apuntar el arma hacia abajo
function pointDown() {
    const gun = document.querySelector('.gun');
    gun.style.transform = 'rotate(180deg)';
}



