let request = require('request');
let assert = require('assert');
let { expect } = require('chai');
const port = require('./../src/index');
let base_url = "http://localhost:5000/";

describe('GET /', () => {
    it('returns status code 200', () => {
        request.get(base_url, (err, res, body) => {
            assert.equal(200, res.statusCode);
            done();
        })
    })
})