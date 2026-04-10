import { Locator, Page } from '@playwright/test';

export class SortPage {
  constructor(page: Page, url = 'http://localhost:5173/') {
    this.url = url;
    this.page = page;
    this.sortButton = this.page.locator('.places__sorting-type');
    this.sortOptions = this.page.locator('.places__option');
    this.sortOptionLowToHigh = this.page.locator('.places__option', { hasText: 'Price: low to high' });
    this.sortOptionHighToLow = this.page.locator('.places__option', { hasText: 'Price: high to low' });
    this.sortOptionTopRated = this.page.locator('.places__option', { hasText: 'Top rated first' });
    this.offerCards = this.page.locator('.place-card');
    this.offerPrices = this.page.locator('.place-card .price, .place-card__price, [data-testid="price"]');
  }

  private readonly url: string;

  private readonly page: Page;

  public readonly sortButton: Locator;

  public readonly sortOptions: Locator;

  public readonly sortOptionLowToHigh: Locator;

  public readonly sortOptionHighToLow: Locator;

  public readonly sortOptionTopRated: Locator;

  public readonly offerCards: Locator;

  public readonly offerPrices: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }

  private async waitForSortingComplete(): Promise<void> {
    await this.page.waitForTimeout(300);
  }

  public async sortByPriceLowToHigh(): Promise<void> {
    await this.sortButton.click();
    await this.sortOptionLowToHigh.click();
    await this.waitForSortingComplete();
  }

  public async sortByPriceHighToLow(): Promise<void> {
    await this.sortButton.click();
    await this.sortOptionHighToLow.click();
    await this.waitForSortingComplete();
  }

  public async sortByTopRated(): Promise<void> {
    await this.sortButton.click();
    await this.sortOptionTopRated.click();
    await this.waitForSortingComplete();
  }

  public async getPrices(): Promise<number[]> {
    const priceTexts = await this.offerPrices.allTextContents();
    return priceTexts.map((price) => {
      const match = price.match(/\d+/);
      return match ? parseInt(match[0], 10) : 0;
    });
  }

  public async getRatings(): Promise<number[]> {
    const cards = await this.offerCards.all();
    const ratings: number[] = [];
    for (const card of cards) {
      const ratingElement = card.locator('.rating, .place-card__rating, [class*="rating"]').first();
      const style = await ratingElement.getAttribute('style');
      if (style) {
        const widthMatch = style.match(/width:\s*(\d+(?:\.\d+)?)%/);
        if (widthMatch) {
          const width = parseFloat(widthMatch[1]);
          const rating = (width / 100) * 5;
          ratings.push(rating);
          continue;
        }
      }
    }
    return ratings;
  }


  public async isPriceSortedAscending(): Promise<boolean> {
    const prices = await this.getPrices();
    return prices.every((price, i) => i === 0 || price >= prices[i - 1]);
  }

  public async isPriceSortedDescending(): Promise<boolean> {
    const prices = await this.getPrices();
    return prices.every((price, i) => i === 0 || price <= prices[i - 1]);
  }

  public async isRatingSortedDescending(): Promise<boolean> {
    const ratings = await this.getRatings();
    return ratings.every((rating, i) => i === 0 || rating <= ratings[i - 1]);
  }

}
