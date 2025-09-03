function how_many_pegs(){

    // afficher le nombre de peg dans la scene 
    if (selection.numberOfNodesSelected() <= 0){
        MessageBox.information("Plese, select at least one node")
        MessageLog.trace("No nodes selected")
    


    }else{
        var i
        var sNode = selection.selectedNodes(i)
        MessageBox.information("There is " + node.getNodes("PEG") + " selected")
        MessageLog.trace("There is " + node.getNodes("PEG") + " selected")
    }

}

function align_nodes_horizontaly(){

    // aligner les nodes dans la nodeview sur l'axe x
    // Warns the user that they have to take more than one node. 
     if (selection.numberOfNodesSelected() == 1) {

        MessageBox.information("Please, select more than one node.")
        MessageLog.trace("Just one node selected.")

        return

    } else {

        // Return the first selected node
        const first_node = selection.selectedNodes()[0]

        MessageLog.trace(first_node)
        
        // Set the cordenates X and Y and trace them.
        const node_X = node.coordX(first_node)
        const node_Y = node.coordY(first_node)

        MessageLog.trace(node_X)
        MessageLog.trace(node_Y)
        
        // Prepares a variable that will be replaced by the new position to be able to slide the node in X 
        var new_X = node_X
        
        // Creates a list with all the selected nodes and takes the length of it.
        var node_list = selection.selectedNodes() 
        const node_length = node_list.length

        MessageLog.trace("is this: " + node_length)

        // Does a loop to align all the nodes in a specific cordinate Y in reference of the first node selected.
        for (var i = 0; i < node_length; i++){

            node.setCoord(node_list[i], new_X, node_Y)
            new_X += node.width(node_list[i]) + 40

            MessageLog.trace(new_X)
            
        }



    }
}