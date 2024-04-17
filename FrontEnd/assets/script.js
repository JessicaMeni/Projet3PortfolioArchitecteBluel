
const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();

console.log("EN TITRE PROJETS", projets);
//const premierProjet = projets[0];
//console.log("EN TITRE PREMIER PROJET", premierProjet);
//console.log("EN TITRE MON PREMIER PROJET", premierProjet.title);
//faire une boucle en html avec une figure, une img, et le titre en JS

const article = projets[0]; 

    const baliseFigure = document.createElement("figure");
    baliseFigure.innerText = article.figure;
    //let parentElement = document.getElementById("gallery"); (Question : c correct ?)
    const sectionGallery = document.querySelector(".gallery"); //c pour mettre figure dans <gallery> ?
    sectionGallery.appendChild(baliseFigure);

for (let i = 0; i < projets.length; i++) {
    const baliseImage = document.createElement("img");
    baliseImage.src = projets[i].imageUrl; //m'affiche 11 elements quand je remplace article par projets
    const baliseFigcaption = document.createElement("figcaption");
    baliseFigcaption.innerText = projets[i].title; //(à la place de innerText, textContent ?)

    const sectionFigure = document.querySelector(".gallery figure"); //pas de . devant figure?
    sectionFigure.appendChild(baliseImage);
    sectionFigure.appendChild(baliseFigcaption); // je dois en faire deux pour intégrer baliseFigcaption sinon ça ne fonctionne pas

//parentElement.appendChild(baliseImage, baliseFigcaption);
}