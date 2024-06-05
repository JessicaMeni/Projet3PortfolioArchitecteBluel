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
    //fonction retour sur modal-un
    boutonFlecheRetour.addEventListener("click", () => {
        if (document.querySelector(".modal-un").style.display === 'none' || document.querySelector(".modal-un").style.display === '')
            document.querySelector(".modal-un").style.display = 'flex';
            modalDeux.style.display = 'none';
    });
    
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

    const labelAjouterPhoto = document.createElement("label");
    labelAjouterPhoto.classList.add("label-ajouter-photo")
    labelAjouterPhoto.innerText = '+ Ajouter Photo';
    divPhoto.append(labelAjouterPhoto);

    const inputAjouterPhoto = document.createElement("input");
    inputAjouterPhoto.setAttribute("type", "file");
    inputAjouterPhoto.setAttribute("accept", "image/*");
    /*inputAjouterPhoto.setAttribute( {
        'type' : 'file',
        'accept' : 'image',
        'value' : '+ Ajouter Photo'
    });
     Object.assign(inputAjouterPhoto, {
        type: "file",
    }) */
    //boutonAjouterPhoto.type="file"; quand je mets file tout disparait
    //inputAjouterPhoto.value="+ Ajouter Photo"
    //inputAjouterPhoto.innerHTML= '<input type="file" accept="image/*" name="label-ajouter-photo" value="+ Ajouter Photo" />';
    labelAjouterPhoto.append(inputAjouterPhoto);
    

    const pPhoto = document.createElement("p");
    pPhoto.textContent += "jpg, png : 4mo max";
    divPhoto.append(pPhoto);

    const form = document.createElement("form");
    form.classList.add("formLogIn");
    form.name = 'Ajout Photo';
    form.method ='POST';
    //form.action = "";
    divContenu.append(form);

        const formTitre = document.createElement("label");
        formTitre.htmlFor = "title";
        formTitre.innerText = 'Titre';
        form.append(formTitre);
        
        const formTitreInput = document.createElement("input");
        formTitreInput.setAttribute("type", "text");
        formTitreInput.id = 'title';
        form.append(formTitreInput);

        const formCatego = document.createElement("label");
        formCatego.htmlFor = "categorie";
        formCatego.innerText = 'Catégorie';
        form.append(formCatego);
    
        const formCategoSelect = document.createElement("select");
        formCategoSelect.name = 'category';
        formCategoSelect.id = 'categorie';
        form.append(formCategoSelect);
        

        const traitGris = document.createElement("span");
        form.append(traitGris);

        //un input de type submit pour le bouton valider avec pour value "valider"
    
        const formSubmit = document.createElement("input");
        formSubmit.classList.add("submit-valider");
        formSubmit.setAttribute("type", "submit");
        formSubmit.setAttribute("value", "Valider");
        form.append(formSubmit);
});

