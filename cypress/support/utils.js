export const getFormApp = () => cy.get('.card-shadow')
// export const newId = () => Math.random().toString().substr(2, 10)

// FORM
export const getFormFields = () => cy.get('.introCalculatorFormGroups .form-group')

const FORM_SELECT_ITEM_ONE = '.introCalculatorFormGroups > :nth-child(1) > .sod_select'
const FORM_SELECT_ITEM_TWO = '.introCalculatorFormGroups > :nth-child(2) > .sod_select'
const FORM_SELECT_ITEM_THREE = '.introCalculatorFormGroups > :nth-child(3) > .sod_select'
const FORM_SELECT_ITEM_FOUR = '.introCalculatorFormGroups > :nth-child(4) > .sod_select'


export const getSelectItemOne = (text) => cy.get(FORM_SELECT_ITEM_ONE).contains(text)
export const getSelectItemTwo = (text) => cy.get(FORM_SELECT_ITEM_TWO).contains(text)
export const getSelectItemThree = (text) => cy.get(FORM_SELECT_ITEM_THREE).contains(text)
export const getSelectItemFour = (text) => cy.get(FORM_SELECT_ITEM_FOUR).contains(text)

export const getCurrentPrice = () => cy.get('.discount-right .current-price')
export const getFormCheckbox = () => cy.get('[type="checkbox"]')
export const getDiscountInfo = () =>  cy.get('.discount-info')
export const getDiscountSize = () =>  cy.get('.discount-size')
export const getOldPrice = () =>  cy.get('.old-price')
