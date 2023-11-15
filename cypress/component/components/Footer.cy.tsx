import Footer from "@/components/Footer";

describe("<Footer />", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  context("email link", () => {
    it("should contain an email value", () => {
      cy.get("footer > div > div")
        .eq(0)
        .find("a")
        .should("be.visible")
        .and("have.text", "chris@topher.la");
    });

    it("should link to mailto", () => {
      cy.get("[data-test=footer-email]").should(
        "have.attr",
        "href",
        "#contact-form"
      );
    });
  });

  context("linkedin link", () => {
    it("should contain a linkedin value", () => {
      cy.get("footer > div > div")
        .eq(1)
        .find("a")
        .should("be.visible")
        .and("have.text", "linkedin.com/in/christopher.alabada");
    });

    it("should link to linkedin", () => {
      cy.get("[data-test=footer-linkedin]").should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/christopher-alabada/"
      );
    });
  });

  context("github link", () => {
    it("should contain a github value", () => {
      cy.get("footer > div > div")
        .eq(2)
        .find("a")
        .should("be.visible")
        .and("have.text", "github.com/christopher.alabada");
    });

    it("should link to github", () => {
      cy.get("[data-test=footer-github]").should(
        "have.attr",
        "href",
        "https://github.com/christopher-alabada"
      );
    });
  });

  context("created with text", () => {
    it("should contain text", () => {
      cy.get("footer > div")
        .eq(1)
        .should(
          "have.text",
          "This portfolio was created with Next.js, Typescript, and FastAPI."
        );
    });
  });
});
