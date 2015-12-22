_dirs = [0, 1, 2, 3, 4, 5];
var Hex = function(q, r) {
    this.q = q;
    this.r = r;
    this.s = -q-r;
    
    this.coords = { q: this.q, r: this.r, s: this.s };

    this.neighbor = (direction) => {
        var dir = hex_direction(direction);
        return new Hex(this.q + dir.q, this.r + dir.r);
    };
    this.neighbors = () => {
        return _dirs.map(x => this.neighbor(x));
    };
};

var directions = [
    new Hex( 1, 0), new Hex(1, -1), new Hex(0, -1),
    new Hex(-1, 0), new Hex(-1, 1), new Hex(0,  1)
];

function hex_direction(i) { return directions[i]; }

module.exports = Hex;
