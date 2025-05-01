/// <reference types="cypress" />


describe('netflix test', () => {
 
    it('Get the data from FAQ', () => {
    
        cy.visit('https://www.netflix.com/in/')
    
        cy.get('#button--nmhp-faq-accordion--0').click()
    
        cy.get('#content--nmhp-faq-accordion--0 > span').should('exist')
        
    

      })
    
    })
    
    
    
    