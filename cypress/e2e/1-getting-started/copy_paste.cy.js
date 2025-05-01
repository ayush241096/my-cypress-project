describe('Copy and Paste Text in Cypress', () => {
    it('Copies text from one input and pastes it into another, then logs it', () => {
        cy.visit('your_test_page_url'); // Replace with your actual test page URL

        // Copy text from the first input field
        cy.get('#sourceInput')  // Replace with the actual selector
            .invoke('val')
            .then((text) => {
                cy.log('Copied text:', text); // Log the copied text

                // Paste the copied text into another input field
                cy.get('#targetInput') // Replace with the actual selector
                    .type(text);
            });
    });
});


