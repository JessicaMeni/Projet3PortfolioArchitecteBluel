const reponseDesCategories = await fetch("http://localhost:5678/api/categories");
const catego = await reponseDesCategories.json();

        
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
    const jsCloseModal = document.createElement("button");
    jsCloseModal.classList.add("js-close-modal", "modal-trigger");
    jsCloseModal.ariaLabel = "close modal";
    modalDeux.append(jsCloseModal);
    
    const faXmark = document.createElement("i");
    faXmark.classList.add("fa-solid", "fa-xmark");
    jsCloseModal.append(faXmark);
    
    const h3AjoutPhoto = document.createElement("h3");
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
    labelAjouterPhoto.classList.add("label-ajouter-photo");
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
    form.action = "http://localhost:5678/api/users/works";
    divContenu.append(form);

        const formTitre = document.createElement("label");
        formTitre.htmlFor = "title";
        formTitre.innerText = 'Titre';
        form.append(formTitre);
        
        const formTitreInput = document.createElement("input");
        formTitreInput.setAttribute("type", "text");
        formTitreInput.name = 'title';
        formTitreInput.id = 'title';
        form.append(formTitreInput);

        const formCatego = document.createElement("label");
        formCatego.htmlFor = "categorie";
        formCatego.innerText = 'Catégorie';
        form.append(formCatego);
    
        const formCategoSelect = document.createElement("select");
        formCategoSelect.name = 'categorie';
        formCategoSelect.id = 'categorie';
        form.append(formCategoSelect);
        
        const optionVide = document.createElement("option");
        optionVide.value = "";
        optionVide.textContent = "";
        formCategoSelect.append(optionVide);

        //Chatgpt me propose ça : 
        for (let i = 0; i < catego.length; i++) {
            const options = document.createElement("option");
            const filtres = catego[i];
            options.value = filtres.id;
            options.textContent = filtres.name;
            formCategoSelect.append(options);
        }

        const traitGris = document.createElement("span");
        form.append(traitGris);

        //un input submit pour le bouton valider avec pour value "valider"
        const formSubmit = document.createElement("input");
        formSubmit.classList.add("submit-valider");
        formSubmit.setAttribute("type", "submit");
        formSubmit.setAttribute("value", "Valider");
        form.append(formSubmit);
});

/* export function sauvegarderNouveauWork () {
    const submit = document.querySelector(".submit-valider");
    submit.addEventListener("submit", function (event) {
    const sauvgNouveauWork = {
        //imageURL 
        title : event.target.querySelector("[name=title]").value,
        category : event.target.querySelector("[name=categorie]").id,
        
    };
    const chargeUtile = JSON.stringify(sauvgNouveauWork)
    
    fetch(`http://localhost:5678/api/works/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    }
    )
    })
} */

//Mon deuxieme bouton fermeture ne fonctionne pas, suppression du projet en direct ne fonctionne pas, ajout de la photo sur la div = inexistant, valider en gris, pas encore