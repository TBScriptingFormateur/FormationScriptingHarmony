function variable_bool_or(){

    var my_node = selection.selectedNode(0)
    var target_name1 = "Top/group"
    var target_name2 = "Top/Group"
    var my_bool = (my_node == target_name1) || (my_node == target_name2)
    MessageBox.information(my_node +" is "+target_name1+" or "+target_name2+" \n : "+my_bool)
    MessageLog.trace(my_bool)

}

function variable_bool_and(){



}

