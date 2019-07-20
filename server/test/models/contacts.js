const assert = require('assert');
const Contact = require('../../src/models/Contact');


describe('Contact model', () => {
  const contact = new Contact({
    name: 'Christopher',
    email: 'chris@toph.er',
    message: 'Hi there!'
  });

  after(done => {
    Contact.deleteOne({name: 'Christopher', email: 'chris@toph.er'})
      .then(() => done());
  });

  it('should save a Contact', done => {
    contact.save()
      .then(() => Contact.findOne({name: 'Christopher', email: 'chris@toph.er'}))
      .then(contact => {
        assert(contact.name === 'Christopher');
        assert(contact.email === 'chris@toph.er');
        assert(contact.message === 'Hi there!');
        done();
      });
  });

  it('should validate an empty name', done => {
    const blank = new Contact({ name: ''});
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'We need your name.');
    done();
  });

  it('should validate an empty email', done => {
    const blank = new Contact({ name: 'Christopher', email: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.email;

    assert(message === 'We need your email.');
    done();
  });

  it('should validate an empty message', done => {
    const blank = new Contact({ name: 'Christopher', email: 'chris@toph.er', message: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.message;

    assert(message === 'Say something.');
    done();
  });
});