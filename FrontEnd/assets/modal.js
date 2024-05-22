let modal = null /*sauvg variable qui sera null par default */


const openModal = function (e) { /* crée pour le addEvent en dessous */
    e.preventDefault()
    modal = document.querySelector("#modal1") /* sur le lien je veux recup l'attribut href */
    document.getElementById("modal1").style.display = 'block';
    modal.classList.add("afficher");
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');

   //Façon 1
    // modal.addEventListener("click", clickFondModal) /*lorsque je clic sur la boite, il va falloir la fermer, je crée la f closeMod*/

    //Façon 2
    modal.addEventListener("click", leCloseModal)
    modal.querySelector(".js-modal-stop-la-propagation").addEventListener("click", function(e) {
        e.stopPropagation();
    });

    modal.querySelector(".js-close-modal").addEventListener("click", leCloseModal)
}

function clickFondModal(e) {
    if (e.target.id === "modal1") {
        leCloseModal(e);
    }
}

const leCloseModal = function (e) { /*qui prendra en parametre e(evenement)*/
    if (modal === null) return /*si le modal est deja fermé, ne rien faire*/
    e.preventDefault()
    modal.classList.remove("afficher");
    modal.removeAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    document.getElementById("modal1").style.display = 'none';

    modal.removeEventListener("click", leCloseModal)
    modal.querySelector(".js-close-modal").removeEventListener("click", leCloseModal)
    modal = null
}

document.querySelectorAll('.js-modal').forEach(a => { /*pour selec tout les class js-modal que je pourrais créer*/
    a.addEventListener('click', openModal) /*au click, il effec la f openM */
})

/******** Version 2 ********/
const modalContainer = document.querySelector('.modal-container'); //on prend notre container
const modalTriggers = document.querySelectorAll(".modal-trigger"); //on prend Tout nos class modal-trigger (sur les boutons)

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal)) //on aj un ad event click sur tt les trigger


function toggleModal(){ //dés qu'('on click dessus ça r'envoie togglemodal
    modalContainer.classList.toggle("active") //et a chaque fois ça rajoute la class=active si elle n'y est pas, sinon elle l'enlève
}


