    // Exercice 1 : Types et conversions
let x = "150";
let y = 150;
let z = true;
console.log(`type de x est: ${typeof x}`);
console.log(`type de y est: ${typeof y}`);
console.log(`type de z est: ${typeof z}`);
let x_num = Number(x);
// Conversion de x en nombre
console.log(`: ${x_num}`);
console.log(`Nouveau type de x est: ${typeof x_num}`);
    // Exercice 2 : Templates littéraux
let prenom = "Sara";
let age = 22;
let phrase =`Je m'appelle ${prenom} et j'ai ${age} ans`;
console.log(phrase);
age = 23; 
phrase = `Je m'appelle ${prenom} et j'ai ${age} ans`; 
console.log(`Nouvelle phrase : ${phrase}`);
       // Exercice 3 : Conditions imbriquées
let input = prompt("Entrez un nombre: ");
let nombre = Number(input);

if (isNaN(nombre)) {
    console.log("Veuillez entrer un nombre valide.");
} else if (nombre < 0) {
    console.log("Nombre négatif");
} else {
    if (nombre <= 10) {
        console.log("Petit");
    } else if (nombre <= 50) {
        console.log("Moyen");
    } else {
        if (nombre <= 100) {
            console.log("Grand");
        } else {
            console.log("Très grand");
        }
    }
}
    // Exercice 4 : FizzBuzz personnalisé
let min = Number(prompt("Entrez le nombre minimal: "));
let max = Number(prompt("Entrez le nombre maximal: "));

for (let i = min; i <= max; i++) {
    let output = "";
    if (i % 3 === 0 && i % 5 === 0) {
        output = "Five&Three";
    } 
    else if (i % 3 === 0) {
        output = "Three";
    } 
    else if (i % 5 === 0) {
        output = "Five";
    } 
    else {
        output = i;
    }
    
    console.log(output);
}

    // Exercice 5 : Table de multiplication
let n = Number(prompt("veuillez entrez un nombre: "));

console.log(`Table de ${n}:`);

for (let i = 1; i <= 10; i++) {
    let resultat = n * i;
    console.log(`${n} x ${i} = ${resultat}`);
}

    // Exercice 6 : Somme des pairs et impairs
let sommePairs = 0;
let sommeImpairs = 0;
  // Boucle de 1 à 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sommePairs += i;
    } else {
        sommeImpairs += i;
    }
}

console.log(`Somme des nombres pairs entre 1 et 50 est: ${sommePairs}`);
console.log(`Somme des nombres impairs entre 1 et 50 est: ${sommeImpairs}`);
     
           // Exercice 7 : Vérification de mot de passe
function verifierMotDePasse(mdp) {
    let estLong = mdp.length >= 8;
    let contientArobase = mdp.includes('@');
    return estLong && contientArobase;
}

let motDePasseUtilisateur = prompt("Entrez un mot de passe (Exo 7) : ");

if (verifierMotDePasse(motDePasseUtilisateur)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}

              // Exercice 8 : Calcul de remise
function totalAvecRemise(total, remise) {
    let montantRemise = total * (remise / 100);
    let totalFinal = total - montantRemise;
    return totalFinal;
}

let totalHT = Number(prompt("veuillez entrez le total HT: "));
let remisePourcentage = Number(prompt("Entrez la remise en %: "));
let totalAPayer = totalAvecRemise(totalHT, remisePourcentage);
console.log(`Total HT : ${totalHT} €`);
console.log(`Remise appliquée : ${remisePourcentage} %`);
console.log(`Total final à payer : ${totalAPayer.toFixed(2)} €`);

      // Exercice 9 : Factorielle récursive
function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}

console.log(`Factorielle de 5 : ${factorielle(5)}`);
console.log(`Factorielle de 7 : ${factorielle(7)}`);

        // Exercice 10 : Somme itérative et récursive
// Version 1 : Boucle (Itérative)
function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

// Version 2 : Récursion
function sommeRecursive(n) {
    if (n === 1) {
        return 1;
    }
    return n + sommeRecursive(n - 1);
}

let nombreTest = 10;
console.log(`Somme itérative de 1 à ${nombreTest} : ${sommeIterative(nombreTest)}`);
console.log(`Somme récursive de 1 à ${nombreTest} : ${sommeRecursive(nombreTest)}`);

          /* Analyse demandée : */

// 1) le code récursif est plus simple et plus élégant à lire.
// 2) la version itérative est généralement plus performante en termes de mémoire et évite les risques de dépassement de pile.
// 3) Oui, elle peut causer un dépassement de pile (Stack Overflow) si la profondeur des appels est trop grande.
// 4) Pour les tâches simples, les grands nombres d'itérations, ou lorsque la performance mémoire est critique.