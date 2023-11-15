import Header from "@/components/Header";

describe("<Header />", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  context("h2 title", () => {
    it("should display title", () => {
      cy.get("div > div > h1 > a")
        .should("be.visible")
        .and("have.text", "Christopher Alabada");
    });

    it("should link to the home page", () => {
      cy.get("div > div > h1 > a").should("have.attr", "href", "/");
    });
  });

  context("home nav link", () => {
    it("should display home", () => {
      cy.get("div > div > nav > div")
        .eq(0)
        .should("be.visible")
        .and("have.text", "home");
    });

    it("should link to the home page", () => {
      cy.get("[data-test=home-nav]").should("have.attr", "href", "/");
    });
  });

  context("projects nav link", () => {
    it("should display projects", () => {
      cy.get("div > div > nav > div")
        .eq(1)
        .should("be.visible")
        .and("have.text", "projects");
    });

    it("should link to the projects page", () => {
      cy.get("[data-test=projects-nav]").should(
        "have.attr",
        "href",
        "/projects"
      );
    });
  });

  context("resume nav link", () => {
    it("should display resume", () => {
      cy.get("div > div > nav > div")
        .eq(2)
        .should("be.visible")
        .and("have.text", "résumé");
    });

    it("should link to the resume page", () => {
      cy.get("[data-test=resume-nav]").should(
        "have.attr",
        "href",
        "/Christopher-Alabada_Software-Engineer.pdf"
      );
    });
  });
});
