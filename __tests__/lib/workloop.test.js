import { workloop } from "../../lib";

window.requestIdleCallback = jest.fn();

describe("workloop", () => {
  it("should should call requestIdleCallback to start a loop", () => {
    workloop();
    expect(requestIdleCallback).toHaveBeenCalled();
  });
});
