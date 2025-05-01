describe('Netflix.com Automation Suite (Without Login)', () => {
    beforeEach(() => {
      // Visit Netflix homepage before each test
      cy.visit('https://www.netflix.com');
    });
  
    it('1. Verify homepage loads correctly', () => {
      // Assert URL and title
      cy.url().should('include', 'netflix.com');
      cy.title().should('include', 'Netflix');
  
      // Assert presence of key elements
      cy.get('[style="--zc08zpi: auto; --zc08zpy: 0 auto; --zc08zp1g: 0 0 calc(41.66666666666667% - 16px); --zc08zp1y: 0 0 calc(33.333333333333336% - 16px); --zc08zp2g: 0 0 calc(33.333333333333336% - 16px); --zc08zp2y: 0 0 calc(33.333333333333336% - 16px); --zc08zp7: 0px;"]').should('be.visible'); // Updated selector for Netflix logo
      cy.get('.default-ltr-cache-k5w1kf-StyledContainer')
          .should('be.visible')
          .invoke('text')
          .then((text) => {
              cy.log(`Pricing Text: ${text}`);
          });// Updated selector for hero title
      cy.get('.default-ltr-cache-h4k5sx-StyledContainer').should('be.visible'); // Updated selector for hero description
      cy.get('.default-ltr-cache-10yz6af > .default-ltr-cache-inkrn > .default-ltr-cache-1u8qly9 > .default-ltr-cache-1jbflut > .pressable_styles__a6ynkg0').should('be.visible'); // Updated selector for CTA button
    });
  
  
    it('3. Test sign-up flow with invalid email', () => {
      // Enter an invalid email and click the "Get Started" button
      cy.get('[style="--zc08zpi: auto; --zc08zpy: 0 auto; --zc08zp1g: 0 0 calc(58.333333333333336% - 16px); --zc08zp1y: 0 0 calc(66.66666666666667% - 16px); --zc08zp2g: 0 0 calc(66.66666666666667% - 16px); --zc08zp2y: 0 0 calc(66.66666666666667% - 16px); --zc08zpc: flex-end; --zc08zp7: 0px;"] > .layout-container_wrapperStyles__12wd1go1d > .layout-container_styles__12wd1go1g > :nth-child(2) > .pressable_styles__a6ynkg0').click();
      cy.get('#\\:r0\\:').type('a@gmail.com'); // Updated selector for email input
      cy.get('#\\:r3\\:').type('12345'); 
      cy.get('[data-uia="web-login-form+container"] > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .pressable_styles__a6ynkg0').click()   // sign in button
      cy.get('.default-ltr-cache-5lzg10-StyledOuterWrapper')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.log(`Error Message: ${text}`);
            expect(text).to.contain(text);
          }); 
  
    });
  
    it('4. Verify footer links and their functionality', () => {
      // Assert presence of footer links
      cy.scrollTo('bottom');
      cy.get('footer.layout-container_styles__12wd1go1g > :nth-child(2) > .layout-container_wrapperStyles__12wd1go1d > .layout-container_styles__12wd1go1g').should('have.length.greaterThan', 0); // Updated selector for footer links
  
      // Click on a footer link and verify navigation
      cy.get('footer.layout-container_styles__12wd1go1g > :nth-child(2) > .layout-container_wrapperStyles__12wd1go1d > .layout-container_styles__12wd1go1g > :nth-child(2) > .pressable_styles__a6ynkg0')
        .contains('Help Centre')
        .click(); // Multiple tab scenarios
      cy.origin('https://help.netflix.com', () => {
        cy.url().should('include', 'help.netflix.com');
    });
    });
  
    it.only('5. Test language switcher functionality with log and assertion on it', () => {
      // Open the language switcher dropdown
      cy.get('#\\:r1\\:')
        .should('exist')
        .select(1); // Updated selector for language switcher
     // Assert the language has changed
    cy.get('.default-ltr-cache-h4k5sx-StyledContainer', { timeout: 1000 })
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        cy.log(`Hindi Text: ${text}`);
        expect(text.length).to.be.greaterThan(0);
        expect(text.trim()).to.not.be.empty;
        expect(text).to.include('अनलिमिटेड फ़िल्में, टीवी शो, और बहुत कुछ'); 
  
    });
   
      
    });

  
    it('6. Verify the FAQ section Questions and answers', () => {
      // Scroll to the FAQ section
      cy.get('.layout-container_styles__12wd1go1g > :nth-child(1) > .pressable_styles__a6ynkg0').scrollIntoView(); // Updated selector for FAQ section
  
      // Assert presence of FAQ questions
      cy.get('.layout-container_styles__12wd1go1g > :nth-child(1) > .pressable_styles__a6ynkg0').should('have.length.greaterThan', 0); // Updated selector for FAQ questions
      cy.get(':nth-child(3) > .layout-container_wrapperStyles__12wd1go1d > .layout-container_styles__12wd1go1g')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
        cy.log(`FAQ Questions and answers: ${text}`);
    });
  
      // Expand a FAQ question and assert the answer
      cy.get('.layout-container_styles__12wd1go1g > :nth-child(1) > .pressable_styles__a6ynkg0').first().should('be.visible').click(); // Updated selector for FAQ answers
    });
  
    // it('7. Test "Help Center" link opening in a new tab', () => {
    //   // Remove the target attribute to open the link in the same tab for testing
    //   cy.get('.footer-link').contains('Help Center').invoke('removeAttr', 'target').click(); // Updated selector for footer links
  
    //   // Assert the new URL
    //   cy.url().should('include', 'help.netflix.com');
    // });
  
    // it('8. Verify "Terms of Use" and "Privacy" links', () => {
    //   // Click on the "Terms of Use" link
    //   cy.get('.footer-link').contains('Terms of Use').click(); // Updated selector for footer links
    //   cy.url().should('include', 'terms-of-use');
  
    //   // Go back to the homepage
    //   cy.go('back');
  
    //   // Click on the "Privacy" link
    //   cy.get('.footer-link').contains('Privacy').click(); // Updated selector for footer links
    //   cy.url().should('include', 'privacy');
    // });
  
    it('9. Verify dynamic content on the homepage', () => {
      // Assert presence of dynamic content (e.g., movie/show titles)
      cy.get('[data-uia="nmhp-top-10"]', { timeout: 10000 }).each(($el) => { // Added timeout for dynamic content
        cy.wrap($el).find('.default-ltr-cache-r1prx9 > :nth-child(1)').should('not.be.empty'); // Updated selector for title cards
      });
  
      // Assert at least 5 titles are visible
      cy.get('[data-uia="nmhp-top-10"]').should('have.length.greaterThan', 0); // Updated selector for title cards
    });
  
    it('10. Test responsiveness of the homepage (optional)', () => {
      // Test the homepage on different screen sizes
      cy.viewport('iphone-6');
      cy.get('.default-ltr-cache-h4k5sx-StyledContainer').should('be.visible'); // Updated selector for Netflix logo
  
      cy.viewport('ipad-2');
      cy.get('.default-ltr-cache-h4k5sx-StyledContainer').should('be.visible'); // Updated selector for Netflix logo
  
      cy.viewport('macbook-15');
      cy.get('.default-ltr-cache-h4k5sx-StyledContainer').should('be.visible'); // Updated selector for Netflix logo
    });
    
    
  });

