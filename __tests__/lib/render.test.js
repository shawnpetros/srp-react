import { render, createElement, textElement } from "../../lib";

describe("render", () => {
  it("should take in a createElement result and append it to the container", () => {
    const srpReactElement = createElement(
      "h1",
      { title: "foo" },
      textElement("bar")
    );
    const expectedDom = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.title = "foo";
    h1.appendChild(document.createTextNode("bar"));
    expectedDom.appendChild(h1);
    const actualDom = document.createElement("div");
    render(srpReactElement, actualDom);

    expect(actualDom).toEqual(expectedDom);
  });
});
