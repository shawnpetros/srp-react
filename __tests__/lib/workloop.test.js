import { workloop } from "../../lib";
import performUnitOfWork from "../../lib/performUnitOfWork";

jest.mock("../../lib/performUnitOfWork");
jest.spyOn(window, "requestIdleCallback");

describe("workloop", () => {
  it("should should call requestIdleCallback to start a loop", () => {
    workloop();
    expect(window.requestIdleCallback).toHaveBeenCalled();
  });
  it("should should call requestIdleCallback to start a loop", () => {
    // workloop();
    expect(performUnitOfWork).toHaveBeenCalled();
  });
});
