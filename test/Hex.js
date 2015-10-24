var chai = require('chai');
chai.use(require('chai-properties'));
chai.should();

var Hex = require('../js/Hex.js')
describe('Hex', () => {
    var hex = new Hex(3, 4);
    var nbrs = [new Hex(4, 4), new Hex(4, 3), new Hex(3, 3),
                new Hex(2, 4), new Hex(2, 5), new Hex(3, 5)];
    describe('#constructor', () => {
        it('should not change q and r', () => {
            hex.q.should.equal(3);
            hex.r.should.equal(4);
        });
        it('should compute s correctly', () => {
            hex.s.should.equal(-3-4);
            var hex_neg = new Hex(3, -4);
            hex_neg.s.should.equals(-3 + 4);
        });
    });
    describe('#neighbor', () => {
        it('should find the right hex in each given direction', () => {
            nbrs.forEach((nbr, i) => {
                hex.neighbor(i).should.have.properties(nbr.coords);
            });
        });
        it('should produce the correct list of immediate neighbors', () => {
            n = hex.neighbors();
            n.should.be.an('array');
            n.should.have.length(6);
            nbrs.forEach((nbr, i) => {
                n[i].should.have.properties(nbr.coords);
            });
        });
    });

});
