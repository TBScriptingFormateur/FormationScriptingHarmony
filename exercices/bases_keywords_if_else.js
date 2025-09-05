function test(){
    var bool = false
    if(bool==true){

        MessageBox.information("it's true !")

    }else{

        MessageBox.information("it's false !")

    }
}

function test2(){
    var bool = true
    if(bool==true){

        MessageBox.information("it's true !")

    }else{

        MessageBox.information("it's false !")

    }
}

function input_user (){

 var dialog = new Dialog()
  dialog.title = "Question pour toi"
  var inputA = new LineEdit()
  inputA.label = "C'est qui ta tortue ninja préférée"
  dialog.add( inputA )
  var inputB = new LineEdit()
  inputB.label = "C'est qui ton powerRanger pref"
  dialog.add( inputB )
  
 
  if ( dialog.exec() ){

    var user_answerA = inputA.text 
    var user_answerB = inputB.text

    if(user_answerA == ""||user_answerB==""){
         MessageBox.information("Merci de vous exprimer, sinon la 🌍​Terre explose 💥​")

    }
    else{ MessageLog.trace("Sa reponse est " + user_answerA + "."+"\n"+"Sa reponse est " + user_answerB + ".")}
   
    if(user_answerA != false && user_answerB!= false){
        MessageBox.information("Merci vous êtes chou 🫶")
    }
 // MessageLog.trace("Ne souhaite pas répondre")
  }

  
}function tousLesNodesRead () {

    selection.clearSelection()

    var myDialog = new Dialog();
    
    myDialog.title = "Select Nodes By Type";
    
    var userInput = new ComboBox();
    
    userInput.label = "Select Node Type"

    userInput.editable = true;

    userInput.itemList = ["READ", "COMPOSITE", "PEG", "WRITE", "DISPLAY"];

    // ajouter user Input dans la fenetre de dialogue
    myDialog.add(userInput)

    
    if ( myDialog.exec() ){
        
        var result = userInput.currentItem
        
        MessageLog.trace(result)

        var list = node.getNodes([result])
    
        var nbNodes = list.length

    
        selection.addNodesToSelection(list)
    
        MessageBox.information("Bravo, vous avez sélectionné " + nbNodes + " " + userInput.currentItem +"(s)")

    }


}