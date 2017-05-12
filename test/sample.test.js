const chai = require("chai");
const expect = chai.expect;

describe('Testing setup', function() {
    describe('True is not false', function() {
        it('should return false', function() {
            expect(true).to.equal(true);
        });
    });
});