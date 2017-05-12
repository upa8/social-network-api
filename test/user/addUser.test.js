const request = require('request');
const chai = require("chai");
const expect = chai.expect;
const config = require('../../config/config.dev');
const faker = require('faker');


describe('Should add user into database', function() {
    it('should fail due to incorrect arguments', function(done) {
        // check whether server is up or not
        request.post(config.apiUrl+'api/user', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should add user in database', function (done) {
        var options = {
            url: config.apiUrl+'api/user',

        }

        var formData = {
            email: faker.internet.email,
            name: faker.internet.name
        };
        request.post(config.apiUrl+'api/user',{form : formData}, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    })
});

