function how_many_pegs(){

    // afficher le nombre de peg dans la scene

}


function add_10_x(){

    // deplace le premier node selectionné de 10 en x
    
    const first_node = selection.selectedNodes()[0]
    
    var node_x = node.coordX(first_node)
    var  node_y = node.coordY(first_node)
    
    const offset = 10

    var new_x = node_x + offset
    node.setCoord(first_node,new_x,node_y);


}

function add_10_to_all_nodes(){

    // deplace le premier node selectionné de 10 en x
    
    const nodes_list = selection.selectedNodes()

    const offset = 10

    for (var index in nodes_list){
        var current_node = nodes_list[index]
        var node_x = node.coordX(current_node)
        var node_y = node.coordY(current_node)
        var new_x = node_x + offset
        node.setCoord(current_node,new_x,node_y);
    }


}

function align_nodes_horizontaly(){

    // aligner les nodes dans la nodeview sur l'axe x 

    const nodes_list = selection.selectedNodes()
    
    /*
    const node_x = node.coordX(first_node)
    const node_y = node.coordY(first_node)
    //var node_width = node.width(first_node)
    */

   
   const offset = 10
   
   for ( var i in nodes_list){
       var current_node = nodes_list[i]
       var node_x = node.coordX(current_node)
       var node_y = node.coordY(current_node)
       MessageLog.trace(current_node+" : "+node_x+" "+node_y)
       var new_x = offset + node_x
        node.setCoord(current_node,new_x,node_y);

    }

}


function align_nodes_horizontaly_2(){

    // aligner les nodes dans la nodeview sur l'axe x 

    const first_node = selection.selectedNodes()[0]
    const nodes_list = selection.selectedNodes()
    
    /*
    const node_x = node.coordX(first_node)
    const node_y = node.coordY(first_node)
    //var node_width = node.width(first_node)
    */

   
   const offset = 10
   
   for ( var i in nodes_list){
       var current_node = nodes_list[i]
       var node_x = node.coordX(current_node)
       var node_y = node.coordY(current_node)
       MessageLog.trace(current_node+" : "+node_x+" "+node_y)
       var new_x = offset + node_x
        node.setCoord(current_node,new_x,node_y);

    }

}