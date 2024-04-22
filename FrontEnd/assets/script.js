
const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();

console.log("EN TITRE PROJETS", projets);
//const premierProjet = projets[0];
//console.log("EN TITRE PREMIER PROJET", premierProjet);
//console.log("EN TITRE MON PREMIER PROJET", premierProjet.title);

const sectionGallery = document.querySelector(".gallery"); //peut être dehors pour ne pas la créer à chaque fois

//f qui génère toute la page
function genererLesArticles(projets) { //a la place de projets, je peux ecrire ce que je veux? 
    for (let i = 0; i < projets.length; i++) {
    
        const article = projets[i]; 

        const baliseFigure = document.createElement("figure");
    //baliseFigure.innerText = ``; //ça peut fonctionner mais remplacer innerText par innerHTML puis mettre directement dedans balise img et figcaption
    //let parentElement = document.getElementById("gallery"); (Question : c correct ? non,car gallery n'est pas n'a pas d'id mais c une balise)
    
        const baliseImage = document.createElement("img");//le ALT dans <img?> on peut l'ajouter avec createElement qui reprend .title
        baliseImage.src = article.imageUrl;
        const baliseFigcaption = document.createElement("figcaption");
        baliseFigcaption.innerText = article.title; //à la place de innerText, textContent ? oui c la meme chose mais c + trop utilisé

        //nope pas utile const sectionFigure = document.querySelector(".gallery", "figure"); // pq je ne peux pas mettre baliseFigure a la place de"figure" ?. querySelector selectionne le 1er gallery figure qu'il y a
        baliseFigure.appendChild(baliseImage); // utiliser baliseFigure directement
        baliseFigure.appendChild(baliseFigcaption);
    // on ajoute l'enfant <figure> à <.gallery> Ronan le mets en bas pour de la micro optimisation
        sectionGallery.appendChild(baliseFigure); 
    }
}
//permet le 1er affichage des figures
genererLesArticles(projets); 

const reponseDeux = await fetch("http://localhost:5678/api/categories");
const catego = await reponseDeux.json();
console.log("TYPE DE CATEGORIES", catego);

const Sectionfilterchoix = document.querySelector(".filterchoix")
//boucle pour créer les nomls des boutons auto
for (let i = 0; i < catego.length; i++) {

    const filtres = catego[i];
    
    const baliseBoutonObjets = document.createElement("button"); 
    baliseBoutonObjets.innerText = filtres.name;
    baliseBoutonObjets.className = filtres.name;//la class Hotel & ... pb à cause du & ?
    
    Sectionfilterchoix.appendChild(baliseBoutonObjets);
}
//ajout du listener pour filtre que les objets
const FiltreObjets = document.querySelector(".Objets");
FiltreObjets.addEventListener("click", function () {
    const filtreQueDesObjets = projets.filter(function (truc) {
     return truc.categoryId === 1;
    })
    //effacement de l'écran et régénération de la page
    console.log(filtreQueDesObjets)
    document.querySelector(".Objets").innerHTML = "";
    genererLesArticles(filtreQueDesObjets);
});

//for (let i = projets.length -1 ; i >= 0; i--) { //hein? 

//    if(filtreQueDesObjets !== 1)
//        tructruc.splice(i,1)
//}

const FiltreAppartements = document.querySelector(".Appartements");
FiltreAppartements.addEventListener("click", function () {
    const filtreQueDesAppartements = projets.filter(function (truc) {
     return truc.categoryId === 2;
    })
    console.log(filtreQueDesAppartements)
});

const FiltreHotelsResto = document.querySelector(".Hotels"); //je n'ai pas pu mettre &
FiltreHotelsResto.addEventListener("click", function () {
    const filtreQueDesHotelsEtRestaur = projets.filter(function (truc) {
     return truc.categoryId === 3;
    })
    console.log(filtreQueDesHotelsEtRestaur)
});