import { OnlineExamPage } from './app.po';

describe('online-exam App', () => {
  let page: OnlineExamPage;

  beforeEach(() => {
    page = new OnlineExamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
