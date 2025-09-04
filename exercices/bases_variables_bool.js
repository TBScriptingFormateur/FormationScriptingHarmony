function variable_bool(){

    var my_node = selection.selectedNode(0)
    var target_name1 = "Top/group"
    var target_name2 = "Top/Group"
    var my_bool = (my_node == target_name1) || (my_node == target_name2)
    MessageBox.information(my_node +" is "+target_name1+" or "+target_name2+" \n : "+my_bool)
    MessageLog.trace(my_bool)

} 
function variable_bool_and(){

    var my_node = selection.selectedNode(0)
    var node_type = node.type(my_node)
    var bool_type = node_type == ("READ" )|| ("WRITE")

    MessageLog.trace(bool_type)


}

function split_node(){

    var my_node = selection.selectedNode(0)
    var path_split = my_node.split("\n")

    MessageLog.trace(path_split.length-1)


}
function get_last_element(_array){
    var last_index = _array.length-1
    var lastElement = _array[last_index]
    return lastElement
}
function remplacer_un_mot(){
    var phrase = "la formation scripitng c'est trop bien"
    var list_de_mots = phrase.split("a").join("o")
    MessageLog.trace(list_de_mots)
}
function get_node_name(_node){
    var path_split = _node.split("/")
    MessageLog.trace(path_split)
    var last = path_split[path_split.length-1]
    MessageLog.trace(last)
    return last
}

function nombre_de_mot(){
    var phrase = "la formation scripitng c'est trop bien"
    var nb_de_mots = phrase.split(" ").length
    MessageLog.trace(nb_de_mots)
   // permet de savoir si une string est presente dans une autre string 
    var has_word_bien = phrase.indexOf("bien") != -1
}
function node_read_drawing(){

    var my_node = selection.selectedNode(0)
    var target_name = "Drawing"
    var target_type = "READ"

    var node_type = node.type(my_node)
    var node_name = node.getName(my_node)

    // on test si le node selectionne est de type READ et de nom Drawing 
    var my_bool = node_type == target_type && node_name == target_name 
    MessageLog.trace(my_bool)

}
function select_read(){
 
        node_type = ["READ","COMPOSITE","WRITE","DISPLAY"]

    
    selection.clearSelection()
    var list_de_node = node.getNodes(["READ"]) //ARRAY
    selection.addNodesToSelection(list_de_node)
    MessageBox.information(list_de_node.length+" drawings sélectionnés <3")


   
}


function banquise(){
var surface_de_la_banquise = 9 //m2
var surface_de_la_banquise_habitable = 10 //m2
var nombre_morses = 30
var nombre_pingouins = 30
var is_habitable = surface_de_la_banquise >= surface_de_la_banquise_habitable 
var nb_animaux_vivant_sur_la_banquise = (nombre_morses+nombre_pingouins) * is_habitable
console.log(nb_animaux_vivant_sur_la_banquise)
}

function choisis_ton_node_type(){
    var myDialog = new Dialog();
    myDialog.title = " ";
    var userInput = new ComboBox();
    userInput.label = "What node do you want to select?"
    userInput.editable = true;
    userInput.itemList = ["READ","COMPOSITE","WRITE","DISPLAY"];
    myDialog.add( userInput );
    if ( myDialog.exec() ){
        MessageLog.trace("Vous avez choisis " + userInput.currentItem + ".");

        return userInput.currentItem
    }
}

function select_all_node_by_type(){
    var node_type = choisis_ton_node_type()
       // MessageLog.trace(node_type)
    selection.clearSelection()
    var list_de_node = node.getNodes([node_type]) //ARRAY
    selection.addNodesToSelection(list_de_node)
    MessageBox.information(list_de_node.length +" "+ node_type + " DE SELECTIONNE <3")


   
}