include("C:/Users/Utilisateur/Documents/MARION/GITHUB/RenameTransformationBySubstitution/RenameTransformationBySubstitution.js")

function bouton_test() {
    RenameTransformationBySubstitution()
}


function transformationSwitch_exp(){
    var SelectedTransSwitch =selection.selectedNode(0)
    MessageLog.trace(JSON.stringify(SelectedTransSwitch))
}