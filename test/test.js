var should = require('chai').should();

describe('demo', function() {
    describe('#integers', function() {
        it('should be equal to themselves', function() {
            (3).should.equal(3);
            (4).should.equal(4);
        });
    });
    describe('#strings', function() {
        it('should all have length 3', function() {
            "abc".should.have.length(3);
            "xyz".should.have.length(3);
            "abcd".should.have.length(4);
            "cat".should.have.length(3);
        });
    });
});

