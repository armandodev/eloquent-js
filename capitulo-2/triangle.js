/* 
  Escribe un bucle que realice siete llamadas a console.log para mostrar el
siguiente triángulo:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

let string = "#";
for (let i = 0; i < 7; i++) {
  console.log(string);
  string += "#";
}
