import SignInPage from "../pages/signInPage"

Cypress.Commands.add( 'signIn', () => {
  SignInPage.visitHome()
      .goToSignInPage()
      .fillEmail('999tesakun@gmail.com')
      .fillPassword('Password123!')
      .clickSignInButton()
      .assertSignInSuccessPopup()
});
