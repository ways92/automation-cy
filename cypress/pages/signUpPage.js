class SignUpPage {
  visitHome() {
    cy.visit('/');
    return this;
  }

  goToMentoringPage() {
    cy.get(':nth-child(2) > .LinkItem_navbar_link_item__Toizn > .inline-block').click();
    return this;
  }

  clickNavbarRegister() {
    cy.get('#dealls-navbar-register-btn').click();
    return this;
  }

  signUpAsMentee() {
    cy.get(':nth-child(1) > .mt-auto > .text-white').click();
    return this;
  }

  fillFullName( fullName ) {
    if ( fullName ) { 
      cy.get('#fullName').clear().type(fullName);
    }
    return this;
  }

  clickNext() {
    cy.get('.order-1').click();
    return this;
  }

  selectJobStatus() {
    cy.get('#jobSearchStatus').click();
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content > .px-4 > .font-semibold').click();
    return this;
  }

  fillWhatsapp( whatsapp ) {
    if ( whatsapp ) {  
      cy.get('#whatsapp').clear().type(whatsapp);
    }
    return this;
  }

  fillEmail( email ) {
    if ( email ) {  
      cy.get('#email').clear().type(email);
    }
    return this;
  }

  fillCampus( campus ) {
    if ( campus ) {  
      cy.get('#campus').clear().type(campus);
    }
    return this;
  }

  selectExperienceLevel() {
    cy.get('.ant-select-dropdown > div > .flex').click();
    cy.get('#eligibility').click();
    cy.contains('.ant-select-item-option-content', 'Freshgrad').click();
    return this;
  }

  clickSkip() {
    cy.get('.mt-4 > .font-normal').click();
    return this;
  }

  clickOrganizationTab() {
    cy.get('.mb-3 > :nth-child(2) > span').click();
    return this;
  }

  fillOrganizationName( organizationName ) {
    if ( organizationName ) {  
      cy.get('#organizationName').clear().type(organizationName);
    }
    return this;
  }

  fillPOrganizationPosition( organizationPosition ) {
    if ( organizationPosition ) {  
      cy.get('#organizationPosition').clear().type(organizationPosition);
    }
    return this;
  }

  addSpecialization() {
    cy.get('.ant-spin-container > div.flex > .ant-btn > span').click();
    cy.get('.ant-select-selection-search').click();
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get('.ant-select-selection-item').click();
    cy.contains('.ant-select-item-option-content', 'IT & Engineering').click();
    cy.get(':nth-child(2) > .ant-checkbox-wrapper > :nth-child(2)').click();
    cy.get(':nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
    return this;
  }

  fillPassword( password ) {
    if ( password ) {  
      cy.get('#password').clear().type(password);
      cy.get('#passwordConfirmation').clear().type(password);
    }
    return this;
  }

  acceptPolicy() {
    cy.get('#checkPrivacyPolicy').check();
    return this;
  }

  clickFinish() {
    cy.get('#dealls-onboarding-finish').click();
    return this;
  }

  assertSuccessPopup() {
    cy.get('article.flex > .ant-btn', { timeout: 10000 })
      .should('be.visible')
      .and('have.text', 'Start Exploring');
    return this;
  }

  assertDisabledButton() {
    cy.get('.order-1').should('have.attr', 'disabled');
    return this;
  }
}

export default new SignUpPage();
