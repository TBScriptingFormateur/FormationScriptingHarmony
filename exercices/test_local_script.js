//include("C:/Users/LE SOCLE/Documents/GitHub/StrokeCenterAsPegPivot/StrokeCenterAsPegPivot.js")
include("C:/Users/LE SOCLE/Documents/GitHub/FormationScriptingFunctions/scripting_functions.js")
function boutton_test(){
    StrokeCenterAsPegPivot()
}

// testing premade function for students

function TEST_exposotion(){
    var selected_node = selection.selectedNode(0)
    var result = FSH_get_exposed_sub(selected_node)
    MessageLog.trace(result)
}
function TEST_transform(){
    var selected_node = selection.selectedNode(0)
    var result = FSH_get_substitutions(selected_node)
    MessageLog.trace(result)
} 
function TEST_Attributes(){
    var selected_node = selection.selectedNode(0)
    FSH_show_attributes(selected_node)
    
}
function TEST_B(){
    var selected_node = selection.selectedNode(0)
    
}