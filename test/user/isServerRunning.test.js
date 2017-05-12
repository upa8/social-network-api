const request = require('request');
const chai = require("chai");
const expect = chai.expect;
const config = require('../../config/config.dev');

describe('Testing server running or not', function() {
    it('should return true if server is running', function(done) {
        request(config.apiUrl+'testingServer', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

