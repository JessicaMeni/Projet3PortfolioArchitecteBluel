function ajoutListenerSeConnecter() { //pq fetch arrive après. le { pas accepté, j'ai du mettre une function devant
    //recup une ref au formulaire de connex a laide de queryS
    const formulaireLog = document.querySelector(".formulaire-de-connection");
    formulaireLog.addEventListener("submit", function (event) { //est il lié au bouton submit ? oui
    event.preventDefault(); //empecher comportement par def du nav, quel comportement? je c pas
    // Creation de l'obj qui servira de charge utile  pour ajouter les infos dans api
    
    const chargeUtilePageConnection = {
        //pour recupérer les infos envoyés on utilise la f querySelector
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=mdp]").value, // je dois plutot utiliser "password" pour avoir un lien avec le Swagger? oui
    };
    //on converti la charge utile en json avec la f JSON.stringify
    const chargeUtile = JSON.stringify(chargeUtilePageConnection);
    // appel de la f fetch
  
    fetch("http://localhost:5678/api/users/login", { // enlever await pour que ce soit une promesse et ecrire then pour recup
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: chargeUtile

}).then(async function(reponse) {
    console.log("STATUT", reponse.status);
    if (reponse.status === 200) {
        const contenu = await reponse.json();
        //enregistrer la rep de L'API grace a SetItem
        window.localStorage.setItem("cleToken", token);
        //window.location.href="../index.html"; // pour envoyer sur page d'acc
    } else { 
        alert("L'email et/ou le mot de passe est faux")
    }
    })
});
}
ajoutListenerSeConnecter(); //pq la rappeler ?

//getItem permet de lire une valeur depuis localeStorage, et recup des clésTok


const cleToken = window.localStorage.getItem("cleToken");
if (cleToken === null){
    await fetch ("http://localhost:5678/api/users/login");
    cleToken = await reponse.json();
    const valeurCle = JSON.stringify(cleToken);
    window.localStorage.setItem("cleToken", token);
}else{
    cleToken = JSON.parse(cleToken);
}
console.log("la clé", cleToken);