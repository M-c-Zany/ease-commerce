describe('EaseCommerce API Automation Tests', () => {
  let token;

  // Login API Test
  it('Login API Test - Retrieve Token', () => {
      cy.request({
          method: 'POST',
          url: '/login', // Using baseUrl
          body: {
              username: Cypress.env('username'),
              password: Cypress.env('password')
          }
      }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('token');
          token = response.body.token;
          cy.log('Token:', token);
      });
  });

  // Warehouse API Test - Valid Request
  it('Warehouse API Test - Valid Token', () => {
      cy.request({
          method: 'GET',
          url: '/manage/warehouse/master/list?page=1&limit=10', // Using baseUrl
          headers: { Authorization: `Bearer ${token}` }
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('docs').that.is.an('array');
      });
  });

  // Negative Test Case - Invalid Token
  it('Negative Test - Invalid Token should return 401', () => {
      cy.request({
          method: 'GET',
          url: '/manage/warehouse/master/list?page=1&limit=10',
          headers: { Authorization: 'Bearer invalidToken123' },
          failOnStatusCode: false
      }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('message');

          // Checking for multiple possible error messages
          const expectedErrors = ['Unauthorized', 'jwt malformed', 'Invalid token'];
          const actualMessage = response.body.message;
          cy.log('Error Message:', actualMessage);

          expect(expectedErrors.some(err => actualMessage.includes(err))).to.be.true;
      });
  });

  // Negative Test Case - Missing Query Parameters
  it('Negative Test - Missing Query Parameters', () => {
      cy.request({
          method: 'GET',
          url: '/manage/warehouse/master/list', // No page & limit
          headers: { Authorization: `Bearer ${token}` },
          failOnStatusCode: false
      }).then((response) => {
          cy.log('Response:', response.body);
          expect(response.status).to.be.oneOf([200, 400, 422]); // Adjust based on API behavior
      });
  });

  // Negative Test Case - No Warehouses Exist (Simulating empty response)
  it('Negative Test - No Warehouses Exist for a Given Group', () => {
      cy.request({
          method: 'GET',
          url: '/manage/warehouse/master/list?page=1&limit=10&search=NonExistentWarehouse',
          headers: { Authorization: `Bearer ${token}` },
          failOnStatusCode: false
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.docs).to.be.an('array').that.is.empty;
      });
  });
});
