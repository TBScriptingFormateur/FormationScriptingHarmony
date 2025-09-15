include("C:/Users/Utilisateur/Documents/MARION/GITHUB/RenameTransformationBySubstitution/RenameTransformationBySubstitution.js")

function bouton_test() {
    RenameTransformationBySubstitution()
}




function outputTransformationNames() {
  var transformationSwitchNodes = node.getNodes(["TransformationSwitch"]);
  if (transformationSwitchNodes.length > 0) {
    var transformationNamesAttribute = node.getAttr(transformationSwitchNodes[0], 1, "TransformationNames");
    
    if( transformationNamesAttribute ) 
    {
      var subAttributes = transformationNamesAttribute.getSubAttributes();
      for (var i = 0; i < subAttributes.length; i++) 
      {
        MessageLog.trace("subAttribute " + i + ", name: " + subAttributes[i].name() + ", value: " + subAttributes[i].textValue());
      }
    }
  }
}

function FSH_get_exposed_sub(_node, _frame) {

    //MessageLog.trace("FSH_get_exposed_sub ("+_node+") ("+_frame+")")
    // return all the name of the exposed sub at a frame
    const aframe = _frame != undefined ? _frame : frame.current()
    if (node.type(_node) != "READ") {
        //MessageLog.trace("Error node "+_node+" is not a READ ")
        return
    }
    var previously_selected_nodes = selection.selectedNodes()
    selection.clearSelection()
    selection.addNodeToSelection(_node)
    var readcol = Timeline.selToColumn(0);
    var sub_name = column.getEntry(readcol, 1, aframe);
    selection.clearSelection()
    selection.addNodesToSelection(previously_selected_nodes)
    //MessageLog.trace("return ("+sub_name+")")
    return sub_name
}
