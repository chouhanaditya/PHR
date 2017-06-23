import { PHRPage } from './app.po';

describe('phr App', () => {
  let page: PHRPage;

  beforeEach(() => {
    page = new PHRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
