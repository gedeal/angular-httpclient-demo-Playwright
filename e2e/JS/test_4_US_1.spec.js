
import { test, expect } from '@playwright/test';

import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

test('has title', async ({ page }) => {
    // Resize viewport
    //const viewport = page.viewportSize();
    //const newWidth = viewport.width -800;
    //const newHeight = viewport.height -500;
    // Set the new viewport size
    //await page.setViewportSize({ width: newWidth, height: newHeight });
    
  // Test
    await page.goto('https://lejonmanen.github.io/agile-helper/');

  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Agile helper");

    await page.screenshot({ path: 'allure-report/screenshot_1.png' });
    await allure.attachmentPath("Screenshot 1", "allure-report/screenshot_1.png", {
      contentType: ContentType.PNG,
      fileExtension: "png",
      scale:'css', 
      quality: 50
    });

    await page.getByRole('button', { name: 'First' }).click();

    await page.getByRole('button', { name: 'Sprint planning' }).click();

    //await expect(page).tobevisible("Sprint planning")
    await expect(page.locator('h2')).toContainText("Sprint planning");

    await page.screenshot({ path: 'allure-report/screenshot_2.png' });
    await allure.attachmentPath("Screenshot_2", "allure-report/screenshot_2.png", {
      contentType: ContentType.PNG,
      fileExtension: "png",
    });

    await page.getByRole('button', { name:"Ok we're done. Start the sprint!"}).click();

    await expect(page.getByRole('button',{name:" Start over"})).toBeVisible

    await page.screenshot({ path: 'allure-report/screenshot_3.png' });


    await allure.attachment("Test 1-Text file", "This is the file content.", ContentType.TEXT);

    await allure.attachmentPath("Screenshot 3", "allure-report/screenshot_3.png", {
      contentType: ContentType.PNG,
      fileExtension: "png",
    });



});

