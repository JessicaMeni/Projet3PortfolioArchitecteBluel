//console.log("Envoi de la requête avec les données suivantes", identifiants);

export function ajoutListenerSeConnecter() { //pq fetch arrive après ...
    //recup une ref au formulaire de connex a laide de queryS
    const formulaireLog = document.querySelector(".formulaire-de-connection");
    formulaireLog.addEventListener("submit", function (event) { //est il lié au bouton submit ?
    event.preventDefault(); //empecher comportement par def du nav, quel comportement? je c pas
    // Creation de l'obj qui servira de charge utile  pour ajouter les infos dans api
    const chargeUtilePageConnection = {
        //pour recupérer les infos envoyés on utilise la f querySelector
        email: event.target.querySelector("[name=email]").value,
        mdp: event.target.querySelector("[name=mdp]").value, // je dois plutot utiliser "password" pour avoir un lien avec le Swagger?
    };
    //on converti la charge utile en json avec la f JSON.stringify
    const chargeUtile = JSON.stringify(chargeUtilePageConnection);
    // appel de la f fetch
    /*const reponsebidule = await*/ fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: chargeUtile
});
console.log(ajoutListenerSeConnecter, chargeUtilePageConnection);
    });
}

const reponsetrois = await fetch("http://localhost:5678/api/users/login");
const login = await reponsetrois.json();

//dans le html, recup le email et je c pas quoi qui fait user id