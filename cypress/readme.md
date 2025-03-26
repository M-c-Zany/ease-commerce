EaseCommerce Cypress Automation

Project Structure

This project automates API and UI tests for the EaseCommerce platform using Cypress.

Folder & File Structure:


project-root/
│── cypress/
│   ├── e2e/s
│   │   ├── Task1.cy.js        # API automation tests
│   │   ├── Task2.cy.js        # UI automation tests
│   ├── support/
│   │   ├── locators.js        # Locator mappings for UI elements
│   ├── fixtures/
│   │   ├── demo.xlsx          # Sample file used for file upload testing
│── cypress.config.js          # Cypress configuration file
│── README.md                  # Project documentation



Files Overview

1. `cypress/e2e/Task1.cy.js` (API Automation Tests)
- Contains API test cases for the EaseCommerce platform.
- Covers login authentication, warehouse management APIs, and negative test scenarios.
- Uses `cy.request()` to send API requests and validate responses.

2. `cypress/e2e/Task2.cy.js` (UI Automation Tests)
- Automates UI workflows like login, switching views, and task creation.
- Uses Cypress commands to interact with web elements using `cy.get()`.
- Verifies form validation and file upload functionality.

3. `cypress/support/locators.js` (Locator File)
- Stores element locators for better maintainability.
- Uses unique CSS selectors and data-test attributes.
- Example locators:
  - `locators.login.UserName` → Username input field
  - `locators.taskForm.SubCategory` → Task form subcategory dropdown

4. `cypress/fixtures/demo.xlsx` (Sample File for Upload Testing)
- Test file used in UI test cases to verify file upload functionality.

5. `cypress.config.js` (Configuration File)
- Defines global settings for Cypress tests.
- Sets `baseUrl` for API requests (`https://easecommerce.in/api/v2`).
- Stores environment variables like login credentials.


How to Run Tests

Install Dependencies:
npm install


Run API Tests:
npx cypress run --spec cypress/e2e/Task1.cy.js


Run UI Tests:
npx cypress open
# Select Task2.cy.js in Cypress Test Runner
