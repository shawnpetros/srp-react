import { TEXT_ELEMENT } from "../../constants";
import { createElement } from "../../lib";

describe("createElement", () => {
  it("should take in types, props, and children and return an object", () => {
    const expected = {
      type: "h1",
      props: {
        title: "foo",
        children: [
          {
            type: TEXT_ELEMENT,
            props: {
              nodeValue: "hello",
              children: []
            }
          }
        ]
      }
    };
    const actual = createElement("h1", { title: "foo" }, "hello");

    expect(actual).toEqual(expected);
  });
});
