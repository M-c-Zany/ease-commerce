export const locators = {
    login: {
      UserName: "#login-form-username",
      Password: "#login-form-password",
      LoginButton: "button[id=':r2:']"
    },
    navigation: {
      ThreeDots: "button[aria-label='Open Settings']",
      Switch: "li:nth-child(1)",
      EaseLogo: "img[alt='Ease Commerce Logo']"
    },
    admin: {
      AddTaskButton: ".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-84c6ri"
    },
    taskForm: {
      SuperCategory: "[data-test='super-category-combo-box']",
      SubCategory: "[data-test='sub-category-combo-box']",
      Portals: "[data-test='portals-combo-box']",
      Products: "[data-test='products-combo-box']",
      TaskName: "#task-name-input",
      AssignedTo: "[data-test='assignedTo-combo-box']",
      Reviewer: "[data-test='reviewer-combo-box']",
      Priority: "[data-test='priority-combo-box']",
      DueDate: "input[placeholder='DD/MM/YYYY']",
      ChooseDate: "button[aria-label='Choose date']",
      Description: ".ql-editor",
      submitButton: ".MuiGrid-container > :nth-child(1) > .MuiButtonBase-root",
      popUpYes : ".MuiDialogActions-root > .MuiButton-contained"
    }
  };