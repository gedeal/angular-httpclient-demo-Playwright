import re
from playwright.sync_api import Page, expect,  sync_playwright


def run(page: Page) -> None:
    # browser = page.chromium.launch(headless=False)
    # context = browser.new_context()
    # page = context.new_page()
    page.goto("https://lejonmanen.github.io/agile-helper/")
    page.get_by_role("heading", name="Agile helper").click()
    page.get_by_text("What day of the sprint is it?").click()
    page.get_by_role("button", name="First").click()
    page.get_by_role("button", name="Start off the sprint with").click()
    page.get_by_role("heading", name="Sprint planning").click()
    page.get_by_text("6. When your time is up, you").click()
    page.get_by_role("button", name="Ok we're done. Start the").click()
    page.get_by_role("button", name="Start over").click()

    # ---------------------
    # context.close()
    # browser.close()


