import Intro from "@/components/Intro";
import { IIntro } from "@/data/types";

describe("<Intro />", () => {
  const introData: IIntro = {
    title: "Dummy Intro Title",
    body: ["line 1", "line 2"],
  };

  beforeEach(() => {
    cy.mount(<Intro intro={introData} />);
  });

  context("h2 title", () => {
    it("should display intro title", () => {
      cy.get("div > h2")
        .should("be.visible")
        .and("have.text", "Dummy Intro Title");
    });
  });

  context("section body", () => {
    it("should display first body line", () => {
      cy.get("section > div > p")
        .eq(0)
        .should("be.visible")
        .and("have.text", "line 1");
    });
    it("should display second body line", () => {
      cy.get("section > div > p")
        .eq(1)
        .should("be.visible")
        .and("have.text", "line 2");
    });
  });
});
