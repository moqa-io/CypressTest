describe('should display an error message when you enter wrong login information', function () {
    before(function () {
      cy.visit('https://www.netflix.com/')
    })
   
    it('displays an error message', function () {
      cy.get('a[href="/login"]').click()
      cy.get('#id_userLoginId').type('test@gmail.com',{force: true})
      cy.get('#id_password').type('1234',{force: true})
      cy.get('button[class="btn login-button btn-submit btn-small"]').click()
      cy.get('.ui-message-contents').should('be.visible')
    })
   })