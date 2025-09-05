

function test(){
    var bool = false
    if(bool==true){
        MessageBox.information("it's true !")
    }
}

function input_user(){

    var dialog = new Dialog()
    dialog.title = "Bretagne"

    var inputL = new LineEdit()
    inputL.label = "Departement"
    dialog.add( inputL )    
    
    var inputR = new LineEdit()
    inputR.label = "Region"
    dialog.add( inputR )

    if ( dialog.exec() ){
        if(inputL.text==""){
            MessageLog.trace("l'input est vide ")
        }
    }

}