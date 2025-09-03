function how_many_pegs(){

    // afficher le nombre de peg dans la scene

}

function align_nodes_horizontaly(){

    // aligner les nodes dans la nodeview sur l'axe x 
    
    var firstNode = selection.selectedNodes()[0]

    var nodeX = node.coordX(firstNode)
    var nodeY = node.coordY(firstNode)
    
    //node.setCoord(firstNode,0,0);

    MessageLog.trace("\n Node     👉 " + firstNode[0] + "\n Coord X👉 " + nodeX + "\n Coord Y👉 " + nodeY)

    //var translate = node.width(firstNode)
    var translate = 10
    var newX = nodeX + translate

    node.setCoord(firstNode,newX,nodeY);


    
}

function align () {

    var select = selection.selectedNodes()
    var firstNode = select[0]
    var firstNodeY = node.coordY(firstNode)
    var firstNodeX = node.coordX(firstNode)
    var newX = firstNodeX

    for (var index in select) {
        var currentNode = select[index]
        var currentNodewidth = node.width(currentNode)
        newX += node.width(select[index-1])+10
        node.setCoord(currentNode,newX, firstNodeY)

    }
}

