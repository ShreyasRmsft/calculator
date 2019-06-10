var assert = require('assert');
 
describe('testsuite1', function () {
    
    this.timeout(2500);

    before(function () {
        
    });
  
    after(function () {
        
    });

    it('Test method 1', function (done) {
        throw("error");
    });

    it('Test method 2', function (done) {
        done("hello across \n multiple lines \n here");
    });

    it('Test method 3', function (done) {
        this.skip();
    });

    it('Test method 4', function (done) {
        this.skip();
    });

    it('Test method 5', function (done) {
        done("some stack trace");
    });

    it('Test method 6', function (done) {
        throw("some other error");
    });

    it('Test method 7', function (done) {
        done();
    });

    it('Test method 8', function (done) {
        done();
    });

    it('Test method 9', function (done) {

    });

    it('Test method 10', function () {

    });
});
