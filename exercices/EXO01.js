function put_Glasses() {
    // fonction bouton qui declenche le script
    var GlassNode = "Top/GLASSES-P"
    var target_coord = { // liste des ''objets'' pour la fonction
        target_x: -12, // target_x c'est la clé et 12 c'est la value
        target_y: 7
            }
    MessageLog.trace(JSON.stringify(target_coord)) // Affiche les coordonnées(c'est un objet) qu'on veut appliqué

    node.setTextAttr(GlassNode,"POSITION.X",frame.current(),target_coord.target_x) 
    node.setTextAttr(GlassNode,"POSITION.Y",frame.current(),target_coord.target_y) 
    
}


// function paste_coord (target_coord)