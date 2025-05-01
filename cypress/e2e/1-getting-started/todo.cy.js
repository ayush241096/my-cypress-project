/// <reference types="cypress" />


describe('netflix test', () => {
 
it('Get the data from FAQ', () => {

    cy.visit('https://www.netflix.com/in/')

    cy.get('#button--nmhp-faq-accordion--0').click()

    cy.get('#content--nmhp-faq-accordion--0 > span').should('exist')
    



    // cy.get('.todo-list li').should('have.length', 2)

    // // We can go even further and check that the default todos each contain
    // // the correct text. We use the `first` and `last` functions
    // // to get just the first and last matched elements individually,
    // // and then perform an assertion with `should`.
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

})



