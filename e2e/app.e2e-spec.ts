import { MyWebPage } from './app.po';

describe('my-web App', () => {
  let page: MyWebPage;

  beforeEach(() => {
    page = new MyWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
