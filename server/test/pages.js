const assert = require('assert');
const Page = require('../models/Page');


describe('Pages model', () => {
  const page = new Page({
    name: "about",
    title: "About Me",
    content: "Lorem ipsum forever!"
  });

  it('can save a page.', (done) => {
    Page.init()
      .then(() => {
        page.save()
          .then(() => {
            const pageQuery = Page.findOne({name: "about"});
            pageQuery.exec((err, page) => {
              assert(page.name === 'about');
              assert(page.title === 'About Me');
              assert(page.content === 'Lorem ipsum forever!');
              done();
            });
          });
      });
  });


  it('should validate a non-empty name', (done) => {
    const blank = new Page({ name: '' });
    const validationResult = blank.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Page name is required.');
    done();
  });


  it('should validate unique name', (done) => {
    const page2 = new Page({ name: 'about' });
    page2.save()
      .then(() => {})
      .catch((error) => {
        assert(error.code === 11000);
        done();
      });
  });
});