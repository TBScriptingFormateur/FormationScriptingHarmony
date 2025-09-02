function variable_int(){
    // declaration nom de variable + valeur
    
    var Tralala = 30
    MessageBox.information(Tralala)

    // declater une nouvelle variable et afficher son contenu deux fois 
    // declater une nouvelle variable changer sa valeur et afficher son contenu 

}

function variable_int_operators_1(){

    var pouimpouimf = 20.5
    var trololo = 15.3
    var my_var = pouimpouimf % trololo

    MessageBox.information(my_var)

    // declarez deux variables , stocker le resultat de leur addition dans une troisième variable et afficher son contenu 

}



function variable_int_operators_2(){

    var division = 1 / 2  
    var multiplication = 1 * 2
    var addition = 1 + 2
    var soustraction = 1 - 2
    var algebre = ( 1 + 4 + 6 ) / 10

    var nb_secondes_dans_une_minutes = 60
    var nb_minutes_dans_une_heure = 60
    var nb_heure_par_jour = 24

    var nb_secondes_dans_un_jour = (nb_secondes_dans_une_minutes * nb_minutes_dans_une_heure * nb_heure_par_jour)

    MessageBox.information(nb_secondes_dans_un_jour)

    // calculer puis afficher la dernière variable 

}


function variable_int_operators_3(){

    var degats_cone_de_glace = -100
    var degats_boule_de_feu = -150
    var potion_de_soin = +300
    var points_de_vie_de_base = 30
    var points_de_vie_finaux = (points_de_vie_de_base - degats_boule_de_feu - degats_cone_de_glace + potion_de_soin)

    MessageBox.information(points_de_vie_finaux)

    // calculer la variable "point_de_vie_finaux" du hero après les deux attaques et la potion de soin 


}

function variable_float(){

    var longeur_barbe_de_fili = 6
    var longeur_barbe_de_balin = 40
    var longeur_barbe_de_thorin = 10
    var longeur_barbe_de_kili = 5
    var longeur_barbe_de_bifur = 45
    var longeur_barbe_de_bombur = 5

    var longueur_Tot = (longeur_barbe_de_balin + longeur_barbe_de_bifur + longeur_barbe_de_bombur + longeur_barbe_de_fili + longeur_barbe_de_kili + longeur_barbe_de_thorin)
    var longueur_moy = (longueur_Tot / 6)

    MessageBox.information(longueur_moy)

    // calculez la longueur moyenne de la barbe des nains présents dans Le Hobbit


}