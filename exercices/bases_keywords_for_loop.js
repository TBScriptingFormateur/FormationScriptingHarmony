function for_loop() {

    // coucou ça va ? 

    var radius = 100
    var translate_x = 0
    var translate_y = 0
    var circle_width = radius * 2
    var random_space = 1000
    var circle_color = ""

    const colors = ["0cc89de19cc01168", "0cc89de19cc01165", "0cc89de19cc0115f", "0cc89de19cc01162"]

    scene.beginUndoRedoAccum ("for_loop")
    
    for (var i = 0; i < 20; i++) {
        
        translate_x = random_int(-random_space, random_space)
        translate_y = random_int(-random_space, random_space)
        circle_color = colors[random_int(0, colors.length - 1)]
        create_circle(translate_x, translate_y, radius, circle_color)
    }
    
    scene.endUndoRedoAccum()




}

function random_int(_min, _max) {
    // renvoie une valeur int entre _min et _max compris 
    return Math.round(Math.random() * (_max - _min)) + _min
}

function roll_dice() {
    // lance un 6 des non DnD (standard!)
    return random_int(1, 6)
}

function get_color_id(_color_name) {
    return "0cc89de19cc01168"
}

function create_circle(_x, _y, _radius, _color_id) {
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
                            path: Drawing.geometry.createCircle({ x: _x, y: _y, radius: _radius })
                        }
                    ]
                }
            ]
        });
    }
}