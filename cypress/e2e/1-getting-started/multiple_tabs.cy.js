describe('Handle Multiple Tabs in Cypress', () => {
    it('Clicks a button, captures the new tab URL, and opens it in the same tab', () => {
        cy.visit('your_test_page_url'); // Replace with your actual page URL

        // Intercept the new tab URL
        cy.get('button#openNewTab') // Replace with the actual selector
            .invoke('attr', 'href')
            .then((newTabUrl) => {
                cy.visit(newTabUrl); // Open the new tab in the same context

                // Now perform assertions on the new tab's content
                cy.get('h1').should('contain', 'Expected Page Title'); // Adjust assertion as needed
            });
    });
});
