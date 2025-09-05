
function for_balles() {


    var radius = 100
    var translate_x = 0
    var translate_y = 0
    var circle_width = radius*2
    var random_space =1000
    var circle_color = ""

    const colors = ["0cc85dd2aec01776","0cc85dd2aec0177c","0cc85dd2aec01779","0cc85dd2aec01773"]


    for(var i= 0 ; i < 20 ; i++){
        translate_x =random_int(-random_space,random_space)
        translate_y =random_int(-random_space,random_space)
        circle_color = colors[random_int(0,colors.length-1)]
        createCircle(translate_x,translate_y,radius,circle_color)
    }


}


function for_loop() {

    // coucou ça va ? 

    for (var i = 0; i < 10; i++) {
        MessageLog.trace(roll_dice())
    }


}

function random_int(_min, _max) {
    // renvoie une valeur int entre _min et _max compris 
    return Math.round(Math.random() * (_max - _min)) + _min
}

function roll_dice() {
    // lance un 6 des non DnD (standard!)
    return random_int(1, 6)
}

function createCircle(_x, _y, _radius, _color_id) {
    var settings = Tools.getToolSettings();
    if (settings.currentDrawing) {
        var cid = PaletteManager.getCurrentColorId();

        // settings.currentDrawing is a valid descriptor
        DrawingTools.createLayers({
            label: "Create Circle",
            drawing: settings.currentDrawing,
            art: settings.activeArt,
            layers: [
                {
                    contours: [
                        {
                            stroke: true,
                            colorId: _color_id,
                            polygon: false,
                            path: Drawing.geometry.createCircle({ x: _x, y: _y, radius: _radius })
                        }
                    ]
                }
            ]
        });
    }
}
