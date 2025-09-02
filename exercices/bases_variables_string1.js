function saySomething(){

    var word = selection.selectedNode(0)
    word = word.slice(0, 4) 
    MessageBox.information(word)

}
function flame(){

    var message = "Bonjour"
    var flame = "🔥"

    for (i = 0; i < 5; i++ ){

        MessageBox.information(message)
        message += flame
        message += flame
        

    }
    

     



}
