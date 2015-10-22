require('chai').should();
var Hex = require('../js/Hex.js')

describe('Hex', () => {
    describe('#constructor', () => {
        it('should not change q and r', () => {
            var h = new Hex(3, 4);
            h.q.should.equal(3);
            h.r.should.equal(4);
        });
        it('should compute s correctly', () => {
            var h = new Hex(3, 4);
            h.s.should.equal(-3-4);
            h = new Hex(3, -4);
            h.s.should.equals(-3 + 4);
        });
    });
});
