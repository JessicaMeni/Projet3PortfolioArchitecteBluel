const modalContainer = document.querySelector('.modal-container'); //on prend notre container
const modalTriggers = document.querySelectorAll(".modal-trigger"); //on prend Tout nos class modal-trigger (sur les boutons)

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal)) //on aj un ad event list pour ouvrir/fermer la modal


function toggleModal(){ //f pour basculer la classe active sur le conteneur de la modal pour l'afficher ou la cacher.
    modalContainer.classList.toggle("active") //et a chaque fois ça rajoute la class=active si elle n'y est pas, sinon elle l'enlève
};

// Sélectionne le bouton pour fermer la modal
const closeModalButton = document.querySelector(".js-close-modal");
closeModalButton.addEventListener('click', toggleModal);


//il faudrai verifier si c'est la 1ere fois qu'on l'ouvre. pas besoin de stop propagation. supprimer la div qui contient le bouton
//nouvelle fonction pour generer les img,genelerlesarticles(login; ajouterProjet) 