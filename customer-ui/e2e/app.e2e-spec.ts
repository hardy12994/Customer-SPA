import { CustomerUiPage } from './app.po';

describe('customer-ui App', () => {
  let page: CustomerUiPage;

  beforeEach(() => {
    page = new CustomerUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
