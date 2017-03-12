import { MontyHallPage } from './app.po';

describe('monty-hall App', function() {
  let page: MontyHallPage;

  beforeEach(() => {
    page = new MontyHallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
