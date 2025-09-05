function forloop() {

    /*  var all = node.getNodes(["READ"])
      var color_id = Get_ColorID_by_name("Black")
      createMyCircle(0,0,100,"0cc8730d661016dd")
      createMyCircle(0,0,5,"0cc89de19cc01165")*/

    var list = ["a", "b", "c"]
    // on peut aussi mettre for (var i=0 ; i<10;i++)
    for (var index = 0; index < 10; index += 1) {
        MessageLog.trace(index)
    }
}


function collierPerle() {

    var radius = 10
    var translate_x = 0
    var circle_width = ((radius * 2) + 2)

    for (var index = 0; index < 10; index += 1) {
        var new_x = translate_x + circle_width
        createMyCircle(translate_x, 0, radius, "0cc8730d661016dd")

    }
}

function collierPerleA() {

    var radius = 10
    var translate_x = 0
    var translate_y = 0
    var circle_width = ((radius * 2) + 2)

    for (var i = 0; i < 20; i++) {
        if (i < 10) {
            translate_x += circle_width
            createMyCircle(translate_x, translate_y, radius, "0cc8730d661016dd")

        }
        else {
            translate_y += circle_width
            createMyCircle(translate_x, translate_y, radius, "0cc8730d661016dd")
        }

    }
}


function Collier_Perle3() {

var radius = 100
var translate_x = 0
var translate_y = 0
var circle_width = radius * 2
var random_space = 1000
var circle_color = ""

const colors = ["0cc89de19cc01168", "0cc89de19cc01165", "0cc89de19cc0115f", "0cc89de19cc01162"]

scene.beginUndoRedoAccum("cree collier random")

for (var i = 0; i < 20; i++) {
translate_x = random_int(-random_space, random_space)
translate_y = random_int(-random_space, random_space)
circle_color = colors[random_int(0, colors.length - 1)]
createMyCircle(translate_x, translate_y, radius, circle_color)
}

scene.endUndoRedoAccum()

}

function Get_ColorID_by_name(_color_name) {
return "0cc8730d661016dd"
}

function createMyCircle(_x, _y, _radius, _color_id) {
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

function random_int(_min, _max) {
// renvoie une valeur int entre _min et _max compris
return Math.round(Math.random() * (_max - _min)) + _min
}
function Roll_Dice() {
// lance un dice de 6 non DnD (standard!)
return random_int(1, 6)
}
