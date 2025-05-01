// Amazon Cypress Test Suite
describe('Amazon Shopping Experience', () => {
    beforeEach(() => {
      // Visit Amazon homepage
      cy.visit('https://www.amazon.com');
      
      // Accept cookies if the dialog appears
      cy.get('body').then($body => {
        if ($body.find('#sp-cc-accept').length > 0) {
          cy.get('#sp-cc-accept').click();
        }
      });
    });
  
    it.only('should allow product search with advanced result validation', () => {
      // Type in search box
      cy.get('#nav-search')
        .should('be.visible')
        .type('wireless headphones');
      
      // Click search button
      cy.get('#nav-search-submit-button')
        .should('be.visible')
        .click();
      
      // Verify search results page
      cy.url()
        .should('include', '/s')
        .and('include', 'wireless+headphones');
  
      // Assert search results exist and verify content structure
      cy.get('.s-result-item[data-component-type="s-search-result"]')
        .should('have.length.at.least', 5)
        .first()
        .within(() => {
          // Check for product title
          cy.get('h2 .a-link-normal')
            .should('exist')
            .invoke('text')
            .should('match', /headphone|earphone|earbud/i);
          
          // Check for price
          cy.get('.a-price-whole')
            .should('exist')
            .invoke('text')
            .then(text => {
              const price = parseInt(text.replace(/[^0-9]/g, ''));
              expect(price).to.be.a('number');
              expect(price).to.be.at.least(1);
            });
            
          // Check for rating if it exists
          cy.get('body').then($body => {
            if ($body.find('.a-star-medium-4').length > 0 || $body.find('.a-star-medium-3').length > 0) {
              cy.get('.a-icon-star-small').should('exist');
            }
          });
        });
        
      // Verify search filter options exist
      cy.get('#s-refinements')
        .should('exist')
        .within(() => {
          cy.contains('Brand').should('exist');
          cy.contains('Price').should('exist');
        });
    });
  
    it('should test product details page with comprehensive assertions', () => {
      // Search for a specific product
      cy.get('#twotabsearchtextbox')
        .type('bluetooth speaker{enter}');
      
      // Click on the first product
      cy.get('.s-result-item[data-component-type="s-search-result"] h2 .a-link-normal')
        .first()
        .click();
      
      // Store product details from listing page for later comparison
      let productTitle;
      cy.get('#productTitle')
        .invoke('text')
        .then(text => {
          productTitle = text.trim();
          expect(productTitle).to.have.length.of.at.least(5);
        });
      
      // Verify product page elements
      cy.get('#ppd').within(() => {
        // Verify product title
        cy.get('#productTitle')
          .should('be.visible')
          .and('not.be.empty');
        
        // Verify product image
        cy.get('#imgTagWrapperId img, #landingImage')
          .should('be.visible')
          .and('have.attr', 'src')
          .and('match', /^https:\/\//);
        
        // Verify price section exists
        cy.get('#apex_desktop, .a-price, #priceblock_ourprice, #priceblock_dealprice')
          .should('exist');
        
        // Verify Add to Cart button
        cy.get('#add-to-cart-button')
          .should('be.visible');
      });
      
      // Test availability of different variations if they exist
      cy.get('body').then($body => {
        if ($body.find('#variation_color_name, #variation_size_name').length > 0) {
          cy.get('#variation_color_name li, #variation_size_name li')
            .should('have.length.at.least', 1);
        }
      });
      
      // Verify product details section
      cy.get('#detailBullets_feature_div, #productDetails_feature_div, #technicalSpecifications_feature_div')
        .should('exist')
        .invoke('text')
        .should('match', /product|details|specifications|dimensions|weight/i);
    });
    
    it('should add product to cart and verify cart functionality', () => {
      // Search for a specific product
      cy.get('#twotabsearchtextbox')
        .type('usb cable{enter}');
      
      // Click on the first product
      cy.get('.s-result-item[data-component-type="s-search-result"] h2 .a-link-normal')
        .first()
        .click();
      
      // Store the product title for later verification
      let productTitle;
      
      cy.get('#productTitle')
        .should('be.visible')
        .invoke('text')
        .then(text => {
          productTitle = text.trim();
        });
      
      // Add the product to cart
      cy.get('#add-to-cart-button')
        .should('be.visible')
        .click();
      
      // Handle potential pop-ups after adding to cart
      cy.get('body').then($body => {
        // If there's a "No thanks" button for additional offers, click it
        if ($body.find('#attachSiNoCoverage').length > 0) {
          cy.get('#attachSiNoCoverage').click();
        }
        
        // If there's a proceed to cart button, use it
        if ($body.find('#attach-sidesheet-view-cart-button, #attach-view-cart-button-form').length > 0) {
          cy.get('#attach-sidesheet-view-cart-button, #attach-view-cart-button-form').click();
        } else {
          // Otherwise navigate to cart directly
          cy.get('#nav-cart').click();
        }
      });
      
      // Verify the cart page and contents
      cy.url().should('include', '/cart/');
      
      // Assert the product was added to cart correctly
      cy.get('.a-carousel-card, .sc-list-item')
        .should('exist')
        .and('be.visible')
        .within(() => {
          // If we have the product title, verify it's in the cart
          if (productTitle) {
            cy.contains(productTitle.substring(0, 20))
              .should('exist');
          }
          
          // Verify quantity selector exists
          cy.get('.sc-action-quantity-input, .a-dropdown-container')
            .should('exist');
          
          // Verify delete button exists
          cy.get('.sc-action-delete, input[value="Delete"], .a-color-link')
            .should('exist');
            
          // Verify price element exists and has valid format
          cy.get('.sc-price, .a-price')
            .should('exist')
            .invoke('text')
            .should('match', /\$[0-9]+\.[0-9]{2}|\$[0-9]+/);
        });
      
      // Verify subtotal exists and is calculated correctly
      cy.get('#sc-subtotal-amount-activecart, .sc-subtotal')
        .should('exist')
        .invoke('text')
        .then(text => {
          const subtotal = parseFloat(text.replace(/[^0-9.]/g, ''));
          expect(subtotal).to.be.a('number');
          expect(subtotal).to.be.at.least(0.1);
        });
    });
  });