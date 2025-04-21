import re
import playwright
from playwright.sync_api import Page, expect, Playwright, sync_playwright
from time import sleep

def test_has_title(page:Page):
    page.goto(" http://localhost:4200/")
    # browser = page.chromium.launch(headless=False)
    # context = browser.new_context()
    # page = context.new_page()

    # Expect a title 'to contain' a substring.
    expect(page.get_by_role("heading", name="image my horse  My Issues"))
    sleep(1)


def test_list(page:Page):
    page.goto(" http://localhost:4200/")
    # browser = page.chromium.launch(headless=False)
    # context = browser.new_context()
    # page = context.new_page()

    page.get_by_role("heading", name="image my horse  My Issues").click()
    page.get_by_role("button", name="Add").click()
    sleep(1)
    page.get_by_role("button", name="My List").click()
    sleep(1)

    expect(page.get_by_role("rowheader", name="3172"))


def test_has_title3(page:Page):
    page.goto(" http://localhost:4200/")
    # browser = page.chromium.launch(headless=False)
    # context = browser.new_context()
    # page = context.new_page()

    # Expect a title 'to contain' a substring.
    expect(page.get_by_role("heading", name="image my horse  My Issues"))
    sleep(1)