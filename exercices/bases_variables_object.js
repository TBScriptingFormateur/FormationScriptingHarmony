function my_test_func(){

    // declaration 
    var perso = {
      nom:"MonToutou",
      race:"Labrador",
      force:100,
      agilité:10,
      cri:"ouaf"
    }

    var attr_name = "nom"

    MessageBox.information(perso["nom"]) 
    /*
    
    MessageBox.information(perso["nom"]) 
    // affiche MonToutou
    
    
    MessageBox.information(perso["agilité"]) 
    // affiche 10
    
    MessageBox.information(perso["cri"]) 
    // affiche ouaf

    */

}
