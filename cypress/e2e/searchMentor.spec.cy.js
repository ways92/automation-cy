describe('Search mentor', () => {
  it('Ensure as mentee can search mentor', () => {
    cy.signIn()
    cy.get( ':nth-child(2) > .LinkItem_navbar_link_item__Toizn > .inline-block' ).click()
    cy.get('a.MentorCard_mentor_card__zMRXB').eq(0)
      .find('h4')
      .invoke('text')
      .then((mentorName) => {
        const trimmedName = mentorName.trim();
        cy.get( '#searchMentor' ).clear().type(trimmedName);
        
        cy.get( '.border-b > .line-clamp-1' )
          .should( ( $el ) => {
            const resulTrimmed = mentorName.trim().toLowerCase()
            expect( $el.text().trim().toLowerCase() ).to.eq( resulTrimmed )
        });
      });
    });
  
  it( 'Ensure as mentee can see empty state when search mentor', () => {
    cy.signIn()
    cy.get( ':nth-child(2) > .LinkItem_navbar_link_item__Toizn > .inline-block' ).click()
    cy.get( '#searchMentor' ).type( 'kosong ini' )    
    cy.contains('Tidak ada hasil pencarian ditemukan').should('be.visible');
  });
    
});
