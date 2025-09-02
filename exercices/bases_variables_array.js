function variable_array(){

    var my_array = ["A","B","C","D"]
    MessageBox.information(my_array)

}

function variable_array_index_1(){

    // var my_array = ["A","B","C","D"]
    //MessageBox.information(my_array[0])
    //MessageBox.information(my_array[1])

    var tortues_ninja = ["Leonardo","Raphael","Donatello","Michelangelo "]
    var number = tortues_ninja.length
    var i = 0

    while (i < number){
    
        MessageBox.information(tortues_ninja[i])
        i++
    
    }
    

}

function variable_array_index_2(){

    var number = [1 ,2 ,3 ,4 ,5]
    var result = number[1] * number[4]
    MessageBox.information(number[1] * number[4])
    result = result * result
    MessageBox.information(result)

    // combinez des éléments de l'array number pour obtenir le nombre 10
    // combinez des éléments de l'array number pour obtenir le nombre 100

    var niveau = 2
    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]
    var dernier_niveau = chateau.length - 1
    MessageBox.information(chateau[niveau])
    MessageBox.information(dernier_niveau)
    
    // quelle est la valeur de chateau[niveau] ? 
    // quelle valeur faut il assigner à 'niveau' pour afficher 'sommet du donjon' ? 

}

function variable_array_index_of(){

    var my_array = ["A","B","C","D"]
    MessageBox.information(my_array.indexOf("A"))

    var tortues_ninja = ["Leonardo","Raphael","Donatello","Michelangelo "]

    // afficher l'index de Raphael 

    var nom_du_niveau = "sous_sol"
    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]

    // afficher le niveau actuel dans le chateau


}


function variable_array_length(){

    var my_array = ["A","B","C","D"]
    MessageBox.information(my_array.length)

    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]
    // afficher le nombre de niveau 
    // afficher le dernier niveau du chateau en utilisant length

}


function variable_array_push(){

    var my_array = ["A","B","C","D"]
    my_array.push("E")
    my_array.push("F")
    MessageBox.information(my_array)
    var recipe = ["ajouter_le_jambon","mettre_au_four" ]
    var instructions_recette_de_quiche = ["melanger_oeufs","ajouter_fromage"]
    instructions_recette_de_quiche.push(recipe)
    MessageBox.information(instructions_recette_de_quiche)
    // completer la recette de la quiche et afficher le resultat 

}



