function test(){
    var bool = false
    if(bool==true){

        MessageBox.information("it's true !")

    }else{

        MessageBox.information("it's false !")

    }
}
function input_user(){


    var dialog = new Dialog();
    dialog.title = "Avis";

    var inputL = new LineEdit();
    inputL.label = "Comment était la formation ?";
    dialog.add( inputL );
    // 
    var inputF = new LineEdit();
    inputF.label = "Combien d'étoiles mettez vous ?";
    dialog.add( inputF );

    MessageLog.trace("Personne n'a appuyé sur ok")
    
    if ( dialog.exec() ){
        if ( inputF.text == "" || inputL.text == ""){
            MessageBox.information("PLEASE, answer the QUESTIONSSS")
            MessageLog.trace("Vous n'avez pas répondu");

        }else{
        
            MessageLog.trace("La formation était " + inputL.text + " et vous avez mis "+ inputF.text+ "étoiles");
        }
    }   
}

