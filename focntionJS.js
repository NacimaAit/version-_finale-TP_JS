//Calcul du forfait Adulte
var coutAdult;
var coutEnfant;
var coutChambre;
var coutSemaine;
var coutEtoile;
var NbEtoile;
var coutExtra = 0;

function calculForfaitAdulte() {
  coutAdult = document.getElementById("adulte").value;
}

//calcul du forfait enfant
function CoutBaseEnfant() {
  coutEnfant = document.getElementById("enfant").value;
}

function NombreChambre() {
  coutChambre = document.getElementById("chambre").value;
}

function semaine() {
  coutSemaine = document.getElementById("duree").value;
}

function Etoile() {
  if (document.getElementById("etoile3").checked) {
    NbEtoile = document.getElementById("etoile3").value;
    coutEtoile = 100;
  } else if (document.getElementById("etoile4").checked) {
    NbEtoile = document.getElementById("etoile4").value;
    coutEtoile = 100;
  } else if (document.getElementById("etoile5").checked) {
    NbEtoile = document.getElementById("etoile5").value;
    coutEtoile = 100;
  }
}

function check() {
  if (document.getElementById("LV").checked) {
    coutExtra = coutExtra + 100;
  }
  if (document.getElementById("PC").checked) {
    coutExtra = coutExtra + 100;
  }
  if (document.getElementById("TG").checked) {
    coutExtra = coutExtra + 100;
  }
  if (document.getElementById("C").checked) {
    coutExtra = coutExtra + 100;
  }
}
/*
function total() {
  //alert("bonjour");
  check();

  document.getElementById("CT").value = coutExtra;
}*/
/*
function Afficher() {
  calculForfaitAdulte();
  CoutBaseEnfant();
  NombreChambre();
  semaine();
  Etoile();
  check();

  document.getElementById("CT").value =
    coutAdult * 100 +
    coutEnfant * 100 +
    coutChambre * 100 +
    coutSemaine * 100 +
    coutEtoile +
    coutExtra;
}*/

function ValidateEmail(inputText = document.getElementById("email")) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Adresse Mail Valide!");
    document.form1.text1.focus();
    return true;
  } else {
    alert("Veuillez entrer un courriel valide!");
    document.form1.text1.focus();
    return false;
  }
}
function total() {
  calculForfaitAdulte();
  CoutBaseEnfant();
  NombreChambre();
  semaine();
  Etoile();
  check();

  document.getElementById("CT").value =
    coutAdult * 100 +
    coutEnfant * 100 +
    coutChambre * 100 +
    coutSemaine * 100 +
    coutEtoile +
    coutExtra;
}
