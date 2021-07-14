class Block {
    // ====================== Constructors ======================
    constructor(height, width, left, top, weight, color, parent) {
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.color = color;

        this.left = left;
        this.top = top;

        this.parent = parent;

        this.div = document.createElement("div");
        dragElement(this.div);
        
        this.build();

        // Add event listener for click to update position
        this.div.addEventListener('click', this.update);
    }

    // ====================== Getters ======================
    get_height() {
        return this.height;
    }
    get_width() {
        return this.width;
    }
    get_weight() {
        return this.weight;
    }
    get_color() {
        return this.color;
    }
    get_left() {
        return this.left;
    }
    get_top() {
        return this.top;
    }

    // ====================== Setters ======================
    set_height(h) {
        this.height = h;
        this.update();
    }
    set_width(w) {
        this.width = w;
        this.update();
    }
    set_weight(w) {
        this.weight = w;
        this.update();
    }
    set_color(c) {
        this.color = c;
        this.update();
    }
    set_left(l) {
        this.left = l;
        this.update();
    }
    set_top(t) {
        this.top = t;
        this.update();
    }

    // Updates position and what-not
    update() {
        console.log(this.div);
        this.div.style.height = this.height + "px";
        this.div.style.width = this.width + "px";
        this.div.style.backgroundColor = this.color;
        this.top = this.div.style.top;
        this.left = this.div.style.left;
        console.log({x: this.left, y: this.top});
    }

    // Build object in dom
    build() {
        this.div.style.position = "absolute";
        this.div.style.cursor = "pointer";
        this.div.style.top = this.top + "px";
        this.div.style.left = this.left + "px";
        this.update();
        this.parent.appendChild(this.div);
    }

}