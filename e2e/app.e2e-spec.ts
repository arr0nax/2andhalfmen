import { TwoandhalfmenPage } from './app.po';

describe('twoandhalfmen App', () => {
  let page: TwoandhalfmenPage;

  beforeEach(() => {
    page = new TwoandhalfmenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
