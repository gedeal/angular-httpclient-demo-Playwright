# Created a Playwright Test project

## Inside that directory, you can run several commands:

  ```npx playwright test```
    Runs the end-to-end tests.

  ```npx playwright test --ui```
    Starts the interactive UI mode.

  ```npx playwright test --project=chromium```
    Runs the tests only on Desktop Chrome.

  ```npx playwright test example```
    Runs the tests in a specific file.

  ```npx playwright test --debug```
    Runs the tests in debug mode.

  ```npx playwright codegen```
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨




# Installing Playwright Pytest
- https://playwright.dev/python/docs/intro
```
    npm init playwright@latest

    pip install -U pytest
    pip install pytest-playwright
    playwright install
```


# Installing Allure Report
- https://allurereport.org/docs/playwright/


```
  npm install -g allure-commandline
  npm install --save-dev @playwright/test allure-playwright
```

- In the playwright.config.ts file, add Allure Playwright as a reporter.
```
  reporter: [["line"], ["allure-playwright"]],
```

# Run codegen UI
```
	playwright codegen  http://localhost:4200/add-issue
	
```

# Run Pytest
```
	pytest --headed
	
```

# Run JavaScript tests
```
	npx playwright test --headed
	npx playwright test example.spec.ts --headed
	
```
