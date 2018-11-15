var expect = require('expect');
var request = require('supertest');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Caroline';
    var text = 'Something good';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text})
  })
});

describe('generateLocationMessage', () => {
  it('should generate current location object', () => {
    var from = 'Admin';
    var url = 'https://www.google.com/maps?q=1,1';
    var message = generateLocationMessage(from, 1, 1);


    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url})
  });
});
