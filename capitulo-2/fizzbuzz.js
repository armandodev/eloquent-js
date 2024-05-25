/* 
Fizzbuzz

Imprime los números del 1 al 100
Los multiplos de 3 los remplazaremos con fizz
Los multiplos de 5 los remplazaremos con buzz
Y los multiplos de ambos los remplazaremos con fizzbuzz
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
