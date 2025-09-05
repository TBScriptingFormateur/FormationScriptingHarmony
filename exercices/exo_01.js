function put_glasses_on_dog(){
    var glass_node = "Top/GLASSES-P"
    var target_position = {
        x:12,
        y:7
    } 
    MessageLog.trace(JSON.stringify(target_position))
    node.setTextAttr(glass_node, "POSITION.X",0,target_position.x)
    node.setTextAttr(glass_node, "POSITION.Y",0,target_position.y)

}