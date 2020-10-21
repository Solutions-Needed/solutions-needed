describe("My First Test", () => {
  it('Clicking "GitHub" navigates to a new URL', () => {
    //Project URL
    cy.visit("http://localhost:3000");
    //Contains() test
    cy.contains("Next.js + Tailwind CSS");
  });
});
