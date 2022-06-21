it ('should be able to visit web page',()  => {
    cy.visit('https://onex.am/')
    cy.get('.onex_bg_green').click()
    cy.get('#loginform-username').type("monicamatevosian@gmail.com")
    cy.get('#loginform-password').type("testtesttest");
    cy.get('.action-button').click()

    cy.get('div[class*="help-block"]:nth-child(1)').should('have.text',"Անվավեր էլ. հասցե")
    cy.get('#loginform-username').clear()

    cy.get('#loginform-username').type("anna.mar01@mail.ru")
    cy.get('#loginform-password').clear()
    cy.get('#loginform-password').type("testfortest")
    cy.get('.action-button').click()
    cy.wait(1000)
    cy.get('.list-unstyled > :nth-child(5) > a').click()

    
    cy.get('#product_url').type("https://www.amazon.com/playstation-5/s?k=playstation+5")
    cy.get('#product_name').type("PlayStation 5 Console")
    cy.get('.col-md-2 > .form-control').click()
    cy.get('#product_price-error').should('have.text',"Խնդրում ենք լրացնել հետևյալ դաշտը")
    cy.get('#product_price-error').type("350")
    cy.get('.col-md-2 > .form-control').click()
})


