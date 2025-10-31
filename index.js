//Exercice 1
var x = 5
let y = 10
const z = 15

//Erreur observée : Tenter de réassigner z (déclarée avec const) entraînera une erreur de type (TypeError: Assignment to constant variable.).

//Exercice 2
function testScope() {
    if (true) {
        var a = "var visible partout";
        let b = "let visible ici seulement";
    }
    console.log(a);
    console.log(b);
}
testScope();

//console.log(b); : Provoque une erreur (ReferenceError: b is not defined). let a une portée de bloc. 
// b est uniquement visible dans le bloc où elle a été déclarée, c'est-à-dire le bloc if.

//Exercice 3
function sayHello(name) {
    return `Bonjour, ${name}`;
}

const sayHelloArrow = (name) => `Bonjour, ${name}`;

//Les deux fonctions sayHello et sayHelloArrow ont le même comportement et renvoient le même résultat : Bonjour [name].
//La différence essentielle est la gestion de this et la syntaxe.

//Exercice 4
const person = {
    name: "Sara",
    sayHello: function () {
        console.log(`Bonjour, ${this.name}`);
    },
    sayHelloArrow: () => {
        console.log(`Bonjour, ${this.name}`);
    },
};

person.sayHello();
person.sayHelloArrow();



//Import/export modules
import message, { PI, carre } from './MathUtils.js';

message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));


//Exercice 5
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);


//Exercice 6
const nums = [1, 2, 3, 4, 5]; 
console.log(nums.map(n => n * 2)); 
console.log(nums.filter(n => n % 2 === 0)); 
console.log(nums.reduce((sum, n) => sum + n, 0)); 


//Exercice 7
console.log(nums.find(n => n > 3)); 
console.log(nums.some(n => n < 0)); 
console.log(nums.every(n => n > 0)); 


//Exercice 8
const user = { id: 1, name: "Ali", city: "Rabat" }; 
const { name, city } = user; 
console.log(`${name} habite à ${city}`); 


const { name: fullName, ...rest } = user; 
console.log(fullName); 
console.log(rest);


//Exercice 9
const p = new Promise((resolve) => { 
  setTimeout(() => resolve("Opération terminée !"), 2000); 
}); 
 
p.then(result => console.log(result)); 


//Exercice 10
async function getUsers() { 
  try { 
    const res = await 
fetch("https://jsonplaceholder.typicode.com/users"); 
    const data = await res.json(); 
    console.log(data); 
  } catch (e) { 
    console.error("Erreur :", e.message); 
  } 
} 
 
getUsers(); 


//Exercice 11
const name = "Nadia"; 
const hour = new Date().getHours(); 
console.log(`Bonjour ${name}, il est ${hour}h`); 


//Exercice 12
const arr1 = [1, 2]; 
const arr2 = [...arr1, 3, 4]; 
console.log(arr2); 

function sum(...numbers) { 
return numbers.reduce((a, b) => a + b, 0); 
} 
console.log(sum(1, 2, 3, 4)); 



//Exercice 13
const settings = { theme: null }; 
console.log(settings.theme ?? "light"); // light 
const user2 = { profile: { email: "x@y.com" } }; 
console.log(user2.profile?.email); // x@y.com 
console.log(user2.address?.city);   // undefined


// Gestion des produits

const produits = [
    { nom: "Lait", prix: 10.00, expireLe: "2025-12-01" },
    { nom: "Yaourt", prix: 5.50, expireLe: "2024-01-01" }, 
    { nom: "Jus d'Orange", prix: 8.75, expireLe: "2026-02-15" },
    { nom: "Pâtes", prix: 12.00, expireLe: "2025-05-20" },
    { nom: "Beurre", prix: 15.00, expireLe: "2024-03-10" } 
];

const aujourdHui = new Date();



const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);

const total = valides.reduce((somme, produit) => somme + produit.prix, 0);


console.log("  Rapport des Produits Valides  ");
console.log(`Date du rapport : ${aujourdHui.toLocaleDateString('fr-FR')}`);

if (valides.length > 0) {
    console.log(`${valides.length} produit(s) non expiré(s) trouvé(s) :`);
    
    valides.forEach(p => {
        console.log(`- ${p.nom} : ${p.prix.toFixed(2)} DH (Expire le : ${p.expireLe})`);
    });

    console.log(`SOMME TOTALE des produits valides : ${total.toFixed(2)} DH`);
} else {
    console.log("Aucun produit non expiré trouvé dans la liste.");
}

