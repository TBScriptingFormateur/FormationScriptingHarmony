function dire_bonjour(){
    var salutation = 'Bonjour'
    var nom = " Marion \"charactère échappé\""
    var ville = " Angoulême \n"
    var emoji = "😈"
    var dire_bonjour = salutation + nom + " de" + ville + emoji 

    MessageBox.information(dire_bonjour)
}

function incendie(){
    var comete = "☄️"
    var feu = ["🔥","🌈","☔️","🍐"]
   
    for(var index in feu){

        MessageBox.information(feu[index])
    }
 


}
