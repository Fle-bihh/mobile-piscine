import { useSimpleButton } from "@/hooks/simple-button.hook";
import { log } from "@/functions/log.functions";

jest.mock("@/functions/log.functions");

describe("useSimpleButton", () => {
  it("calls log when the button is pressed", () => {
    const { onPressButton } = useSimpleButton();

    // Trigger the onPressButton function
    onPressButton();

    // Verify that the mocked log function was called with the correct argument
    expect(log).toHaveBeenCalledWith("Button pressed.");
  });
});
