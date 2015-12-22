var chai = require('chai');
chai.use(require('chai-properties'));
chai.should();

var HashTable = require('../js/HashTable.js')
describe('HashTable', () => {
    var hash;
    beforeEach((done) => {
        hash = new HashTable();
        done();
    });
    describe('#put,get', () => {
        it('puts and gets strings', () => {
            hash.put('str1', 'val1');
            hash.put('str2', 'val2');
            hash.get('str1').should.equal('val1');
            hash.get('str2').should.equal('val2');
        });
        it('overrides string keys correctly', () => {
            hash.put('str1', 'val1');
            hash.put('str1', 'val2');
            hash.get('str1').should.equal('val2');
        });
        it('puts and gets objects', () => {
            var obj1 = {};
            var obj2 = {};
            var obj3 = {a: 'foo'};
            var obj4 = {a: 'bar'};
            hash.put(obj1, 'val1');
            hash.put(obj2, 'val2');
            hash.put(obj3, 'val3');
            hash.put(obj4, 'val4');
            hash.get(obj1).should.equal('val1');
            hash.get(obj2).should.equal('val2');
            hash.get(obj3).should.equal('val3');
            hash.get(obj4).should.equal('val4');
        });
        it('overrides object keys correctly', () => {
            var obj1 = {};
            var obj2 = {a: 'foo'};
            hash.put(obj1, 'val1');
            hash.put(obj1, 'val2');
            hash.put(obj2, 'val3');
            hash.put(obj2, 'val4');
            hash.get(obj1).should.equal('val2');
            hash.get(obj2).should.equal('val4');
        });
    });
    describe('#constructor', () => {
        it('accepts a list of Ks and Vs together', () => {
            var obj = {};
            var hash1 = new HashTable(['foo', 'key1', obj, 'key2']);
            hash1.get('foo').should.equal('key1');
            hash1.get(obj).should.equal('key2');
        });
        it('accepts a list of Ks and a list of Vs', () => {
            var obj = {};
            var hash1 = new HashTable(['foo', obj], ['key1', 'key2']);
            hash1.get('foo').should.equal('key1');
            hash1.get(obj).should.equal('key2');
        });
    });
});
