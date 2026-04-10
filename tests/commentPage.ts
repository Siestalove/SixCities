import { Locator, Page } from '@playwright/test';

export class CommentPage {
  private readonly page: Page;
  private readonly url: string;

  public readonly reviewForm: Locator;
  public readonly commentTextArea: Locator;
  public readonly submitButton: Locator;
  public readonly reviewItems: Locator;
  public readonly reviewText: Locator;
  public readonly loginMessage: Locator;
  public readonly loginLink: Locator;

  constructor(page: Page, url = 'http://localhost:5173/offer/c2e8782b-49d8-46b0-b7ca-fb0a68ca1eda') {
    this.page = page;
    this.url = url;

    this.reviewForm = this.page.locator('.reviews__form');
    this.commentTextArea = this.page.locator('#review');
    this.submitButton = this.page.locator('.reviews__submit');
    this.reviewItems = this.page.locator('.reviews__item');
    this.reviewText = this.page.locator('.reviews__text');
    this.loginMessage = this.page.locator('.reviews__login-message');
    this.loginLink = this.page.locator('.reviews__login-link');
  }

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async selectRating(stars: number): Promise<void> {
    await this.page.locator(`.reviews__rating-label[for="${stars}-stars"]`).click();
  }

  public async writeComment(text: string): Promise<void> {
    await this.commentTextArea.fill(text);
  }

  public async submit(): Promise<void> {
    await this.submitButton.click();
  }

  public async sendReview(rating: number, comment: string): Promise<void> {
    await this.reviewForm.scrollIntoViewIfNeeded();
    await this.selectRating(rating);
    await this.writeComment(comment);
    await this.submit();
  }

  public async getReviewsCount(): Promise<number> {
    return await this.reviewItems.count();
  }

  public async getLastReviewText(): Promise<string> {
    const lastReview = this.reviewItems.last();
    return await lastReview.locator('.reviews__text').textContent() || '';
  }

  public async isLoginMessageVisible(): Promise<boolean> {
    return await this.loginMessage.isVisible();
  }

  public async getLoginMessageText(): Promise<string> {
    return await this.loginMessage.textContent() || '';
  }
}
