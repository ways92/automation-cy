class LoginPage {
  visitHome() {
    cy.visit('/');
    return this;
  }

  goToSignInPage() {
    cy.get('body').find('.xl\\:hidden > svg > path').then(($el) => {
      if ($el.length && $el.is(':visible')) {
        cy.wrap($el).click();
        cy.get('.space-y-4 > .bg-tertiary-violet-0').click();
      }
    });
    cy.get('#dealls-navbar-login-btn').click()
    return this;
  }

  fillEmail( email ) {
    if ( email ) {  
      cy.get('#basic_email').clear().type(email);
    }
    return this;
  }

  fillPassword( password ) {
    if ( password ) {
      cy.get('#basic_password').clear().type(password);
    }
    return this;
  }

  clickSignInButton() {
    cy.get('.border-none').click();
    return this;
  }

  assertSignInSuccessPopup() {
    cy.get( '.ant-message-notice-content' )
      .should( 'be.visible' )
      .and( 'have.text', 'Sign in success' )
    return this;
  }

  assertMissingEmail() {
    cy.get('#basic_email_help > .ant-form-item-explain-error')
      .should( 'be.visible' )
      .and( 'have.text', 'Missing email' )
    return this;
  }

  assertMissingPassword() {
    cy.get('#basic_password_help > .ant-form-item-explain-error')
      .should( 'be.visible' )
      .and( 'have.text', 'Missing password' )
    return this;
  }
}

export default new LoginPage();
