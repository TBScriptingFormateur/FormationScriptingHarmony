

function show_node_tips(){
    MessageLog.trace("show_node_tips")
    var selected_node = selection.selectedNodes()[0]
    var message = get_node_tips(selected_node)
    MessageBox.information(message)
}

function get_node_tips(_a_node){
    essageLog.trace("get_backdrop_text_of_node "+_node)
    var backdrop_text = get_backdrop_text_of_node(_a_node)
    return backdrop_text
}

function get_backdrop_text_of_node(_node){
    MessageLog.trace("get_backdrop_text_of_node "+_node)
    var backdrop = get_backdrop_of_node(_node)
    return "ce node est hiper utile"
}

function get_backdrop_of_node(_node){
    essageLog.trace("get_backdrop_of_node "+_node)
    var node_x = 0
    var node_y = 0
}

