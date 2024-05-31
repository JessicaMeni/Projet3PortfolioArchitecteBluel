const inputBoutonModal = document.querySelector(".input-bouton-modal")
inputBoutonModal.addEventListener("click", function (e) {
    e.preventDefault()
    const galleryModal = document.querySelector(".modal-container .modal"); // pourquoi avoir choisi ces 2?
    //galleryModal.innerHTML = "";
    document.querySelector(".modal-un").style.display = 'none'; //cacher modal 1

    const modalContainer = document.querySelector(".modal-container");
    //créer la modal
    const modalDeux = document.createElement("div");
    modalDeux.classList.add("modal", "modal-deux");
    modalContainer.append(modalDeux); //possible de mettre directement .modal-container sans devoir créer une const modalContainer pour ça ?
    
    //créer le bouton retour et son icone
    const boutonFlecheRetour = document.createElement("button")
    boutonFlecheRetour.classList.add("btn-retour-modal")
    modalDeux.append(boutonFlecheRetour);
    
    const flecheRetour = document.createElement("i");
    flecheRetour.classList.add("fa-solid", "fa-arrow-left");
    boutonFlecheRetour.append(flecheRetour);

    //créer le bouton de fermeture et son icône
    const jsCloseModal = document.createElement("button")
    jsCloseModal.classList.add("js-close-modal", "modal-trigger")
    modalDeux.append(jsCloseModal);
    
    const faXmark = document.createElement("i");
    faXmark.classList.add("fa-solid", "fa-xmark");
    jsCloseModal.append(faXmark);
    
    const h3AjoutPhoto = document.createElement("h3")
    h3AjoutPhoto.textContent += "Ajout Photo";
    modalDeux.append(h3AjoutPhoto);

    const divContenu = document.createElement("div");
    divContenu.classList.add("div-contenu");
    modalDeux.append(divContenu);

    const divPhoto = document.createElement("div");
    divPhoto.classList.add("div-ajouter-photo");
    divContenu.append(divPhoto);

    const iconePhoto = document.createElement("i");
    iconePhoto.classList.add("fa-regular", "fa-image");
    divPhoto.append(iconePhoto);

    const boutonAjouterPhoto = document.createElement("input")
    boutonAjouterPhoto.type="photo";
    boutonAjouterPhoto.value="+ Ajouter Photo"
    divPhoto.append(boutonAjouterPhoto);

    const pPhoto = document.createElement("p");
    pPhoto.textContent += "jpg, png : 4mo max"
    divPhoto.append(pPhoto);
});

