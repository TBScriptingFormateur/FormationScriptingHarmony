function for_loop() {

    // coucou ça va ? 

    for(var i= 0 ; i < 10 ; i++){
        MessageLog.trace(roll_dice())
    }


}

function random_int(_min,_max){
    // renvoie une valeur int entre _min et _max compris 
    return Math.round(Math.random()*(_max-_min))+_min
}

function roll_dice(){
    // lance un 6 des non DnD (standard!)
    return random_int(1,6)
}

function get_color_id(_color_name){
    return "0cc89de19cc01168"
}

function create_circle(_x,_y,_radius,_color_id) {
    var settings = Tools.getToolSettings();
    if (settings.currentDrawing) {
        var cid = PaletteManager.getCurrentColorId();

        // settings.currentDrawing is a valid descriptor
        DrawingTools.createLayers({
            label: "Create Big Circle",
            drawing: settings.currentDrawing,
            art: settings.activeArt,
            layers: [
                {
                    contours: [
                        {
                            stroke: true,
                            colorId: _color_id,
                            polygon: false,
                            path: Drawing.geometry.createCircle({ x: _x, y: _y, radius: _radius})
                        }
                    ]
                }
            ]
        });
    }
}