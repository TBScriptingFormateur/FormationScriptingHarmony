function variable_array(){

    var my_array = ["A","B","C","D"]
    MessageBox.information(my_array)

}

function variable_bool_and(){

    var my_node = selection.selectedNode(0)
    var node_type = node.type(my_node)
    MessageLog.trace(node_type)
    if (node_type == "READ" || node_type == "COMPOSITE"){

        // Create a transparency node set up. (The type of the node is "FADE") (And the values need to be <transparency val="50" defaultValue="50"/>)
        // Create a name randomizer.
        // Create a coordenate calculator that allow to move the created node down the node is being created.
        // Conect the nodes to the respective path.



    }else{

        // Warning in case the selected node is not a drawing or a composite.

        MessageBox.information("Plese, select a Drawing or composite.")

    }


}
