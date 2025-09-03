function dire_bonjour(){

    var msg = "¤¤ hello les chouchoux ¤¤  \n Passez une belle journée \n pleine de rigg de l'amour \n "
    var emot = "❤️‍🔥❤️‍🔥"
// MessageBox.information (msg + emot)

    var addonLove = (emot += emot) 

    MessageBox.information (msg + addonLove) 

    MessageBox.information (addonLove) 
    
    addonLove += emot

    MessageBox.information (addonLove) 
    
    addonLove += emot

    MessageBox.information (addonLove) 

    addonLove += emot

    MessageBox.information (addonLove)
    
// affiche le message de bonjour + l'amour
}