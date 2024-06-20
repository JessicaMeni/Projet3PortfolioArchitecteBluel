const reponseDesCategories = await fetch("http://localhost:5678/api/categories");
const catego = await reponseDesCategories.json();


const inputBoutonModal = document.querySelector(".input-bouton-modal")

inputBoutonModal.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".modal-un").style.display = 'none'; //cache modal 1

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
        if (document.querySelector(".modal-un").style.display === 'none' || document.querySelector(".modal-un").style.display === ''){
            document.querySelector(".modal-un").style.display = 'flex';
        }
           // modalDeux.style.display = 'none'; ancienne version, remove est mieux dans ce cas
            modalDeux.remove();
    });
    
    const flecheRetour = document.createElement("i");
    flecheRetour.classList.add("fa-solid", "fa-arrow-left");
    boutonFlecheRetour.append(flecheRetour);

    //créer le bouton de fermeture et son icône
    const jsCloseModal = document.createElement("button");
    jsCloseModal.classList.add("js-close-modal", "modal-trigger");
    jsCloseModal.ariaLabel = "close modal";
    modalDeux.append(jsCloseModal);
    jsCloseModal.addEventListener("click", () => { // pour fermer la modal de façon ... compliqué
                modalDeux.remove();
                modalContainer.classList.remove("active");
                modalContainer.style.display === 'none';
                document.querySelector(".modal-un").style.display = 'flex';
    });


    const faXmark = document.createElement("i");
    faXmark.classList.add("fa-solid", "fa-xmark");
    jsCloseModal.append(faXmark);
    
    const h3AjoutPhoto = document.createElement("h3");
    h3AjoutPhoto.textContent += "Ajout Photo";
    modalDeux.append(h3AjoutPhoto);

    const divContenu = document.createElement("div");
    divContenu.classList.add("div-contenu");
    modalDeux.append(divContenu);

    const form = document.createElement("form");
    form.id = "formAjoutWork";
    form.classList.add("formLogIn");
    form.name = 'Ajout Photo'; // retirer méthode et action car ca ne se fait plus trop
    divContenu.append(form);

        const divBleue = document.createElement("div");
        divBleue.classList.add("div-bleue");
        form.append(divBleue);

        const divContenuDeDivBleue = document.createElement("div");
        divContenuDeDivBleue.classList.add("div-ajouter-photo")
        divBleue.append(divContenuDeDivBleue);

        const iconePhoto = document.createElement("i");
        iconePhoto.classList.add("fa-regular", "fa-image");
        divContenuDeDivBleue.append(iconePhoto);

        const labelAjouterPhoto = document.createElement("label");
        labelAjouterPhoto.classList.add("label-ajouter-photo");
        labelAjouterPhoto.htmlFor = "inputFile";
        labelAjouterPhoto.innerText = '+ Ajouter Photo';
        divContenuDeDivBleue.append(labelAjouterPhoto);

            const inputAjouterPhoto = document.createElement("input");
            inputAjouterPhoto.setAttribute("type", "file");
            inputAjouterPhoto.id = 'inputFile'; //ajouter un id et un for au label avec le meme nom
            inputAjouterPhoto.setAttribute("accept", "image/*");
            //inputAjouterPhoto.innerHTML= '<input type="file" accept="image/*" name="label-ajouter-photo" value="+ Ajouter Photo" />';
            labelAjouterPhoto.append(inputAjouterPhoto);
        
        // pour récupérer les données de l'image
        inputAjouterPhoto.addEventListener('change', function () {
            const inputFile = document.getElementById("inputFile"); //je viens de l'aj
            const image = inputFile.files[0];  //récupère le premier fichier sélectionné dans le form 
            
            if (image) {
                const formatImage = ["image/jpeg", "image/png"];
                if (!formatImage.includes(image.type)) {
                    alert("Le fichier sélectionné n'est pas au bon format");
                    return;
                }
                const tailleMaxMo = 4194304;
                if (image.size > tailleMaxMo) {
                    alert("Le fichier dépasse les 4mo autorisés")
                    return;
                }  
                const filereader = new FileReader();
                filereader.addEventListener("load", function(resultat) {
                    //console.log("Résultat :", resultat.target.result); contient les données du fichier sous forme de data URL
                    iconePhoto.style.display = 'none';
                    pPhoto.style.display = 'none';
                    labelAjouterPhoto.style.display = 'none';
                    
                    //divContenuDeDivBleue.innerHTML = '';  pas ok, car ça supprime label et input ? pas de pb pcq label est crée avec du JS
                    let img = document.createElement("img");
                    img.id = 'image-id';
                    img.src = resultat.target.result; //assigne la source de l'image à l'URL de données obtenu par FileReader

                    divBleue.style.padding = '0';
                    divContenuDeDivBleue.append(img); //ajoute l'élément image au corps du document, ce qui affiche l'image dans la page web
                });
            filereader.readAsDataURL(image); //démarre la lecture du fichier image en tant qu'URL de données
            //En résumé, ce code permet à un utilisateur de sélectionner un fichier image, puis de lire et d'afficher cette image dans la page web en utilisant un objet FileReader.
            } else {
                alert("Une erreur est apparu");
            }
            boutonValiderDevientVert();
        });
        
        const pPhoto = document.createElement("p");
        pPhoto.textContent += "jpg, png : 4mo max";
        divContenuDeDivBleue.append(pPhoto);

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
        form.addEventListener("submit", sauvegarderNouveauWork);
        //ou formSubmit.addEventListener("click", sauvegarderNouveauWork);

        formTitreInput.addEventListener("change", boutonValiderDevientVert);
        formCategoSelect.addEventListener("change", boutonValiderDevientVert);

    function boutonValiderDevientVert() {
        const formSubmit = document.querySelector(".submit-valider");
        //console.log("formSubmit", formSubmit);
        if (inputAjouterPhoto.files.length > 0 && formTitreInput.value !== '' && formCategoSelect.value !== '') {
            console.log("Tous les labels ont du contenu. Réalisation de l'action.");
            formSubmit.style.backgroundColor = "#1D6154"
            formSubmit.style.pointerEvents = "all";
        } else {
            formSubmit.style.backgroundColor = "#A7A7A7";
            formSubmit.style.pointerEvents = "none";
        }
    };
});

