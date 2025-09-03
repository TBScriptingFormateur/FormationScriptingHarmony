function variable_array(){

    var my_array = [1,2,3,4,5,"coucou les ploucs"]
    MessageBox.information(my_array)

}

function variable_array_index_1(){

    
    var tortues_ninja = ["Leonardo","Raphael","Donatello","Michelangelo "]
    //MessageBox.information(tortues_ninja[0])  
    var plus1 = 0

    for(var index in tortues_ninja) {

        MessageBox.information(tortues_ninja[0+plus1])
        plus1 += 1
    }



    // afficher la tortue Donatello à l'aide de l'index 

}

function variable_array_index_2(){

    var numbers = [1,2,3,4,5]
    
    // combinez des éléments de l'array number pour obtenir le nombre 10

    var result = (numbers[4]+numbers[4])
        MessageBox.information(result)

    // combinez des éléments de l'array number pour obtenir le nombre 100

        result = (numbers[4]+numbers[4])*(numbers[4]+numbers[4])   
        MessageBox.information(result)



    var niveau = 2
    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]

    // quelle est la valeur de chateau[niveau] ? 

    MessageBox.information(chateau[niveau])

    // quelle valeur faut il assigner à 'niveau' pour afficher 'sommet du donjon' ? 

}

function variable_array_index_of(){

    var my_array = ["A","B","C","D",1]
    MessageBox.information(my_array.indexOf("A"))

    var tortues_ninja = ["Leonardo","Raphael","Donatello","Michelangelo "]
     MessageBox.information(tortues_ninja.indexOf("Michelangelo "))
    // afficher l'index de Raphael 

    var nom_du_niveau = "sous_sol"
    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]
    var nbEtages = chateau.length
    MessageBox.information(nbEtages)

    // afficher le niveau actuel dans le chateau


}


function variable_array_length(){

    var my_array = ["A","B","C","D"]
    MessageBox.information(my_array.length)
    
    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]
    // afficher le nombre de niveau 

    var nbNiveaux = chateau.length
    MessageBox.information(nbNiveaux)
    
    // afficher le dernier niveau du chateau en utilisant length
    
    MessageBox.information(chateau[nbNiveaux-1])

}


function variable_array_push(){

    var my_array = ["A","B","C","D"]
    my_array.push("E")
    my_array.push("F")
    MessageBox.information(my_array)

    var instructions_recette_de_quiche = ["melanger_oeufs","ajouter_fromage"]
    // completer la recette de la quiche et afficher le resultat 

}



