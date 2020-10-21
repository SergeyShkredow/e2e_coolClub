import {
    getFormApp,
    getSelectItemFour,
    getSelectItemOne,
    getSelectItemThree,
    getSelectItemTwo,
    getFormFields,
    getCurrentPrice, getFormCheckbox, getDiscountInfo, getOldPrice, getDiscountSize
} from '../../support/utils'

describe('test cool.club', () => {

    before(() => {
        cy.visit('/')
        getFormApp().should('be.visible')

        getFormFields()
            .should('have.length', 4)
    })

    it('Check price for old customer', () => {

        getSelectItemOne('Essay')
            .click({force: true})

        getSelectItemTwo('College')
            .click({force: true})

        getSelectItemThree('14 days')
            .click({force: true})

        getSelectItemFour('1 pages / 275 words')
            .click({force: true})

        getCurrentPrice()
            .should(($price) => {
                expect($price).to.have.text('$13.00')
            })

        getFormCheckbox()
            .should('not.be.checked')

        getDiscountInfo()
            .should('not.be.visible')
    })

    it('Check price for new customer', () => {

        getSelectItemOne('Editing')
            .click({force: true})

        getSelectItemTwo('Proofreading')
            .click({force: true})

        getSelectItemThree('7 days')
            .click({force: true})

        getSelectItemFour('7 pages / 1925 words')
            .click({force: true})

        getFormCheckbox()
            .click( {force: true})
            .should('be.checked')

        getCurrentPrice()
            .should(($current) => {
                expect($current).to.have.text('$47.60')
            })

        getDiscountInfo()
            .should('be.visible')

        getDiscountSize()
            .should(($discount) => {
                expect($discount).to.have.text('15% OFF')
            })

        getOldPrice()
            .should(($old) => {
                expect($old).to.have.text('$56.00')
            })
    })
})
