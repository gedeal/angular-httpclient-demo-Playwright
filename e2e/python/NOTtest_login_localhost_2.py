import re
import playwright
from playwright.sync_api import Page, expect, Playwright, sync_playwright
from time import sleep


def run(playwright: Playwright) -> None:
# def run(context) :
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://localhost:4200/add-issue")
    page.get_by_role("heading", name="image my horse  My Issues").click()
    page.get_by_role("button", name="Add").click()
    sleep(1)
    page.get_by_role("button", name="My List").click()
    sleep(1)

    expect(page.get_by_role("rowheader", name="3172"))
    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)