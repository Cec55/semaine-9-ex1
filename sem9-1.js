var $liste = document.getElementById("liste");
var $prenom = document.getElementById("prenom");
var $nom = document.getElementById("nom");
var $numero = document.getElementById("numero");
var $ajouter = document.getElementById("ajouter");
var $recherche = document.getElementById("recherche");
var $rechercher = document.getElementById("rechercher");
var $resultats = document.getElementById("resultats");

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
    var elements = "";
    for (var i = 0; i < contacts.length; i++) {
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
    var recherche = $recherche.value;
    var elements = "";
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $resultats.innerHTML = elements;
}

$ajouter.onclick = ajouter;
$rechercher.onclick = rechercher;
afficherListe();