/// <reference types="Cypress" />

describe('verify buttons work on demo app',()=>{

  it('verify elements buttons works',()=>{
    cy.visit('https://demoqa.com/');
    cy.contains('Elements').click();
    cy.get('#item-0').click();
  // cy.get('[placeholder="Full Name"]').type('bnnbnb');
   // cy.get('#userName').type('Sergii');
   cy.get('.mr-sm-2').first().type('fdfdsf');
   cy.get('.mr-sm-2').eq(1).type('fdfdsf');
    cy.get('#userEmail').type('sergii1@mailinator.com');
    cy.get('#currentAddress').type('AbC');



    cy.get('#submit').click().then(()=>{
      cy.get('#output')
      .should('be.visible');
    });

  })
})


//assertion