import SignInPage from "../pages/signInPage";

describe( 'template spec', () => {

  it('Ensure user sign in as mentee', () => {
    SignInPage.visitHome()
      .goToSignInPage()
      .fillEmail('999tesakun@gmail.com')
      .fillPassword('Password123!')
      .clickSignInButton()
      .assertSignInSuccessPopup()
  });
  
  it('Ensure user can see error validation when missing email', () => {
    SignInPage.visitHome()
      .goToSignInPage()
      .fillEmail('')
      .fillPassword('Password123!')
      .clickSignInButton()
      .assertMissingEmail()
  });
  
  it('Ensure user can see error validation when missing password', () => {
    SignInPage.visitHome()
      .goToSignInPage()
      .fillEmail('999tesakun@gmail.com')
      .fillPassword('')
      .clickSignInButton()
      .assertMissingPassword()
  });
  
  it('Ensure user can see error validation when missing email and password', () => {
    SignInPage.visitHome()
      .goToSignInPage()
      .fillEmail('')
      .fillPassword('')
      .clickSignInButton()
      .assertMissingEmail()
      .assertMissingPassword()
  });

})
