//V.01 Of Node creator

/* The script objective is to create a automatized node creator of our choice under selected nodes of our choice.

    I will set a specific part for the attribute setting.
    The node type can be changed in type_of_node. The valid entries are, "COMPOSITE", "FADE" and all the nodes that follow a drawing type node.
    Notice that the created nodes can be created under a "COMPOSITE" node, so I recommend to errase the condition (|| node_type == "COMPOSITE")
    in case of creating composite nodes.

    
*/
function node_creator(){


    // Variables for the whole scene.

    var all_nodes = selection.selectedNodes()
    var count = all_nodes.length
    



    // Allows to change the type of node by "FADE", "COMPOSITE", "READ"... (For the read node it has to be set up the column association and the elementid thing.)
        
    var type_of_node = "FADE"

    
    // The name you want to show for the node 
        
    var node_name_type = "LS_TRANSPARENCY"


    MessageLog.trace("there is " + count + " nodes selected.")
    
    
    for ( var i = 0 ; i < count ; i++){


        // Check the node type of every node selected.

        var node_type = node.type(all_nodes[i])
        var node_parent = node.parentNode(all_nodes[i])
        
        // Trace the type of the selectednodes to be able to know if there was an error with any specific node or to see if there is any node in another path than the rest.
        
        MessageLog.trace(node_type)
        MessageLog.trace(all_nodes[i])
        
        
        
        
        if (node_type[i] = "READ"){
            
            
            // Creates an undo action.

            scene.beginUndoRedoAccum("Loop node creation.")
            

            // Create a transparency node set up. (The type of the node is "FADE") (And the values need to be <transparency val="50" defaultValue="50"/>)
            
            // Creates a personalized name for the transparency nodes in case the name 
            
            var final_name
            
            if (i < 1){
                
                final_name = node_name_type
                
            }else{
                
                final_name = node_name_type + "_" + i
                
            }
            
            
            // Create the coordenates for each node.
            
            coordX = node.coordX(all_nodes[i])
            coordY = node.coordY(all_nodes[i])
            
            new_coordY = coordY +50
            

            //Creates the nodes taking as source: the parent node, the name of the node, the type and the coordenates. 
            
            node.add(node_parent, final_name, type_of_node, coordX, new_coordY, 0)
            
            
            selection.clearSelection(all_nodes)

            var created_node = selection.addNodeToSelection(final_name)
            node.link(all_nodes[i], 0, created_node, 0)
            
            MessageLog.trace(final_name)
            MessageLog.trace(created_node)
            
            // if the node is linked, link the transparency node between the node that is linked to.
            
            /* if (node.isLinked(all_nodes[i]) == true){
                
            
            // Unlinks the original link and links the new node between the two linked nodes.
            
            node.unlink(my_node_dest,0)
            node.link(all_node[i], 0, transparency_node, 0)
            node.link(transparency_node, 0, destination_node, 0)
            
            // find the node port to be able to link it in the same space.
            
            }else{
                
                
                created_node = selection.addNodeToSelection(final_name)
                node.link(created_node, all_nodes[i])
                
                }*/
                
            
            
            scene.endUndoRedoAccum()
            //There is a problem with the node selection. the value it returns is false, so it's not selecting any node.
            
                
        }else{
            
            
            // Warning in case the selected node is not a drawing or a composite.
            
            MessageBox.information("Plese, select Drawing or composite nodes.")
            MessageLog.trace("Wrong node type or missing selection.")
        }
    
        
    }        
}