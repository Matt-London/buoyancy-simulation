let wood = new Block(100, 100, 100, 100, 2, 10, true, "images/wood.jpg", document.body, true, true, true);
let base = new Block(50, window.innerWidth - 300, 150, window.innerHeight - 55, 1, 1, false, "#3CB043", document.body, true, false, false);
let left = new Block(200, (window.innerWidth - 300) / 4, 150, window.innerHeight - 305, 1, 1, false, "#3CB043", document.body, true, true, false);
let right = new Block(200, (window.innerWidth - 296) / 4, window.innerWidth - 151 - ((window.innerWidth - 300) / 4), window.innerHeight - 305, 1, 1, false, "#3CB043", document.body, true, true, false);

let water = new Block(200, (window.innerWidth - 300) / 2, left.right, window.innerHeight - 255, 1, 1, false, "rgba(41, 83, 172, 0.8)", document.body, false, false, false);
water.div.style.pointerEvents = "none";

let scale = new Scale(75, 150, 200, 100, document.body);

const blocks = [wood, base, water, left, right, scale];
const divs = [wood.div, base.div, water.div, left.div, right.div, scale.div];

// Main "game" loop
setInterval(() => {
    update_blocks(time_elapsed());

}, 20);
