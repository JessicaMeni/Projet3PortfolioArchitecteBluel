//console.log("Envoi de la requête avec les données suivantes", identifiants);


export function ajoutListenerSeConnecter() { //pq fetch arrive après ...
    //recup une ref au formulaire de connex a laide de queryS
    const formulaireLog = document.querySelector(".formulaire-de-connection");
    formulaireLog.addEventListener("submit", function (event) {
    event.preventDefault(); //empecher comportement par def du nav, quel comportement? je c pas
    // Creation de l'obj qui servira de charge utile  pour ajouter les infos dans api
    const chargeUtilePageConnection = {
        //pour recupérer les infos envoyés on utilise la f querySelector
        email: event.target.querySelector("[name=email]").value,
        mdp: event.target.querySelector("[name=mdp]").value,
    };
    //on converti la charge utile en json avec la f JSON.stringify
    const chargeUtile = JSON.stringify(chargeUtilePageConnection);
    // appel de la f fetch
    /*const reponsetrois = await*/ fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: chargeUtile
});
    console.log(ajoutListenerSeConnecter, chargeUtilePageConnection);
    });
}
 