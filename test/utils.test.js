
const utils = require('../utils/utils');
const expect = require('chai').expect;

describe('isEmpty', function() {
    it('should be false', function() {
        expect(utils.isEmpty(1)).to.be.false;
    });
    it('should be true', function() {
        expect(utils.isEmpty('')).to.be.true;
    });
    it('should be false', function() {
        expect(utils.isEmpty('eee')).to.be.false;
    });
});
describe('isInStrings', function() {
    it('C should be true', function() {
        expect(utils.isInStrings('C')).to.be.true;
    });
    it('PF should be true', function() {
        expect(utils.isInStrings('PF')).to.be.true;
    });
    it('SF should be true', function() {
        expect(utils.isInStrings('SF')).to.be.true;
    });
    it('PG should be true', function() {
        expect(utils.isInStrings('PG')).to.be.true;
    });
    it('SG should be true', function() {
        expect(utils.isInStrings('SG')).to.be.true;
    });
    it('eee should be false', function() {
        expect(utils.isInStrings('eee')).to.be.false;
    });
    it('should be false', function() {
        expect(utils.isInStrings('')).to.be.false;
    });
    it('1111 should be false', function() {
        expect(utils.isInStrings(111)).to.be.false;
    });
});

describe('isNumber', function() {
    it('true should be false', function() {
        expect(utils.isNumber(true)).to.be.false;
    });
    it('false should be true', function() {
        expect(utils.isNumber(false)).to.be.false;
    });
    it('3.3 should be false', function() {
        expect(utils.isNumber(3.3)).to.be.false;
    });
    it('0 should be true', function() {
        expect(utils.isNumber(0)).to.be.false;
    });
    it('-1 should be false', function() {
        expect(utils.isNumber(-1)).to.be.false;
    });
    it('eee should be false', function() {
        expect(utils.isNumber('eee')).to.be.false;
    });
    it('should be false', function() {
        expect(utils.isNumber('')).to.be.false;
    });
    it('1111 should be true', function() {
        expect(utils.isNumber(111)).to.be.true;
    });
    it('should be false', function() {
        expect(utils.isNumber()).to.be.false;
    });
    it('null should be false', function() {
        expect(utils.isNumber(null)).to.be.false;
    });
});

