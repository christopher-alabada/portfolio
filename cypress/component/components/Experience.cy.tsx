import Experience from "@/components/Experience";
import { IExperience } from "@/data/types";

describe("<Experience />", () => {
  const experienceData: IExperience[] = [
    {
      position: "Cashier",
      company: "T-Bone",
      location: "Los Angeles, CA",
      date: "January 2020 - Present",
      description: ["Operated cash register", "Customer service"],
    },
  ];

  beforeEach(() => {
    cy.mount(<Experience experience={experienceData} />);
  });

  context("title", () => {
    it("should display title", () => {
      cy.get("h2").should("have.text", "Experience");
    });
  });

  context("experience cashier", () => {
    it("should display position name", () => {
      cy.get("[data-test=experience-position-Cashier] > div")
        .eq(0)
        .should("have.text", "Cashier");
    });

    it("should display company name", () => {
      cy.get("[data-test=experience-position-Cashier] > div")
        .eq(1)
        .should("have.text", "T-Bone");
    });

    it("should display location name", () => {
      cy.get("[data-test=experience-position-Cashier] > div")
        .eq(2)
        .should("have.text", "Los Angeles, CA");
    });

    it("should display date name", () => {
      cy.get("[data-test=experience-position-Cashier] > div")
        .eq(3)
        .should("have.text", "January 2020 - Present");
    });

    it("should display first description", () => {
      cy.get("[data-test=experience-description-Cashier] > ul > li")
        .eq(0)
        .should("have.text", "Operated cash register");
    });

    it("should display second description", () => {
      cy.get("[data-test=experience-description-Cashier] > ul > li")
        .eq(1)
        .should("have.text", "Customer service");
    });
  });
});
