let modal = null /*sauvg variable qui sera null par default */


const openModal = function (e) { /* crée pour le addEvent en dessous */
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href')) /* sur le lien je veux recup l'attribut href */
    target.style.display = null /* afficher la boite modale, permet de retirer le display none */
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    e.showModal()

    modal = target /*sauvg dans cette var la cible*/
    modal.addEventListener("click", leCloseModal) /*lorsque je clic sur la boite, il va falloir la fermer, je crée la f closeMod*/
    modal.querySelector(".js-close-modal").addEventListener("click", leCloseModal)
    modal.querySelector(".js-modal-stop-la-propagation").addEventListener("click", empechePropagationdeEVersLesParents)
}

const leCloseModal = function (e) { /*qui prendra en parametre e(evenement)*/
    if (modal === null) return /*si le modal est deja fermé, ne rien faire*/
    e.preventDefault()
    modal.style.display = "none"
    modal.removeAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')

    modal.removeEventListener("click", leCloseModal)
    modal.querySelector(".js-close-modal").removeEventListener("click", leCloseModal)
    modal.querySelector(".js-modal-stop-la-propagation").removeEventListener("click", empechePropagationdeEVersLesParents)
    modal = null
}

const empechePropagationdeEVersLesParents = function (e) {
    e.empechePropagationdeEVersLesParents()
}
document.querySelectorAll('.js-modal').forEach(a => { /*pour selec tout les class js-modal que je pourrais créer*/
    a.addEventListener('click', openModal) /*au click, il effec la f openM */
})