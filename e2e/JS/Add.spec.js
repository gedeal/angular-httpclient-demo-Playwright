
import { test, expect } from '@playwright/test';

import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/add-issue');

  await page.getByRole('button', { name: 'Add' }).click();
 
  await page.locator('input[type="text"]').fill('gerson was here');

  await page.locator('textarea').fill('ahahah\n!!\nåäö');
  await page.getByRole('button', { name: 'Submit' }).click();


  await page.getByRole('button', { name: 'My List' }).click();
 
  //await expect(page.getByText('cell').toContainText('gerson was here'));

  await page.screenshot({ path: 'allure-results/add/screenshot.png' });

// ALLURE Report info
  await allure.severity("normal");
  await allure.epic("Web interface");
  await allure.feature("Essential features");
  await allure.story("Authentication");
  await allure.attachment("Text file", "This is the file content.", ContentType.TEXT);
  await allure.attachmentPath("Screenshot", "allure-results/add/screenshot.png", {
    contentType: ContentType.PNG,
    fileExtension: "png",
  });

});



