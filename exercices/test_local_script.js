include("C:/Users/Utilisateur/Documents/MARION/GITHUB/RenameTransformationBySubstitution/RenameTransformationBySubstitution.js")

function bouton_test() {
    RenameTransformationBySubstitution()
}

function FSH_show_attributes(_node, _frame) {

    _node = selection.selectedNode(0)
    _frame = Timeline.firstFrameSel
    
    const aframe = _frame != undefined ? _frame : frame.current()
    var table = []
    var names = []
    attributes = node.getAttrList(_node, _frame)
    for (var a in attributes) {
        const attr = attributes[a]
        names.push(attr.fullKeyword())

        if (attr.hasSubAttributes()) {
            sub_attr = attr.getSubAttributes()
            for (var b in sub_attr) {
                var sub = sub_attr[b]
                names.push(sub.fullKeyword())
            }
        }

    }
}