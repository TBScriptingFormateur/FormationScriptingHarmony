function getPath(){
    var i
    var sNode = selection.selectedNode(i)
    var numInput = node.numberOfInputPorts(sNode)
    var source = node.srcNode(sNode, (numInput - 1))
    
    //MessageBox.information(source)

}
function waypoints_above(){

     if (selection.numberOfNodesSelected() !== 1) {
        MessageBox.information("Please, select only one node.")
        return
    } else {

        
        var i
        var sNode = selection.selectedNode(i)
        var pNode = node.parentNode(sNode)
        var name = node.getName(sNode)

        //  var positionX = node.coordX(sNode)
        // var positionY = node.coordY(sNode)
        //var position = [positionX, positionY]

        var nWidth = parseFloat(node.width(sNode))/2
        var nHeight = parseFloat(node.height(sNode))

        //MessageBox.information("the position is: " + position)
        //var paPath = node.dstNode(sNode, 0, 0)
        
        if (Math.floor(nWidth) !== nWidth){
            nWidth = nWidth + 10
        }else{

            waypoint.add(pNode ,name ,nWidth ,nHeight)
            waypoint.linkWaypointToInport(pNode, sNode, 0, false)
        }
        
    }
}

function get_node_type(){

    function show_node_type(){

        var selected_node = get_first_selected_node
        var message = get_node_type(selected_node)

        messageBox.information(message)

    }
    function get_first_selected_node(){

        var my_node = selection.selectedNodes()[0]
        return my_node

    }

    function get_node_type(_node){

        var type_of_node = node.type(_node)
        return type_of_node
    }
    show_node_type()

}
function add_backdrop(){
    var i
    var sNode = selection.selectedNodes()
    selection.addBackdropToSelection(sNode, i)
}