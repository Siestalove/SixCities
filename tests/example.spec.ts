import { test, expect } from '@playwright/test';
import { AuthPage } from './authPage';
import { SortPage } from './sortPage';
import { CommentPage } from './commentPage';

test('Аутентификация пользователя', async ({ page }) => {
  const authPage = new AuthPage(page);
  await authPage.load();

  await authPage.emailInput.click();
  await authPage.emailInput.fill('willovv4u@gmail.com');
  await authPage.passwordInput.click();
  await authPage.passwordInput.fill('Ghbdtnbr008');
  await authPage.signinButton.click();

  await expect(page).toHaveURL('http://localhost:5173/');
});

test('Работа сортировки предложений', async ({ page }) => {
  const sortPage = new SortPage(page);
  await sortPage.load();

  await sortPage.sortByPriceLowToHigh();
  const isSortedLowToHigh = await sortPage.isPriceSortedAscending();
  expect(isSortedLowToHigh).toBe(true);


  await sortPage.sortByPriceHighToLow();
  const isSortedHighToLow = await sortPage.isPriceSortedDescending();
  expect(isSortedHighToLow).toBe(true);


  await sortPage.sortByTopRated();
  const isSortedByTopRated = await sortPage.isRatingSortedDescending();
  expect(isSortedByTopRated).toBe(true);
});

test('Работа отправки комментария', async ({ page }) => {

  const commentPage = new CommentPage(page);
  await commentPage.load();
  await expect(commentPage.reviewForm).not.toBeVisible();
  await expect(commentPage.loginMessage).toBeVisible();
  await expect(commentPage.loginMessage).toContainText('Для написания отзыва пожалуйста авторизуйтесь');
  await expect(commentPage.loginLink).toBeVisible();
  await expect(commentPage.loginLink).toHaveAttribute('href', '/login');

  const authPage = new AuthPage(page);
  await authPage.load();
  await authPage.emailInput.fill('willovv4u@gmail.com');
  await authPage.passwordInput.fill('Ghbdtnbr008');
  await authPage.signinButton.click();

  await page.waitForURL('http://localhost:5173/', { timeout: 5000 });

  await page.goto('http://localhost:5173/offer/c2e8782b-49d8-46b0-b7ca-fb0a68ca1eda');
  const commentPageAuth = new CommentPage(page);
  await commentPageAuth.load();

  await commentPageAuth.reviewForm.waitFor({ state: 'visible', timeout: 10000 });
  await expect(commentPageAuth.reviewForm).toBeVisible();

  const reviewText = 'Отличное место! Чисто, уютно, все понравилось. Обязательно приеду еще!';
  await commentPageAuth.sendReview(5, reviewText);
  await page.waitForTimeout(1500);

  const lastReviewText = await commentPageAuth.getLastReviewText();
  expect(lastReviewText).toBe(reviewText);
});
