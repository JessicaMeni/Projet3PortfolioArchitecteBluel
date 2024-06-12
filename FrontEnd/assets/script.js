//const premierProjet = works[0]; console.log("EN TITRE PROJETS", works); console.log("EN TITRE MON PREMIER PROJET", premierProjet.title);
const recupToken = window.localStorage.getItem("cleToken");
document.querySelector(".black_mode_edition").style.display = 'none';
document.querySelector(".modifier_projets").style.display = 'none';

const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

const sectionGallery = document.querySelector(".gallery"); //peut être mis dehors pour ne pas la créer à chaque fois
//f qui génère toute la page
function genererLesArticles(projetsArticles) { //je peux ecrire ce que je veux dans () ? Oui
    
    sectionGallery.innerHTML = "";//pour effacer la gallery, l'actualiser 
    for (let i = 0; i < projetsArticles.length; i++) {
        
        const article = projetsArticles[i]; 

        const baliseFigure = document.createElement("figure");
        baliseFigure.id = `article-${article.id}` //ajouté pour la suppression projet
    //baliseFigure.innerText = ``; //ça peut fonctionner mais remplacer innerText par innerHTML puis mettre directement dedans balise img et figcaption
    
        const baliseImage = document.createElement("img");//le ALT dans <img?> on peut l'ajouter avec createElement
        baliseImage.src = article.imageUrl;
        const baliseFigcaption = document.createElement("figcaption");
        baliseFigcaption.innerText = article.title; //à la place de innerText, textContent ? oui c la meme chose mais + trop utilisé

        //nope pas utile const sectionFigure = document.querySelector(".gallery", "figure"); // pq je ne peux pas mettre baliseFigure a la place de"figure" ?. querySelector selectionne le 1er gallery figure qu'il y a
        baliseFigure.appendChild(baliseImage); // utiliser baliseFigure directement
        baliseFigure.appendChild(baliseFigcaption);
    // on ajoute l'enfant <figure> à <.gallery> Ronan le mets en bas pour de la micro optimisation
        sectionGallery.appendChild(baliseFigure); 
    }
}
//permet le 1er affichage des figures
genererLesArticles(works); //

afficherProjetsDansModal(works);
function afficherProjetsDansModal (projetsArticles) {
    const galleryModal = document.querySelector(".modal-container .modeAdminGaleriePhoto");
    galleryModal.innerHTML = "";
    for (let i = 0; i < projetsArticles.length; i++) {
        const article = projetsArticles[i];

        const div = document.createElement("div");
        div.classList.add("div-modeAdminGaleriePhoto");
        div.id = `article-${article.id}`;
        galleryModal.append(div);
        
        const span = document.createElement("span");
        div.append(span);
        
        const poubelle = document.createElement("i");
        poubelle.classList.add("fa-solid", "fa-trash-can");
        span.append(poubelle);
        poubelle.id = article.id;
        
        const baliseImage = document.createElement("img");
        baliseImage.src = article.imageUrl;
        div.append(baliseImage);

        poubelle.addEventListener('click', () => supprimerProjetsDansModal(article.id, div));
    }
}
async function supprimerProjetsDansModal(Id, div) {
    const APIUrl = `http://localhost:5678/api/works/${Id}`;
    const token = recupToken

    fetch (APIUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Ajoute le token dans l'en-tête
         }
    })
    .then(reponse => {
        if (reponse.ok) {
            div.remove();
            //Approche 1
            document.querySelector(`#article-${Id}`).remove();

            //Approche 2
            //works = works.filter(function(projet) {
            //    return projet.id !== Id;
            //});
        } else {
            throw new Error('Echec à la suppression de l image');
        }
    })
    .catch(error => {
        console.error('Une erreur lors de la suppression :', error);
    });
}

const reponseDesCategories = await fetch("http://localhost:5678/api/categories");
const catego = await reponseDesCategories.json();

const sectionFilterChoix = document.querySelector(".filterchoix")
//boucle pour créer les nom des boutons via dossier categorie
for (let i = 0; i < catego.length; i++) {

    const filtres = catego[i];
    
    const boutonCatFiltre = document.createElement("button"); 
    boutonCatFiltre.innerText = filtres.name;
    boutonCatFiltre.className = filtres.name;//pour créer  des class aux boutons en HTML

    boutonCatFiltre.addEventListener("click", function () {
        const projetsFiltres = works.filter(function (miniFonctionNomInventee) {
            //filtre moi dans tout les images quand catId du works est = à catego[i]id du json categories
         return miniFonctionNomInventee.categoryId === filtres.id; //je ne devrai pas préciser que c'est pour [i] ?
        })
        //effacement de l'écran et régénération des articles filtrés
        genererLesArticles(projetsFiltres);
    });
    sectionFilterChoix.appendChild(boutonCatFiltre);
}

//création du bouton Tous pour le filtre
const btnTous = document.querySelector(".btntous");
btnTous.addEventListener("click", function() {
    genererLesArticles(works);
});

//en mode admin
if (recupToken) {
    console.log("On est dans la boucle du if recupToken");

    document.querySelector(".black_mode_edition").style.display = '';
    document.querySelector(".modifier_projets").style.display = "flex";
    document.querySelector(".loginOut").innerText = "logout";
    document.querySelector(".filterchoix").style.display = 'none';
    /* display none c ok la sécu ? car on peu repcup avec inspecter : oui mais pas de pb sans le login */

    // pour se logout
    const liLogin = document.querySelector(".loginOut")
    if  (liLogin.addEventListener("click", (eventSurLogout) => {
        eventSurLogout.preventDefault()
        window.localStorage.removeItem("cleToken")
        console.log("click sur logout");
        location.reload();
    }));
}