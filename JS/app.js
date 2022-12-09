const Personne = function (name, firstName, age, job, hobbies) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.job = job;
    this.hobbies = hobbies;
    // methode avec toute les proprietes
    this.anyPropertyF = function () {
        return "La gagnante est" +" "+ this.firstName +" "+ this.name +","+ " elle a " + this.age + " et elle est " +
            this.job +"." + " Elle adore jouer au " + this.hobbies + "." ;
    }
    this.anyPropertyM = function () {
        return "Le gagnant est" +" "+ this.firstName +" "+ this.name +","+ " il a " + this.age + " et il est " +
            this.job +"." + " Il adore jouer au " + this.hobbies + "." ;
    }
}

// creation de 2 personnes
let Elodie = new Personne('Leclercq', 'Elodie', '16', 'actrice', 'scrable');
    console.log(Elodie.anyPropertyF());
let Julien = new Personne('pioupiou', 'Julien', '35', 'policer', 'echecs');
    console.log(Julien.anyPropertyM());

// modification propriete "age" de l'objet Personne
let result = document.getElementById("result");
    Elodie.age = 30;
    result.innerHTML += "Elodie a grandi, maintenant elle a " + Elodie.age + " ans";





