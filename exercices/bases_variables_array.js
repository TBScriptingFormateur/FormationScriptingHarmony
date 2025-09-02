function variable_array(){

    var my_array = [1,2,3,4]
    MessageBox.information(my_array)

}

function variable_array_index_1(){

    var my_array = ["A","B","C","D"]
    MessageBox.information(my_array[0])
    MessageBox.information(my_array[1])
    
    var tortues_ninja = ["Leonardo","Raphael","Donatello","Michelangelo "]

    var numero = 0
    MessageBox.information(tortues_ninja[numero])

    numero+=1
    MessageBox.information(tortues_ninja[numero])

    numero+=1
    MessageBox.information(tortues_ninja[numero])

    numero+=1
    MessageBox.information(tortues_ninja[numero])

    // afficher la tortue Donatello à l'aide de l'index 

}

function variable_array_index_2(){

    var numbers = [1,2,3,4,5]
<<<<<<< Updated upstream
    var resultat = 
=======
    // combinez des éléments de l'array number pour obtenir le nombre 10
    var resultat = numbers[4] * numbers[1]
    
    MessageBox.information(resultat)
        
    // combinez des éléments de l'array number pour obtenir le nombre 100
    resultat = resultat * resultat
>>>>>>> Stashed changes

    MessageBox.information()
    
    // combinez des éléments de l'array number pour obtenir le nombre 10
    // combinez des éléments de l'array number pour obtenir le nombre 100

    var niveau = 2
    var chateau = ["douves","cave","sous_sol","rdc","etage_1","etage_2","etage_3","etage_4","etage_5","sommet_du_donjon"]

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
    
    var list = ["phrase 1","phrase 2","phrase 3","d"]

    var mots = list.join("\n")

    MessageBox.information(mots)


}



