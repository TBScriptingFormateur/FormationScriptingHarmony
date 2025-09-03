function how_many_pegs(){
    var nodes = selection.selectedNodes()
    // afficher le nombre de peg dans la scene

}

function align_nodes_horizontaly(){

    // afficher le premier drawing sélectionné
    var node_list = selection.selectedNodes()
    var first_node = selection.selectedNodes()[0]
    //node.setCoord(first_node,0,0);
    var node_x = node.coordX(first_node)
    var node_y = node.coordY(first_node)

    //MessageLog.trace(" \n 🔷 x; " + node_x + " \n 🔷 y; " + node_y)

    //node.setCoord(first_node,new_x,node_y)
    
    
    // for loop
    var node_list = selection.selectedNodes()
    var node_x = node.coordX(node_list)
    var node_y = node.coordY(node_list)
    var current_node = node_list[Index]
    
    for(var Index in node_list){
        var offset = node.width(first_node)
        node_x= node.coordX(current_node)
        node_y= node.coordY(current_node)
        var new_x = node_x + offset
        
        node.setCoord(current_node,new_x,node_y)
        MessageLog.trace(node_x)

    }
    // aligner les nodes dans la nodeview sur l'axe x 

}