Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.request({
            method: 'POST',
            url: '/api/login', // Update with your actual login API endpoint
            body: { email, password }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Store authentication token if needed
            cy.setCookie('auth_token', response.body.token); 
        });
    });
});

// How to use it to login in any test case with before each test

describe('Test with Login Session', () => {
    beforeEach(() => {
        cy.login('testuser@example.com', 'password123'); // Use the custom command
    });

    it('Should navigate to dashboard after login', () => {
        cy.visit('/dashboard'); // Replace with your app's dashboard URL
        cy.get('h1').should('contain', 'Welcome'); // Sample assertion
    });
});
