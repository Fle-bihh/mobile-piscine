import { log } from "../log.functions";

describe("log function", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls console.log with the correct message", () => {
    log("Test message");
    expect(console.log).toHaveBeenCalledWith("Test message");
  });

  it("calls console.log with multiple arguments", () => {
    log("Message", "arg1", "arg2");
    expect(console.log).toHaveBeenCalledWith("Message", "arg1", "arg2");
  });

  it("calls console.log with undefined when no arguments are provided", () => {
    log();
    expect(console.log).toHaveBeenCalledWith(undefined);
  });
});
