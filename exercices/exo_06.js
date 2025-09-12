function fixTheHouse() {
    var list_Pegs = selection.selectedNodes()

    //MessageLog.trace(list_Pegs)


    for (var i in list_Pegs) {
        // MessageLog.trace(list_Pegs[i])
        if (node.type(list_Pegs[i]) != "PEG") {
            MessageLog.trace("Ce node n'est pas un peg")
        }
        else {
            actual_rot = node.getTextAttr(list_Pegs[i], frame.current(), "ANGLE")
            target_rot = node.getTextAttr(list_Pegs[i], frame.current(), "SKEW")

            //MessageLog.trace(target_rot)

            node.setTextAttr(list_Pegs[i], "ANGLE", frame.current(), target_rot)
            node.setTextAttr(list_Pegs[i], "SKEW", frame.current(), 0)

        }


    }

}