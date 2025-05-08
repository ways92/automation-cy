import SignUpPage from "../pages/signUpPage"

describe('Register', () => {
  it('Ensure can user register as mentee', () => {
    const email = `${Date.now()}tesakun@gmail.com`;

    RegisterPage.visitHome()
      .goToMentoringPage()
      .clickNavbarRegister()
      .signUpAsMentee()
      .fillFullName('Gerry')
      .clickNext()
      .selectJobStatus()
      .fillWhatsapp('62626262')
      .fillEmail(email)
      .fillCampus('Universitas Indonesia')
      .selectExperienceLevel()
      .clickNext()
      .clickSkip()
      .clickNext()
      .clickOrganizationTab()
      .fillOrganizationName('Himpunan Mahasiswa Sistem Informasi')
      .fillPOrganizationPosition('Sekertaris')
      .clickNext()
      .addSpecialization()
      .clickNext()
      .fillPassword('Password123!')
      .acceptPolicy()
      .clickFinish()
      .assertSuccessPopup();
  });
  
  it('Ensure user can see disabled next button at step 1', () => {
    SignUpPage.visitHome()
      .goToMentoringPage()
      .clickNavbarRegister()
      .signUpAsMentee()
      .assertDisabledButton()
  });
  
  it('Ensure user can see disabled next button at step 2', () => {
    SignUpPage.visitHome()
      .goToMentoringPage()
      .clickNavbarRegister()
      .signUpAsMentee()
      .fillFullName('Gerry')
      .clickNext()
      .assertDisabledButton()
  });
  
});
