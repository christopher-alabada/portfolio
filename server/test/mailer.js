const assert = require('assert');
const mailer = require('../src/mailer/mailer');


describe('Mailer service', () => {
  it('Should send an email through SendGrid', done => {
    mailer.sendEmail()
      .then(res => {
        assert(res);
        done();
      })
      .catch(err => {
        assert(!err);
        done();
      });
  });
});