class MentoringPage {
  visitMentoringPage() {
    cy.visit('/mentoring')
    return this;
  }

  searchMentorBaseOnList() {
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
    return this;
  }

  searchMentor( mentorName ) {
    const keyword = mentorName || String(Date.now());

    cy.get('#searchMentor')
      .clear()
      .type(keyword);
    return this
  }

  assertEmptyState() {
    cy.contains('Tidak ada hasil pencarian ditemukan').should('be.visible');
    return this
  }
  
}

export default new MentoringPage();
