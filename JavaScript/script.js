$(function () {

    /* Déclaration des variables */
    document.getElementById("imgPendu").innerHTML = "<img src=imagesPENDU/PenduBase.png width=300px height=400px>";
    let mot = "instantanement"
    let count = mot.length
    let countWin = 0
    let countLose = 0
    mot = mot.toUpperCase()
    let motSplit = mot.split('')
    let motUnderscore = []
    let game = true
    toucheClavier = document.querySelectorAll(".lettre")
    console.log(count)
    console.log(countLose)
    console.log(countWin)

    /* Fonction pour remplacer les lettres par des underscore */
    function replace(val1, val2) {
        for (i = 0; i < val1.length; i++) {
            val2.push("_")
        }
        return console.log(val2)
    }
    console.log(replace(mot, motUnderscore))

    /* Afficher des underscore à la place des lettres dans l'id #informationPendu */
    document.getElementById("motAtrouver").innerHTML = motUnderscore.join(" ")

    /* Affichage d'une lettre dans le mot à trouver au moment de l'appui d'une touche sur le clavier visuel */
    $(".lettre").one("click", function () {
        if (game === true) {
            console.log(this.innerHTML)
            let touche = this.innerHTML
            let error = true
            this.style.opacity = 0.3
            this.disabled = true
            for (let i = 0; i < mot.length; i++) {



                if (touche == motSplit[i]) {
                    motUnderscore[i] = touche
                    console.log(error)
                    countWin++
                    error = false
                }

                else { }
            }
            if (error === true) {
                countLose++
                document.getElementById("imgPendu").innerHTML = "<img src=imagesPENDU/Pendu" + countLose + ".png width=300px height=400px>";
            }
            else { }



            /* Condition de WIN / LOSE */
            if (countWin === count) {
                document.getElementById("infoWinLoose").innerHTML = "Gagné ! Tu as trouvé le bon mot !"
                document.getElementById("motAtrouver").innerHTML = motUnderscore.join(" ")
                game = false
            }
            else if (countLose === 6) {
                document.getElementById("infoWinLoose").innerHTML = "Perdu !"
                document.getElementById("motAtrouver").innerHTML = motUnderscore.join(" ")
                game = false
            }


            console.log(count)
            console.log(countLose)
            console.log(countWin)
            console.log(motUnderscore)
            document.getElementById("motAtrouver").innerHTML = motUnderscore.join(" ")

        }
    })























});