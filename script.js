// 20 pixels = 1 cm
const stage = document.getElementById("stage");


load_ready = true;

// Main "game" loop
setInterval(() => {
    update_blocks(time_elapsed());

    grab_form();

}, 20);
