$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$resultats = document.getElementById("resultats");

var contacts = [{
    prenom: "Jesse",
    nom: "James",
    numero: "0123456789"
}, {
    prenom: "Lucky",
    nom: "Luke",
    numero: "0234567891"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}

function rechercher() {
    recherche = $recherche.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $resultats.innerHTML = elements;
}

$ajouter.onclick = ajouter;
$rechercher.onclick = rechercher;
afficherListe();