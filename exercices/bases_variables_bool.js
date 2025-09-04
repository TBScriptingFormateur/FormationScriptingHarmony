function variable_bool(){

    var my_node = selection.selectedNode(0)
    // on peut mettre selection.selectednodes()[0] a la place
    var target_name1 = "Top/group"
    var target_name2 = "Top/Group"
    var my_bool = (my_node == target_name1) || (my_node == target_name2)
    MessageBox.information(my_node +" is "+target_name1+" or "+target_name2+" \n : "+my_bool)
    MessageLog.trace(my_bool)

} 

function variable_bool_and(){

    var my_node = selection.selectedNode(0)
    // on peut mettre selection.selectednodes()[0] a la place
    var target_name = "Drawing"
    var target_type = "READ"    
    var node_type = node.type(my_node)
    var node_name = node.getName(my_node)
    
    // on test si le node selectionne est de type read
    var my_bool = node_type == target_type && node_name == target_name
    
    MessageLog.trace(my_bool)

}

function select_read (){
// 
    selection.clearSelection 
    var ntype = "READ"
    var node_listing = node.getNodes([ntype])
    var node_nb = node_listing.length

    MessageLog.trace(node_nb)
    MessageBox.information("Node count : "+node_nb+chose_type_to_select(ntype))

    selection.addNodesToSelection(node_listing)

    //var list_of_read = node.getNodes(["READ","PEG","WRITE","MasterController","GROUP",])

    MessageLog.trace(node_listing)
}

function chose_type_to_select(_type){
 
}

function My_Drop_Menu(){

    var myDialog = new Dialog();
myDialog.title = "ComboBox Example";
var userInput = new ComboBox();
userInput.label = "Which node type de you want"
userInput.editable = true;
userInput.itemList = ["Red", "Green", "Blue", "Yellow", "White", "Pink", "Orange", "Purple", "Black"];
myDialog.add( userInput );
if ( myDialog.exec() )
  MessageLog.trace("blabla " + userInput.currentItem + ".");

}

function get_node_name(_node){

    var my_node = selection.selectedNode(0)
    // on peut mettre selection.selectednodes()[0] a la place
    var path_split = _node.split("/")
    var last = get_last_array_element // ou path_split[path_split.length-1] si on n'appelle pas la fonction get_last_array
    MessageLog.trace(last)
    return last
    

}

function get_last_array_element(_Array){

    return (_Array[_Array.length-1])
    

}