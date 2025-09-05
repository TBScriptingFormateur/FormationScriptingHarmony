function translate_glasses() {
    var glass_node = "Top/GLASSES-P"
    var target_position = {
        x: -12,
        y: 7
    }
    //MessageLog.trace(JSON.stringify(target_position))

    node.setTextAttr(glass_node, "POSITION.X",frame.current(),target_position.x)
    node.setTextAttr(glass_node, "POSITION.Y",frame.current(),target_position.y)

}