import mentoringPage from "../pages/mentoringPage"

describe( 'Search mentor', () => {
  it.only('Ensure as mentee can search mentor', () => {
    cy.signIn()
    mentoringPage.visitMentoringPage().searchMentorBaseOnList()
    });
  
  it( 'Ensure as mentee can see empty state when search mentor', () => {
    cy.signIn()
    mentoringPage.visitMentoringPage()
      .searchMentor()
      .assertEmptyState()
  });
    
});
