/* 
Escribe un programa que cree una cadena que represente un tablero de 8x8,
usando caracteres de salto de línea para separar las líneas. En cada posición
del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
formar un tablero de ajedrez.
Al pasar esta cadena a console.log debería mostrar algo como esto:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
Define una variable size
= 8 y cambia el programa para que funcione para cualquier size, generando
un tablero con el ancho y alto dados.
*/

let col = 1,
  row = 1,
  size = 8,
  result = "";

while (row <= size) {
  if (col === size + 1) {
    result += "\n";
    row++;
    col = 0;
  } else if (row % 2 === 0) {
    if (col % 2 === 0) result += " ";
    else result += "#";
  } else {
    if (col % 2 === 0) result += "#";
    else result += " ";
  }

  col++;
}

console.log(result);
