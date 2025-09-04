function add_static_to_selection() {
	/*
		Add a parent static_transform to the selected PEGs
	*/

	scene.beginUndoRedoAccum("Add Static to Selected Nodes");

	// Select Nodes
	var selected_nodes = selection.selectedNodes();

	// Parse all nodes
	for (i=0; i<selected_nodes.length; i++) {

		// Only look at PEGs
		if ( node.type(selected_nodes[i]) == 'PEG' ) {
			// Create new Static Transform Node
			var parent_node = node.parentNode(selected_nodes[i]);
			var new_name = node.getName(selected_nodes[i]);
			new_name = "St-Tr_" + new_name.slice(0, new_name.length-2);
			var xpos = node.coordX(selected_nodes[i]);
			var ypos = node.coordY(selected_nodes[i]) - 50;
			var zpos = node.coordZ(selected_nodes[i]);
			new_static = node.add(parent_node, new_name, 'StaticConstraint', xpos, ypos, zpos);
			
			// Bake Peg Attributes
			node.setTextAttr(new_static, "active", 0, true);
			node.link(selected_nodes[i], 0, new_static, 0);
			node.setTextAttr(new_static, "bakeAttr", 0, true);
			node.unlink(new_static, 0);

			// Link new Static transform
			if(node.srcNode(selected_nodes[i], 0) != "") {
				node.link(node.srcNode(selected_nodes[i], 0), 0, new_static, 0);
			}
			node.unlink(selected_nodes[i], 0);
			node.link(new_static, 0, selected_nodes[i], 0);
		}
	}

	// Reset nodes
	Action.perform("onActionResetAll()", "scene");
	
	scene.endUndoRedoAccum();
}