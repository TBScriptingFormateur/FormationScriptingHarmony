function string_2(){
/*
    var nodes = selection.selectedNodes()
    var win = "Bravo pour votre selection de "

    MessageBox.information(nodes)
    
    //MessageBox.information(nodes.join("\n"+"💥​"))
    //MessageBox.information("💥​"+nodes.join("\n"+"💥​"))

    
    MessageBox.information(win+nodes.length)
    */


    // var mots = "Bretagne"
    //for (var index in mots){
    //MessageBox.information(mots[index])

    //var list = ["a","b","c"]
   //  for (var index in mots){
   // MessageBox.information(mots[index])
    
    var nodes = selection.selectedNodes()
    var text = "Node count : "
    var list = nodes.length
    MessageBox.information(text+list+"\n"+"\n"+nodes.join("\n"))

    for (var index in nodes){
         MessageBox.information("💥"+nodes[index])

   }
}