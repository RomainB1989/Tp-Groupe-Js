// Tp-Groupe-JS

// Lassana
// Wilfried
// Romain


// Initialisation Variable de type Const avec pour Valeur Sélection Eléments Cliquable .
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");
const black = document.querySelector("#color1");
const blond = document.querySelector("#color2");
const turquoise = document.querySelector("#color3");

// Initialisation Variable de type Constant avec pour Valeur Sélection Elément Modifiable.
const hairCut = document.querySelector("#haircut");

// Initialisation Deux Variables pour modification nom Fichier .png Coupe de cheveux.
var color = "turquoise";
var haircut = 1;

//Affectation Variables par Défault.
arrowLeft.style.opacity = 0.6;
arrowRight.style.opacity = 1;
hairCut.setAttribute("src", `./img/hair-${color}-${haircut}.png`);

// Check du click sur les Flèches ainsi que leur actions.
arrowLeft.addEventListener("click", function(){
    // Check de la condition pour Décrémenter la variable haircut et Modifier Opacité
    if(haircut > 1){
        haircut -= 1;
        arrowRight.style.opacity = 1;          
    }
    if(haircut == 1){
        arrowLeft.style.opacity = 0.6;
    }
    // Affichage Coupe de Cheveux Modifié
    hairCut.setAttribute("src", `./img/hair-${color}-${haircut}.png`);
});

arrowRight.addEventListener("click", function(){
    // Check de la condition pour Incrémenter la variable haircut et Modifier Opacité
    if(haircut < 3){
        haircut += 1;
        arrowLeft.style.opacity = 1;
    }
    if(haircut == 3){
        arrowRight.style.opacity = 0.6;
    }
    hairCut.setAttribute("src", `./img/hair-${color}-${haircut}.png`);
});

// Check du click sur les Box Couleur ainsi que leur actions.
black.addEventListener("click", function(){
    // Modif Variable color
    color = "black";
    // Affichage Coupe de Cheveux Modifié
    hairCut.setAttribute("src", `./img/hair-${color}-${haircut}.png`);
});

blond.addEventListener("click", function(){
    color = "blond";
    hairCut.setAttribute("src", `./img/hair-${color}-${haircut}.png`);
});

turquoise.addEventListener("click", function(){
    color = "turquoise";
    hairCut.setAttribute("src", `./img/hair-${color}-${haircut}.png`);
});