function sauvegarderNouveauWork (event) {
    event.preventDefault();
    const form = document.querySelector("#formAjoutWork"); // pq # ?
    const token = window.localStorage.getItem("cleToken");
        
        const formData = new FormData();
        formData.append("title", event.target.querySelector("[name=title]").value); //j'ai ajouté event a cause de l'addEventListener
        formData.append("image", event.target.querySelector("[type=file]").files[0]);
        formData.append("category", event.target.querySelector("[name=categorie]").value);

        fetch( 'http://localhost:5678/api/works/', 
            {
                method: "POST",
                headers: {  
                    // "Content-Type": "multipart/form-data", // vu sur Swagger,c correct ?
                        "Authorization": `Bearer ${token}`  
                },
                body: formData

            }).then(reponse => {
                console.log(reponse.status);
                if (!reponse.ok) {
                    throw new Error("Demande erronée ou non autorisée. Status: ${reponse.status}, Message: ${errorText}")
                }
                const contenu = reponse.json();
                return contenu;
            }) .then (contenu => {
                console.log('Response data:', contenu);
                //fermer la modal
                const modalDeux = document.querySelector(".modal-deux");
                modalDeux.remove();
                const modalContainer = document.querySelector('.modal-container')
                modalContainer.classList.remove("active");
                modalContainer.style.display === 'none';
                document.querySelector(".modal-un").style.display = 'flex';
                //création de balises dans gallery pour y mettre les nouveaux works
                const baliseFigure = document.createElement("figure");
                baliseFigure.id = `article-${contenu.id}`;
                const baliseImage = document.createElement("img");
                baliseImage.src = contenu.imageUrl;
                const baliseFigcaption = document.createElement("figcaption");
                baliseFigcaption.textContent = contenu.title;
                baliseFigure.appendChild(baliseImage);
                baliseFigure.appendChild(baliseFigcaption);
                const sectionGallery = document.querySelector(".gallery");
                sectionGallery.appendChild(baliseFigure);
                // pour la modal 1
                const galleryModal = document.querySelector(".modal-container .modeAdminGaleriePhoto");
                const div = document.createElement("div");
                div.classList.add("div-modeAdminGaleriePhoto");
                div.id = `article-${contenu.id}`;
                galleryModal.append(div);
                        
                const span = document.createElement("span");
                div.append(span);
                        
                const poubelle = document.createElement("i");
                poubelle.classList.add("fa-solid", "fa-trash-can");
                span.append(poubelle);
                poubelle.id = contenu.id;
                        
                const baliseImageModal = document.createElement("img");
                baliseImageModal.src = contenu.imageUrl;
                div.append(baliseImageModal);
            }).catch (error => {
              console.error("Erreur:", error);  
            })
};