function variable_array(){

   /* var my_array = ["A","B","C","D"]
    MessageBox.information(my_array)
*/




}
function variableBoolAnd(){
    var my_node = selection.selectedNode(0)
    var nodeName= node.getName(my_node)
    var node_type = node.type(my_node)
    MessageLog.trace(nodeName + " = " + node_type)
}

function getLastElement(_element){
 /* 
    var path = selection.selectedNode(0)
    var pathArray= path.split("\")
    var lastElementInPath = path[path.length-1]
    */

    
    var lastElement = _element[element.length-1]
     MessageLog.trace(lastElement)
     return LastElement
}

function tousLesNodesRead () {

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

function test(){
    var bool = false
    if(bool==true){

        MessageBox.information("it's true !")

    }else{

        MessageBox.information("it's false !")

    }
}

function inputUser() {

     var dialog = new Dialog()
     dialog.title = "Salut les nazes"
      var inputL = new LineEdit()
      var inputM = new LineEdit()
      inputL.label = "Ca boom ? "
      inputM.label = "Ptite bière ? "
      dialog.add( inputL )
      dialog.add( inputM )

      if ( dialog.exec() )
        {
            var sampleTextL = inputL.text;
            var sampleTextM = inputM.text;
     
            if(sampleTextL !=0){
                MessageLog.trace("la reponse à " + inputL.label + sampleTextL)   
            }else{
                MessageLog.trace("Pas de réponse snif  :'\(  ")   
            }
            
            }if(sampleTextM !=0){
                MessageLog.trace("la reponse à " + inputL.label + sampleTextM)   
            }else{
                MessageLog.trace(" Vive le vent")   
            }
}