// 20 pixels = 1 cm
const stage = document.getElementById("stage");

// To hold scenes later
let blocks = [];
let divs = [];

const scene = new Scene(stage);

blocks = scene.block_array;
divs = scene.blockDiv_array;

load_ready = true;

// Main "game" loop
setInterval(() => {
    update_scene(scene);

    update_options();

}, 20);
