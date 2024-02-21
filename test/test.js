// TEST SCRIPTS
// we'll use mocha and supertest to test the server

const request = require('supertest');
const app = require('../server');

describe('GET & POST /', () => {
    // test script for GET / route
    // the normal response should be a 200 status code and a JSON object with a message property
    // the message property should be equal to "Jambo"
    it('responds with a JSON object with a message property equal to "Jambo"', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                if (res.body.message === 'Jambo') {
                    done();
                } else {
                    done(new Error('Expected message property equal to "Jambo"'));
                }
            });
    });

    // test script for POST / route
    // we'll send a JSON object with a message property equal to "Jambo"
    // the normal response should be a 201 status code and a JSON object with a message property equal to "Jambo (From José)"
    // if the message property is not equal to "Jambo", the response should be a 400 status code
    
    it('responds with the same JSON object in the request', (done) => {
        request(app)
            .post('/')
            .send({ message: 'Jambo' })
            .expect('Content-Type', /json/)
            .expect(201, { message: 'Jambo (From José)' }, done);
    });

    it('responds with a 400 status code if the message property is not equal to "Jambo"', (done) => {
        request(app)
            .post('/')
            .send({ message: 'Hello, World' })
            .expect(400, done);
    });
});