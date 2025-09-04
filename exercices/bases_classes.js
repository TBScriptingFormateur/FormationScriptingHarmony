function class_demo(){

    var file = new File("C:/Users/LE SOCLE/Documents/GitHub/FormationScriptingHarmony/exercices/fiche_perso_dnd.json")
    file.open(FileAccess.ReadOnly)
    var content = file.read()
    

    var creation_list = JSON.parse(content).list_de_node
    for(var i in creation_list ){
        const cnode = creation_list[i]
        MessageLog.trace(cnode.name)
        node.add("Top",cnode.name,cnode.type,cnode.x,cnode.y,0)
    }



}


