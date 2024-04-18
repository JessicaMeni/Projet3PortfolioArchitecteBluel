
const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();

console.log("EN TITRE PROJETS", projets);
//const premierProjet = projets[0];
//console.log("EN TITRE PREMIER PROJET", premierProjet);
//console.log("EN TITRE MON PREMIER PROJET", premierProjet.title);
//faire une boucle en html avec une figure, une img, et le titre en JS


for (let i = 0; i < projets.length; i++) {
    
    const article = projets[i]; 

    const sectionGallery = document.querySelector(".gallery");
    const baliseFigure = document.createElement("figure");
    //baliseFigure.innerText = article.figure; //ça ne sert a rien car figure n'existe pas dans le work ?
    //let parentElement = document.getElementById("gallery"); (Question : c correct ? non,car gallery n'est pas id mais une balise)
    //c pour mettre figure dans <gallery> ?
    sectionGallery.appendChild(baliseFigure); // on ajoute l'enfant <figure> à <.gallery>


    const baliseImage = document.createElement("img");
    baliseImage.src = article.imageUrl; //m'affiche 11 elements quand je remplace article par projets
    const baliseFigcaption = document.createElement("figcaption");
    baliseFigcaption.innerText = article.title; //(à la place de innerText, textContent ?)

    const sectionFigure = document.querySelector(".gallery", "figure"); //pas de . devant figure? pq je ne peux pas mettre baliseFigure
    sectionFigure.appendChild(baliseImage);
    sectionFigure.appendChild(baliseFigcaption); // je dois en faire deux pour intégrer baliseFigcaption sinon ça ne fonctionne pas

//sectionFigure.appendChild(baliseImage, baliseFigcaption);
} // et le ALT dans <img?>

const reponseDeux = await fetch("http://localhost:5678/api/categories");
const catego = await reponseDeux.json();

console.log("TYPE DE CATEGORIES", catego);

const baliseBoutonObjets = document.createElement("button");
baliseBoutonObjets.textContent = "Objets"

const sectionGalleryFiltres = document.querySelector(".gallery"); //je dois recréer une const qui lie de nouveau a gallery sinon ça ne fonctionne pas
sectionGalleryFiltres.appendChild(baliseBoutonObjets);

const boutonObjets = document.querySelector(".button");
boutonObjets.addEventListener("click", function () {
    ?
});

