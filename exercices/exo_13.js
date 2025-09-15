function randomiseFace() {

   var node = selection.selectedNodes(0)

    //MessageLog.trace("You have selected "+ snode)
    /* est-ce que drawing = array et sub []?*/
    var nodesub = node.subNodes("Top");
    MessageLog.trace(nodesub)

    /*
    for (var nodeIndex in nodes) {
        var layerName = nodes.getTextAttr(nodes[nodeIndex], 1, "drawing.element.layer");
        MessageLog.trace(layerName)
        
        var elementId = node.getElementId(nodes[nodeIndex]);
        for (var j = 0; j < Drawing.numberOf(elementId); j++) {
            var drawingId = Drawing.name(elementId, j);
            var drawingKey = Drawing.Key({ elementId: elementId, layer: layerName, exposure: drawingId });
            DrawingTools.recolorDrawing(drawingKey, colorMapping);
            
        }
    }
    */


}