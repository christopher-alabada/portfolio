import InfoSidebar from "@/components/InfoSidebar";

describe("<InfoSidebar />", () => {
  beforeEach(() => {
    cy.mount(<InfoSidebar />);
  });

  context("location info", () => {
    it("should display location image", () => {
      cy.get("section > div > div")
        .eq(0)
        .find("img")
        .should("be.visible")
        .and("have.attr", "src")
        .and("match", /marker\.png/);
    });

    it("should display a location alt", () => {
      cy.get("section > div > div")
        .eq(0)
        .find("img")
        .should("be.visible")
        .and("have.attr", "alt", "location pin");
    });

    it("should display location text", () => {
      cy.get("section > div > div")
        .eq(0)
        .find("div")
        .should("be.visible")
        .and("have.text", "Tokyo, Japan");
    });
  });

  context("email info", () => {
    it("should display email image", () => {
      cy.get("section > div > div")
        .eq(1)
        .find("img")
        .should("be.visible")
        .and("have.attr", "src")
        .and("match", /email\.png/);
    });

    it("should display email alt", () => {
      cy.get("section > div > div")
        .eq(1)
        .find("img")
        .should("be.visible")
        .and("have.attr", "alt", "email");
    });

    it("should have mailto link", () => {
      cy.get("section > div > div")
        .eq(1)
        .find("a")
        .should("have.attr", "href", "#contact-form");
    });

    it("should display email text", () => {
      cy.get("section > div > div")
        .eq(1)
        .find("a")
        .should("be.visible")
        .and("have.text", "chris@topher.la");
    });
  });

  context("linkedin info", () => {
    it("should display linkedin image", () => {
      cy.get("section > div > div")
        .eq(2)
        .find("img")
        .should("be.visible")
        .and("have.attr", "src")
        .and("match", /linkedin\.png/);
    });

    it("should display linkedin alt", () => {
      cy.get("section > div > div")
        .eq(2)
        .find("img")
        .should("be.visible")
        .and("have.attr", "alt", "linkedin");
    });

    it("should have linkedin link", () => {
      cy.get("section > div > div")
        .eq(2)
        .find("a")
        .should(
          "have.attr",
          "href",
          "https://www.linkedin.com/in/christopher-alabada/"
        );
    });

    it("should display linkedin text", () => {
      cy.get("section > div > div")
        .eq(2)
        .find("a")
        .should("be.visible")
        .and("have.text", "christopher.alabada");
    });
  });

  context("github info", () => {
    it("should display github image", () => {
      cy.get("section > div > div")
        .eq(3)
        .find("img")
        .should("be.visible")
        .and("have.attr", "src")
        .and("match", /github\.png/);
    });

    it("should display github alt", () => {
      cy.get("section > div > div")
        .eq(3)
        .find("img")
        .should("be.visible")
        .and("have.attr", "alt", "github");
    });

    it("should have github link", () => {
      cy.get("section > div > div")
        .eq(3)
        .find("a")
        .should("have.attr", "href", "https://github.com/christopher-alabada");
    });

    it("should display github text", () => {
      cy.get("section > div > div")
        .eq(3)
        .find("a")
        .should("be.visible")
        .and("have.text", "christopher.alabada");
    });
  });
});
