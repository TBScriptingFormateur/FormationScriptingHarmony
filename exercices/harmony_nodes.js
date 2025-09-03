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


function add_10_to_all_node(){

      // deplace le premier node selectionné de 10 en x puis tous les autres

    const nodes_list = selection.selectedNodes()
    const offset = 10
    
    for (var index in nodes_list ){
        var current_node = nodes_list[index]
        var node_x = node.coordX(current_node)
        var  node_y = node.coordY(current_node)
        var new_x = node_x + offset
        node.setCoord(current_node,new_x, node_y)  
    }
    


}


function align_nodes_horizontaly(){

    // aligner les nodes dans la nodeview sur l'axe x 

    const elu = selection.selectedNodes ()[0]
    const Nodesliste = selection.selectedNodes()
    
    //var largeur = node.width(elu)
    //const node_x = node.coordX(elu)
    //const node_y = node.coordY(elu)
 
    // MessageLog.trace("coordonees node : "+node_x+","+node_y+"\n"+largeur )

    var offset = 10
    var largeur = node.width(elu)
    var new_y = offset + largeur  

    node.setCoord(Nodesliste,new_y,node_y);

    for ( var i in Nodesliste ){
        var current_node = Nodesliste[i]
        var decal = current_node
        var node_x = node.coordX(current_node)
        var node_y = node.coordY(current_node)
        MessageLog.trace(current_node+"coordonees node : "+node_x+","+node_y)
        node.setCoord(current_node,node_x, new_y)

   }


    MessageLog.trace(Nodesliste)
}

function align_nodes_horizontaly2(){

    // aligner les nodes dans la nodeview sur l'axe x 

    const elu = selection.selectedNodes ()[0]
    const Nodesliste = selection.selectedNodes()
    
    //var largeur = node.width(elu)
    //const node_x = node.coordX(elu)
    //const node_y = node.coordY(elu)
 
    // MessageLog.trace("coordonees node : "+node_x+","+node_y+"\n"+largeur )

    var offset = 10
    var new_y = offset + node_y  

    node.setCoord(Nodesliste,new_y,node_y);

    for ( var i in Nodesliste ){
        var current_node = Nodesliste[i]
        var node_x = node.coordX(current_node)
        var node_y = node.coordY(current_node)
        MessageLog.trace(current_node+"coordonees node : "+node_x+","+node_y)
        node.setCoord(current_node,node_x, new_y)

   }


    MessageLog.trace(Nodesliste)
}