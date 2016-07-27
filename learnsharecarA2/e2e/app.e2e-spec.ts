import { LearnsharecarA2Page } from './app.po';

describe('learnsharecar-a2 App', function() {
  let page: LearnsharecarA2Page;

  beforeEach(() => {
    page = new LearnsharecarA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
