import ContactMe from "@/components/ContactMe";

describe("<ContactMe />", () => {
  beforeEach(() => {
    cy.mount(<ContactMe />);
  });

  context("title", () => {
    it("should display contact me title", () => {
      cy.get("h2")
        .should("have.text", "Contact Me");
    });
  });
});