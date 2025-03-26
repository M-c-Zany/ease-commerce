const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://easecommerce.in/api/v2",
    WebUrl: "https://easecommerce.in/",
    env: {
      username: "demouser@easecommerce.in",
      password: "cE7iQPP^"
    }
  }
});
