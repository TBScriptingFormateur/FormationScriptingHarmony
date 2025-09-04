function variable_bool_or(){

    var my_node = selection.selectedNode(0)
    var target_name1 = "Top/group"
    var target_name2 = "Top/group"
    var my_bool = (my_node == target_name1) || (my_node == target_name2)
    MessageBox.information(my_node +" is "+target_name1+" or "+target_name2+" \n : "+my_bool)
    MessageLog.trace(my_bool)
    
}

function variable_bool_and(){
    
    var my_node = selection.selectedNode(0)
    var target_name = "Drawing"
    var target_type = "READ"

    var node_type = node.type(my_node)
    var node_name = node.getName(my_node)

    // on test si le node selectionne est de type READ et de nom Drawing 
    var my_bool = node_type == target_type && node_name == target_name 
    MessageBox.information(my_bool)

    //var list_of_read = node.getNodes(["READ","PEG","GROUP","MasterController"])
    //MessageLog.trace(list_of_read)
}



function select_only_reads(){
    selection.clearSelection()
    var list = node.getNodes(["READ"])
    selection.addNodesToSelection(list)
}



function select_read(){ // delenché par le boutton select_read
    select_only_reads()
}


function get_node_name(_node){
    var path_split = _node.split("/")
    MessageLog.trace(path_split)
    var last = path_split[path_split.length-1]
    MessageLog.trace(last)
    return last
}

function get_last_element(_array){
    return _array[_array.lerngth-1]
}

