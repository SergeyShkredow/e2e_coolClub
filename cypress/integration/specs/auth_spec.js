describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('/')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        cy.get('#email1',  { timeout: 5000 })
            .type('fake@test.com')
            .should('have.value', 'fake@test.com')
    })
})
