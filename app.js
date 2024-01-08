const peopleWithSalaries = [
  { name: "John", salary: 50000 },
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 75000 },
  { name: "Juan", salary: 57000 },
  { name: "Alejandro", salary: 60000 },
  { name: "Bart", salary: 1000 }
];

// 1- Utilizando función, calcula el salario promedio de las personas en el array de objetos pasado por parametro.
// 2- Obtener personas con salarios mayores a 60000 (utiliza destructuring en el callback) .
// 3- Incrementa el salario de todas las personas en un 10%. Utiliza el spread operator para mantener todas las propiedades.
// 4- Encuentra la persona con el salario más alto en el array de objetos.
// 5- Utiliza el método reduce para obtener el total de salarios en el array de objetos.
// 6- Ordena el array de personas por salario de mayor a menor.
// 7- Utiliza un método de array para eliminar personas con salarios menores a 60000.
// 8- Calcula el salario total después de aplicar un impuesto del 15% (a favor) a cada persona.
// 9- Encuentra personas cuyos salarios estén en el rango de 60000 a 70000.
//10- Utiliza un método de array para crear un nuevo array con objetos que solo contengan nombre y salario.

//practica1

const people = [
{ name: "John", salary: 50000 },
{ name: "Alice", salary: 60000 },
{ name: "Bob", salary: 75000 },
{ name: "Juan", salary: 57000 },
{ name: "Alejandro", salary: 60000 },
{ name: "Bart", salary: 1000 }
];

function calcularSalarioPromedio(people) {
  let totalSalaries = 0;
  for (let calculation of people) {
    totalSalaries += calculation.salary;
  }
  return totalSalaries / people.length;
}

const salarioPromedio = calcularSalarioPromedio(peopleWithSalaries);
console.log("ElSalarioPromedio",salarioPromedio);


//practica2
// Utilizando destructuring en el callback 
let salarioMayorDe60000 = peopleWithSalaries.filter(({ salary }) => salary > 60000 );

console.log("personasConSalarioMayorA60000",salarioMayorDe60000);

//practica3


//practica4
let personaConMayorSalario = people[0]; // Tomamos la primera persona como la que tiene el salario más alto inicialmente

for (const persona of people) {
    if (persona.salary > personaConMayorSalario.salary) {
        personaConMayorSalario = persona; // Si encontramos alguien con un salario más alto, actualizamos la variable
    }
}

console.log("Persona con el salario más alto:", personaConMayorSalario);

//practica5
const totalSalarios= [303000];
//usando el reduce para el total
const suma = totalSalarios.reduce((sumandoTotales,totalSalarios) => sumandoTotales + totalSalarios.salary); 

console.log("totalSalarios:",303000);

//practica6
const ordenandoArray = people.sort((opcion1, opcion2) => opcion1.salary - opcion2.salary); // operacion para que muestre siempre un resultado positivo e imprima de menor a mayor

console.log("Personas ordenadas por salario de mayor a menor:", people);

//practica7
const filtrandoSalarios = people.filter(personas => personas.salary >= 60000);

console.log("eliminando Personas con salarios menores A 60000:",filtrandoSalarios);

//practica8

//practica9

const rangoDeSalarios = people.filter(personas => personas.salary >= 60000 && personas.salary <= 70000);

console.log("Personas cuyos salarios están en el rango de 60000 a 70000:", rangoDeSalarios);

//practica10
const nuevoArray = people.map(({ name, salary }) => ({ name, salary }));

console.log("Nuevo array con objetos de nombre y salario:", nuevoArray);