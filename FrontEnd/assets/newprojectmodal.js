
const inputBoutonModal = document.querySelector(".input-bouton-modal")
if (inputBoutonModal.addEventListener("click", function (e) {
    e.preventDefault()
    const galleryModal = document.querySelector(".modal-container .modal");
    //galleryModal.innerHTML = "";
    
    const boutonFlecheRetour = document.createElement("button")
    boutonFlecheRetour.classList.add("btn-retour-modal")
    galleryModal.append(boutonFlecheRetour);
    
    const flecheRetour = document.createElement("i");
    flecheRetour.classList.add("fa-solid", "fa-arrow-left");
    boutonFlecheRetour.append(flecheRetour);
})
);
    