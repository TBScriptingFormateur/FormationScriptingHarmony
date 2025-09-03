function basic_function(){

    function say_hello(){
        MessageLog.trace("bonjour")
    }

    say_hello()
    say_hello()
    say_hello()
 

    // ecrire une fonction qui affiche "bonjour" et l'executer trois fois 

}

function repeatFunction(){

    function say_hello(){
        MessageLog.trace("bonjour")
    }
 
   var nbRepetitions = "abc"

       MessageLog.trace("let's go 👉")

   for (var i in nbRepetitions){
    say_hello()
   }

    

    // ecrire une fonction qui affiche "bonjour" et l'executer trois fois 

}





function basic_arguments(){

   /* function say(_word){
        MessageBox.trace(_word)
    }

    say("hello")
    */


    function standup_introduction(_word,_city){
        

        MessageLog.trace("\n Bonsoir "   + _city + " !!! \n Est ce que vous êtes chauds ce soir ?? 📢📢📢 " + "\n Est-ce que vous aimez " + _word + " ??")

        // ecrire la fonction pour commencer un spectacle de stand up 

    }

    standup_introduction("LE SCRIPT", "ANGOULEME🏰")

    // appeler la fonction pour un standup à Angouleme
}

function basic_pnj(){

    function phrase_du_pnj(_nom,_prenom){
        MessageLog.trace("bonjour ! "+_nom+" "+_prenom+" bienvenue dans mon auberge , "+_prenom+" c'est vraiment un très joi prenom ")
    }

    phrase_du_pnj("frappe","marion")
    phrase_du_pnj("leroy","justine")

}



function basic_return_value(){

    function addition(_A,_B){
        const sum = _A+_B
        return sum
    }

    var result = MessageBox.information(addition(2,3))

    // ecrire une fonction pour diviser et soustraire puis afficher le resultat 

    // ecrire une fonction qui donne le nombre de secondes pour un nombre "h" d'heures.

    // ecrire une fonction qui ajoute des emoticones coeurs de part et d'autre d'un mots 


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
        return _target+" is on fire !"
    }    

    // high order function 
    function cast_spell(_spell,_target){
        return _spell(_target)
    }
    

    var hero_state = cast_spell(fire_ball,"the hero")
    MessageBox.information(hero_state)

    var hero_state = cast_spell(heal,"the hero")
    MessageBox.information(hero_state)

    // ecrire le sort "ice_cone" et l'appliquer comme ci dessus 
    
}



