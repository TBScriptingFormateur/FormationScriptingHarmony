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

}