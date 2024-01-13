// Função para atualizar o temporizador a cada segundo
function updateTimer() {
    var now = new Date();
    var targetDate = new Date(now.getTime() + 48 * 60 * 60 * 1000); // Adiciona 48 horas

    var timeRemaining = targetDate - now;
    var secondsPassed = (48 * 60 * 60 * 1000 - timeRemaining) / 1000;

    // Armazenar os segundos passados no Local Storage
    localStorage.setItem("secondsPassed", secondsPassed);

    if (timeRemaining > 0) {
        var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Adiciona um zero à esquerda se o valor for menor que 10
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timer").innerText = hours + ":" + minutes + ":" + seconds;
    } else {
        // Quando o temporizador atinge 0, limpar o Local Storage
        localStorage.removeItem("secondsPassed");
        document.getElementById("timer").innerText = "00:00:00";
    }
}

// Recuperar os segundos passados do Local Storage ao carregar a página
var storedSecondsPassed = localStorage.getItem("secondsPassed");
if (storedSecondsPassed) {
    document.getElementById("timer").innerText = "Tempo passado: " + storedSecondsPassed + " segundos";
} else {
    // Chama a função para iniciar o temporizador se não houver segundos armazenados
    setInterval(updateTimer, 1000);
}
