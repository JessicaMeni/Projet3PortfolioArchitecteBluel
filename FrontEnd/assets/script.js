/* const premierProjet = projets[0]; console.log("EN TITRE PROJETS", login); console.log("EN TITRE MON PREMIER PROJET", premierProjet.title); */
const recupToken = window.localStorage.getItem("cleToken");
document.querySelector(".black_mode_edition").style.display = 'none';
document.querySelector(".modifier_projets").style.display = 'none';

const reponse = await fetch("http://localhost:5678/api/works");
const login = await reponse.json();

const sectionGallery = document.querySelector(".gallery"); //peut être mis dehors pour ne pas la créer à chaque fois
//f qui génère toute la page
function genererLesArticles(projetsArticles) { //je peux ecrire ce que je veux dans () ? Oui
    
    sectionGallery.innerHTML = "";//pour effacer la gallery pour 
    for (let i = 0; i < projetsArticles.length; i++) {
        
        const article = projetsArticles[i]; 

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
genererLesArticles(login); // j'ai un uncaught TypeError is null,

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
        const projetsFiltres = login.filter(function (miniFonctionNomInventee) {
            //filtre moi dans tout les images quand catId du works est = à catego[i]id du json categories
         return miniFonctionNomInventee.categoryId === filtres.id; //je ne devrais pas précisesr que c'est pour [i] ?
        })
        //effacement de l'écran et régénération des articles filtrés
        genererLesArticles(projetsFiltres);
    });
    sectionFilterChoix.appendChild(boutonCatFiltre);
}
const btnTous = document.querySelector(".btntous");
btnTous.addEventListener("click", function() {
    genererLesArticles(login);
});

/* const hide_black_mode_edition = document.querySelector(".black_mode_edition");
document.querySelector(".black_mode_edition").style.diplay = 'none';
document.querySelector(".black_mode_edition").style.visibility = "hidden"; tests*/ 

if (recupToken) {
    console.log("On est dans la boucle du if recupToken");

    document.querySelector(".black_mode_edition").style.display = '';
    document.querySelector(".modifier_projets").style.display = '';
    document.querySelector(".loginOut").innerText = "logout";
    document.querySelector(".filterchoix").style.display = 'none';
    /* display none c ok la sécu ? car on peu repcup avec inspecter */

    // pour se logout
    const liLogin = document.querySelector(".loginOut")
    if  (liLogin.addEventListener("click", (eventSurLogout) => {
        eventSurLogout.preventDefault()
        window.localStorage.removeItem("cleToken")
        console.log("click sur logout");
        location.reload();
    }));

//Ajout des img dans modal
const galleryModeAdmin = document.querySelector(".modal-container .modeAdminGaleriePhoto");
async function genererArticlesModeAdmin() {
    galleryModeAdmin.innerHTML = ""
    const img = await genererLesArticles()
    genererLesArticles.forEach(images => {
        const baliseImg = document.createElement("img")
        const span = document.createElement("span")
        const poubelle = document.createElement("i")
        poubelle.classList.add("fa-solid", "fa-trash-can")
        poubelle.id = images.id
    });
}
genererArticlesModeAdmin(login)
    
}












/* document.getElementsByClassName(loginOut).innerText = "LogOut"; 
    element.innerHTML = "Logout";  pas fonctionné 
    document.querySelector('BODY > LI .loginOut').innerHTML = "LogOut";
    document.querySelector(".navigation" .href).innerHTML = "https://www.google.com"; ils n'ont pas fonctionnés, pq ?*/