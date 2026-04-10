import { Locator, Page } from '@playwright/test';

export class AuthPage {
  constructor(page: Page, url = 'http://localhost:5173/login') {
    this.url = url;
    this.page = page;
    this.emailInput = this.page.locator('input[name="email"]');
    this.passwordInput = this.page.locator('input[name="password"]');
    this.signinButton = this.page.locator('button[name="sign-in-button"]');
  }

  private readonly url: string;

  private readonly page: Page;

  public readonly emailInput: Locator;

  public readonly passwordInput: Locator;

  public readonly signinButton: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }
}
