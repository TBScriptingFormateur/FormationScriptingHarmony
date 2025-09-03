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


// V 1.0
// This function allows to align the selected nodes in a X axis respecting a specific space between them.

function align_nodes_horizontaly(){



    // Warns the user that they have to take more than one node. 

     if (selection.numberOfNodesSelected() == 1) {

        MessageBox.information("Please, select more than one node.")
        MessageLog.trace("Just one node selected.")

        return

    } else {


        // Return the first selected node.

        const first_node = selection.selectedNodes()[0]

        MessageLog.trace(first_node)
        

        // Set the cordenates X and Y and trace them.

        const node_X = node.coordX(first_node)
        const node_Y = node.coordY(first_node)

        MessageLog.trace("Node X is: " + node_X)
        MessageLog.trace("Node Y is: " + node_Y)
        

        // Set the position of the first node.

        node.setCoord(first_node, 0, node_Y)


        // Prepares a variable that will be replaced by the new position to be able to slide the node in X. 

        // var new_X = node_X
        // var negative_x = node_X *-1
        // Creates a list with all the selected nodes and takes the length of it.
        
        var node_list = selection.selectedNodes() 
        const node_length = node_list.length
        var a = node_X + node.width(node_list[1]) + 150
        var b 
        
        MessageLog.trace("is this: " + node_length)
        
        
        // Does a loop to align all the nodes in a specific cordinate Y in reference of the first node selected.
        
        for (var i = 1; i < node_length; i++){
            
            
            // We create a variable called new _i to set the value i/2 in it.  
            
            // var new_i = i/2
            var new_coord = node.coordX(node_list[i-1])
            
            // MessageLog.trace(new_i)
            
            node.setCoord(node_list[i], a, node_Y)
            // new_X += node.width(node_list[i]) + 40
            a = new_coord + node.width(node_list[i]) + 150

            //Condition to set that only the odd numbers get into the left. 

           /* if (new_i === Math.floor(new_i) ){

                node.setCoord(node_list[i], a, node_Y)
                // new_X += node.width(node_list[i]) + 40
                a = new_coord + node.width(node_list[i]) + 150
                
                
                MessageLog.trace("New value of x is : " + new_X)
                
            }else{
            
                node.setCoord(node_list[i], b, node_Y)
                // negative_x += node.width(node_list[i]) + 40
                b = -1 * (node.width(node_list[i]) + 100) ^ i

                MessageLog.trace("Negative_x is: " + negative_x)
            }*/
            
        }



    }
}