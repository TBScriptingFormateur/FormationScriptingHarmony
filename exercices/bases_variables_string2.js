function string_2(){

   var nodes = selection.selectedNodes()
   MessageBox.information("❤️"+nodes.join("\n"+"❤️"))
//   MessageBox.information("Bravo vous avez sélectionné "+ nodes.length + " nodes")

for (var indexNodes in nodes){
    MessageBox.information(nodes[indexNodes]+"❤️")
}

}