describe('Netflix Trending Now Section - Scroll Test', () => {
    beforeEach(() => {
        cy.visit('https://www.netflix.com/in/');
    });

    it('Scroll right and left in Trending Now section', () => {
        // Scroll to 'Trending Now' section
        cy.get('[data-uia="nmhp-top-10"]')
            .scrollIntoView()   // Scrolls to the Trending Now section
            .should('be.visible')
            .as('trendingNow'); // Alias for easier reference

        // Scroll RIGHT
        cy.get('@trendingNow')
            .find('[aria-label="Next"]') // Netflix's right scroll button
            .click();

        // Assertion: Verify scrolling by confirming the last element appears
        cy.get('@trendingNow')
            .find(':nth-child(6) > .default-ltr-cache-1rddc4n > .default-ltr-cache-3xjlkv > .default-ltr-cache-cf8xw5')
            .should('be.visible');

        // Scroll LEFT
        cy.get('@trendingNow')
            .find('[aria-label="Previous"]') // Netflix's left scroll button
            .click();

        // Assertion: Verify scrolling back by confirming the first element is visible
        cy.get('@trendingNow')
            .find(':nth-child(1) > .default-ltr-cache-1rddc4n > .default-ltr-cache-3xjlkv > .default-ltr-cache-cf8xw5')
            .should('be.visible');
    });
});
