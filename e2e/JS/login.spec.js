
import { test, expect } from '@playwright/test';

import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";


test('Login', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('heading', { name: 'My Issues' });
  await page.getByRole('columnheader', { name: '/04/27 - 17:57' });
  await page.getByRole('textbox', { name: 'Enter your birthday:' }).fill('2025-04-28');

  await expect(page.getByRole('heading', { name: 'My Issues' })).toContainText('My Issues');

  await page.screenshot({ path: 'allure-results/login/screenshot1.png' });

// ALLURE Report info
  await allure.severity("critical");
  await allure.epic("Web interface");
  await allure.feature("Essential features");
  await allure.story("Authentication");
  await allure.attachment("Text file", "This is the file content.", ContentType.TEXT);
  await allure.attachmentPath("Screenshot", "allure-results/login/screenshot1.png", {
    contentType: ContentType.PNG,
    fileExtension: "png",
  });

});



