import { locators } from "../support/locators";

const url = "https://easecommerce.in";
const credentials = {
  username: "demouser@easecommerce.in",
  password: "cE7iQPP^",
};

const login = () => {
  cy.visit(`${url}/app/login`);
  cy.viewport(1920, 1080);
  cy.get(locators.login.UserName).type(credentials.username);
  cy.get(locators.login.Password).type(credentials.password);
  cy.get(locators.login.LoginButton).click();
};

const switchToEmployeeView = () => {
  cy.get(locators.navigation.ThreeDots).click();
  cy.get(locators.navigation.Switch).should("have.text", "Switch to Employee").click();
  cy.url().should("include", "app/employee/task-management/tasks");
};

const selectDropdown = (locator, text) => {
  cy.get(locator).click().type(text);
  cy.contains(text).click();
};

describe("EaseCommerce UI Automation", () => {
  beforeEach(() => {
    login();
  });

  it("Login Test", () => {
    cy.get(locators.navigation.EaseLogo)
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", "/app/assets/ease-logo");
  });

  it("Switch to Employee View", () => {
    switchToEmployeeView();
  });

  it("Task Creation", () => {
    switchToEmployeeView();
    cy.get(locators.admin.AddTaskButton).click();

    // Fill in the Task Form
    selectDropdown(locators.taskForm.SuperCategory, "Marketing Campaign");
    selectDropdown(locators.taskForm.SubCategory, "Marketing Communication");
    selectDropdown(locators.taskForm.Portals, "Shopify");
    selectDropdown(locators.taskForm.Products, "Pure Temptation Chocoblast Waffle Cones");

    cy.get(locators.taskForm.TaskName).type("My Task Name", { delay: 100 }).should("have.value", "My Task Name");

    selectDropdown(locators.taskForm.AssignedTo, "Prachi Panchal");
    selectDropdown(locators.taskForm.Reviewer, "Prachi Panchal");
    selectDropdown(locators.taskForm.Priority, "Medium");

    cy.get(locators.taskForm.DueDate).type("20/12/2024", { force: true }).should("have.value", "20/12/2024");
    cy.get(locators.taskForm.Description).type("This is a test description.", { delay: 50 }).should("have.value", "This is a test description.");

    // Upload File
    const filePath = "demo.xlsx";
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/${filePath}`, { force: true });
    cy.get('input[type="file"]').should(($input) => {
      expect($input[0].files[0].name).to.equal("demo.xlsx");
    });

    // Submit Form
    cy.get(locators.taskForm.submitButton).click();

    // Verify & Handle Popup
    cy.get(".MuiDialog-paper[role='dialog']").should("be.visible");
    cy.get("button").contains("Yes, create it!").click();
    cy.get(".MuiDialog-paper[role='dialog']").should("not.exist");
  });
});