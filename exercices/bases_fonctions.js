function basic_function(){

    function say_hello(){
        MessageLog.trace("hello")
    }

    say_hello()
    
    function say_bonjour(){

        for (var i = 0; i < 3; i++){

            MessageLog.trace("Bonjour")

        }



    }

    say_bonjour()
    
    // ecrire une fonction qui affiche "bonjour" et l'executer trois fois 

}





function basic_arguments(){

    function say(_word){
        MessageLog.trace(_word)
    }
    
    say("Good night")
    
    function standup_introduction(_word,_city){
        
        MessageBox.information( _city + "! I am a " + _word + " and I am pretty happy to be here tonight!" )
        

    }
    
   
    // Creation of the dialog box to ask the question

    var myDialog = new Dialog();
    myDialog.title = "Hey!";


    //Creation of the line edit that allows the user to give an input. The string will be saved inside userInput.

    var userInput = new LineEdit();
    userInput.label = "Chose a word: ";
    myDialog.add( userInput );


    // Executes the dialog to be able to interact with it.

    myDialog.exec()
    
    
    // Transforms the input of the user in text to be able to use it as an input.
    
    var inputText = userInput.text;


    // Condition to check if there is something inside the input line. Otherwise it creates a message popping-up.

    if (inputText.length > 0){

        standup_introduction(inputText,"Angouleme")
        
    }else{

        MessageBox.information("Write something you DumbHead !")
    }

}





function basic_return_value(){

    /*function addition(_A,_B){
        const sum = _A+_B
        return sum
    }

    var result = MessageBox.information(addition(2,3))
    */
    // ecrire une fonction pour diviser et soustraire puis afficher le resultat 

    // ecrire une fonction qui donne le nombre de secondes pour un nombre "h" d'heures.

    // ecrire une fonction qui ajoute des emoticones coeurs de part et d'autre d'un mots 
    
    function addEmoticones(_emoticone,_phrase){
   
        var message_emo = _emoticone + _phrase + _emoticone
        
        return message_emo
    
    }
    
    function aujute_coeur(_word){

        var coeurs = "😒" + _word + "😒"
        return coeurs
        
    }

    var dialog  = new Dialog()   
    var checkbox = new CheckBox()
    var table_check = []
    checkbox.text = "<=="
    dialog.add(checkbox)
    dialog.title = "Will you push the button ?"
    table_check.push(checkbox)

    dialog.exec()


    if(table_check[0].checked){
        
        var phrase = " Arrrgh! "
        MessageBox.information(addEmoticones("❤️‍🔥❤️‍🔥​",phrase))

    } else{

        MessageBox.information(aujute_coeur(aujute_coeur("Bon...")))

    }

}





function variable_scope_1 (){

    var mots = "A"

    function ajoute_une_lettre(_lettre){
        mots = mots+_lettre
    }

    ajoute_une_lettre("B")
    ajoute_une_lettre("C")
    ajoute_une_lettre("D")

    MessageBox.information(mots)

    // ecrire une fonction pour multiplier un nombre par deux à m'infini


}





function variable_scope_2 (){

    var mots = "A"

    function ajoute_une_lettre(_lettre){
        var mots = ""
        mots = mots+_lettre
    }

    ajoute_une_lettre("B")
    ajoute_une_lettre("C")
    ajoute_une_lettre("D")

    // avnt de lancer le script essayez de deviner la valeur de "mots" ...

    MessageBox.information(mots)


}





function high_order_function(){

    function heal(_target){
        return _target+" is healed ! "
    }    
    function fire_ball(_target){
        return _target+" is on fire ! "
    }    
    function ice_cone(_target){
        return _target+" took a cold ! "
    }

    // high order function 
    function cast_spell(_spell,_target){
        return _spell(_target)
    }
    

    var hero_state = cast_spell(fire_ball,"The hero")
    MessageBox.information(hero_state)

    var hero_state = cast_spell(heal,"The hero")
    MessageBox.information(hero_state)
    
    var hero_state= cast_spell(ice_cone, "The hero")
    MessageBox.information(hero_state)

    // ecrire le sort "ice_cone" et l'appliquer comme ci dessus 
    
}



