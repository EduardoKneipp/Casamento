 // Definir a data do evento
 const eventDate = new Date("Nov 16, 2024 12:00:00").getTime();

 // Atualizar a contagem regressiva a cada segundo
 const countdownFunction = setInterval(function() {
     const now = new Date().getTime();
     const timeLeft = eventDate - now;

     // Cálculo de dias, horas, minutos e segundos
     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

     // Exibir o resultado nos elementos HTML
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;

     // Se a contagem terminar
     if (timeLeft < 0) {
         clearInterval(countdownFunction);
         document.getElementById("countdown").innerHTML = "O evento já começou!";
     }
 }, 1000);

        