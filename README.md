# Juego de Piedra, Papel y Tijeras

## Cómo Jugar

1. **Registro de Jugadores**
   - Ingresa el nombre completo de dos jugadores en los campos indicados (los nombres deben ser distintos y no pueden estar vacíos) sino obtendrás un error.
   - Haz clic en el botón "Iniciar Batalla".

2. **Desarrollo de la Partida**
   - Se mostrará el título de la ronda (Ronda 1, Ronda 2, etc.) en un encabezado centrado.
   - El jugador 1 selecciona un movimiento (Piedra, Papel o Tijeras). Una vez lo haga, el jugador 2 podrá seleccionar el suyo.
   - Si ambos jugadores eligen el mismo movimiento, se declara "Empate". De lo contrario, se determina el ganador según:
     - Piedra vence a Tijeras.
     - Papel vence a Piedra.
     - Tijeras vence a Papel.

3. **Resultados Parciales**
   - Un recuadro amarillo en la parte inferior muestra la tabla con el número de cada ronda y el ganador o "Empate".
   - La partida continúa registrando rondas hasta que un jugador alcance 3 victorias.

4. **Finalización de la Partida**
   - El juego termina cuando uno de los jugadores obtiene 3 rondas ganadas.
   - Aparecerá un mensaje "Tenemos un Ganador!!" y se indicará el nombre del campeón. Si no se alcanza un ganador, el mensaje mostrará "Ninguno ganó...".
   - Se ofrecen dos opciones:
     - "Revancha": reinicia el juego con los mismos jugadores.
     - "Nuevo Juego": reinicia todo el proceso para registrar nuevos jugadores.
