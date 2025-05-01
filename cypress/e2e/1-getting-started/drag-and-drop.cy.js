describe('Drag and Drop Tests', () => {
    beforeEach(() => {
        // Visit a page with drag and drop functionality
        cy.visit('https://jqueryui.com/droppable/');
        
        // Switch to the iframe containing the drag and drop elements
        cy.get('.demo-frame').then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).as('iframeBody');
        });
    });

    it('should perform basic drag and drop', () => {
        cy.get('@iframeBody').within(() => {
            // Get the draggable and droppable elements
            const draggable = '#draggable';
            const droppable = '#droppable';

            // Verify initial state
            cy.get(droppable).should('contain', 'Drop here');

            // Perform drag and drop
            cy.get(draggable)
                .trigger('mousedown', { which: 1 })
                .trigger('mousemove', { clientX: 100, clientY: 100 })
                .trigger('mouseup', { force: true });

            // Verify the drop was successful
            cy.get(droppable).should('contain', 'Dropped!');
        });
    });

    it('should handle drag and drop with custom coordinates', () => {
        cy.get('@iframeBody').within(() => {
            const draggable = '#draggable';
            const droppable = '#droppable';

            // Get the position of the droppable element
            cy.get(droppable).then($el => {
                const rect = $el[0].getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Perform drag and drop to the center of the droppable element
                cy.get(draggable)
                    .trigger('mousedown', { which: 1 })
                    .trigger('mousemove', { clientX: centerX, clientY: centerY })
                    .trigger('mouseup', { force: true });

                // Verify the drop was successful
                cy.get(droppable).should('contain', 'Dropped!');
            });
        });
    });

    it('should handle multiple drag and drop operations', () => {
        cy.get('@iframeBody').within(() => {
            const draggable = '#draggable';
            const droppable = '#droppable';

            // First drag and drop
            cy.get(draggable)
                .trigger('mousedown', { which: 1 })
                .trigger('mousemove', { clientX: 100, clientY: 100 })
                .trigger('mouseup', { force: true });

            // Verify first drop
            cy.get(droppable).should('contain', 'Dropped!');

            // Reset the page to test another drag and drop
            cy.reload();
            cy.get('.demo-frame').then($iframe => {
                const $body = $iframe.contents().find('body');
                cy.wrap($body).as('iframeBody');
            });

            // Second drag and drop with different coordinates
            cy.get(draggable)
                .trigger('mousedown', { which: 1 })
                .trigger('mousemove', { clientX: 200, clientY: 200 })
                .trigger('mouseup', { force: true });

            // Verify second drop
            cy.get(droppable).should('contain', 'Dropped!');
        });
    });
}); 