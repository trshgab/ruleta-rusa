// Función para comenzar el juego
function startGame() {
    window.location.href = "prepare.html";
}

// Función para guardar los nombres de los jugadores y comenzar el juego
function saveNames() {
    let player1Name = '';
    let player2Name = '';

    // Obtener los nombres de los jugadores
    const player1Letters = document.querySelectorAll('#player1 .letter-input');
    const player2Letters = document.querySelectorAll('#player2 .letter-input');

    player1Letters.forEach(letter => player1Name += letter.value);
    player2Letters.forEach(letter => player2Name += letter.value);

    // Validar que los nombres tengan entre 1 y 6 caracteres
    if (player1Name.length >= 1 && player1Name.length <= 6 && player2Name.length >= 1 && player2Name.length <= 6) {
        // Guardar los nombres en el almacenamiento local
        localStorage.setItem("player1Name", player1Name);
        localStorage.setItem("player2Name", player2Name);
        // Redireccionar al juego
        window.location.href = "game.html";
    } else {
        alert("Los nombres deben tener entre 1 y 6 caracteres.");
    }
}

// Función para cambiar el turno con animación infinita
function changeTurn() {
    // Girar la mesa y los nombres de los jugadores
    const table = document.querySelector('.table');
    const playerTop = document.querySelector('.player-top');
    const playerBottom = document.querySelector('.player-bottom');

    table.style.transition = 'transform 1s ease-in-out';
    table.style.transform = 'rotate(180deg)';
    playerTop.style.transition = 'transform 1s ease-in-out';
    playerTop.style.transform = 'rotate(180deg)';
    playerBottom.style.transition = 'transform 1s ease-in-out';
    playerBottom.style.transform = 'rotate(180deg)';

    // Lógica para cambiar los nombres de los jugadores
    let player1Name = localStorage.getItem("player1Name");
    let player2Name = localStorage.getItem("player2Name");

    const temp = player1Name;
    player1Name = player2Name;
    player2Name = temp;
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    // Reiniciar la animación después de 1 segundo para hacerla infinita
    setTimeout(() => {
        table.style.transition = 'none';
        table.style.transform = 'rotate(0deg)';
        playerTop.style.transition = 'none';
        playerTop.style.transform = 'rotate(0deg)';
        playerBottom.style.transition = 'none';
        playerBottom.style.transform = 'rotate(0deg)';

        // Actualizar los nombres en la página
        document.getElementById("player1Name").innerText = player1Name;
        document.getElementById("player2Name").innerText = player2Name;
    }, 1000);
}
