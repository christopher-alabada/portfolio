import TechnicalToolbox from "@/components/TechnicalToolbox";
import { IToolbox } from "@/data/types";

describe("<TechnicalToolbox />", () => {
  const toolBoxData: IToolbox = {
    languages: [
      { image: "typescript.png", name: "TypeScript" },
      { image: "javascript.png", name: "JavaScript" },
    ],
    frameworks: [{ image: "rails.png", name: "Rails" }],
    databases: [
      { image: "dynamodb.png", name: "DynamoDB" },
      { image: "postgresql.png", name: "PostgreSQL" },
    ],
    miscellaneous: [{ image: "jest.png", name: "Jest" }],
  };

  beforeEach(() => {
    cy.mount(<TechnicalToolbox technicalToolbox={toolBoxData} />);
  });

  context("title", () => {
    it("should have title text", () => {
      cy.get("h2").should("have.text", "Technical Toolbox");
    });
  });

  context("TypeScript", () => {
    it("should have typescript image", () => {
      cy.get("[data-test=toolbox-image-TypeScript]")
        .should("have.attr", "src")
        .and("match", /typescript\.png/);
    });

    it("should have typescript skill name", () => {
      cy.get("[data-test=toolbox-name-TypeScript]").should(
        "have.text",
        "TypeScript"
      );
    });
  });

  context("JavaScript", () => {
    it("should have javascript image", () => {
      cy.get("[data-test=toolbox-image-JavaScript]")
        .should("have.attr", "src")
        .and("match", /javascript\.png/);
    });

    it("should have javascript skill name", () => {
      cy.get("[data-test=toolbox-name-JavaScript]").should(
        "have.text",
        "JavaScript"
      );
    });
  });

  context("DynamoDB", () => {
    it("should have dynamodb image", () => {
      cy.get("[data-test=toolbox-image-DynamoDB]")
        .should("have.attr", "src")
        .and("match", /dynamodb\.png/);
    });

    it("should have dynamodb skill name", () => {
      cy.get("[data-test=toolbox-name-DynamoDB]").should(
        "have.text",
        "DynamoDB"
      );
    });
  });

  context("PostgreSQL", () => {
    it("should have postgresql image", () => {
      cy.get("[data-test=toolbox-image-PostgreSQL]")
        .should("have.attr", "src")
        .and("match", /postgresql\.png/);
    });

    it("should have postgresql skill name", () => {
      cy.get("[data-test=toolbox-name-PostgreSQL]").should(
        "have.text",
        "PostgreSQL"
      );
    });
  });
});
