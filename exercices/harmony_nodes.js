function how_many_pegs(){
    var nodes = selection.selectedNodes()
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


}function add_10_to_all_nodes(){

    // deplace le premier node selectionné de 10 en x

    const offset = 10
    const list_node = selection.selectedNodes()
    for( var index in list_node){

        var current_node = list_node[index]
        var node_x = node.coordX(current_node)
        var  node_y = node.coordY(current_node)
        var new_x = node_x + offset
        node.setCoord(current_node,new_x,node_y)};

}

function align_nodes_horizontaly(){

    const list_node = selection.selectedNodes()
    const first_node = selection.selectedNodes()[0]
    var node_x_first = node.coordX(first_node)
    var node_y_first = node.coordY(first_node)

    for(var index in list_node){
        var current_node = list_node[index]
        var node_x = node.coordX(current_node)
        var  node_y = node.coordY(current_node)
        node.setCoord(current_node,node_x,node_y_first)
    }



}



function align_nodes_horizontaly2(){

}