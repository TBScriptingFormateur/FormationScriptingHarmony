function variable_array(){

    var my_array = ["Vatten","Välkommen","Öl","eller"]
    MessageBox.information(my_array)

}

function variable_array_index_1(){

    var my_array = ["A","B","C","D"]
//MessageBox.information(my_array[0])
//MessageBox.information(my_array[1])
    
    var tortues_ninja = ["Leonardo","Raphael","Donatello","Michelangelo "]
    // afficher la tortue Donatello à l'aide de l'index 

    var numTurtle = 0
    MessageBox.information (tortues_ninja [numTurtle])
    
    numTurtle += 1
    MessageBox.information (tortues_ninja [numTurtle])    
    
    numTurtle += 1
    MessageBox.information (tortues_ninja [numTurtle])

    numTurtle += 1
    MessageBox.information (tortues_ninja [numTurtle])

    
}

function variable_array_index_2(){

    var numbers = [1,2,3,4,5]
    
    // combinez des éléments de l'array number pour obtenir le nombre 10
    // combinez des éléments de l'array number pour obtenir le nombre 100

    var deca = numbers[1]*numbers[4]
    var centi = deca*deca

    MessageBox.information (deca)
    MessageBox.information (centi)

    var niveau = 2
    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]

    // quelle est la valeur de chateau[niveau] ? 
    // quelle valeur faut il assigner à 'niveau' pour afficher 'sommet du donjon' ? 

    MessageBox.information ( chateau[niveau])

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
    var newLetter = "pain"
    my_array.push("E")
    my_array.push("F")

    

    MessageBox.information(my_array)
    
    var instructions_recette_de_quiche = ["melanger_oeufs","ajouter_fromage"]
    
    MessageBox.information(instructions_recette_de_quiche)

    instructions_recette_de_quiche.push ("ajouter poireaux")
    instructions_recette_de_quiche.push ("melanger le tout")
    instructions_recette_de_quiche.push ("verser dans la pate")


    MessageBox.information(instructions_recette_de_quiche)
    
    var list = ["a","b","c"]
    MessageBox.information(list)

    var mots = list.join("\n")
        
    MessageBox.information(mots)

    // completer la recette de la quiche et afficher le resultat 

}



