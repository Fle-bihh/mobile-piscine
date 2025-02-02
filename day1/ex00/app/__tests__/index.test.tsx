import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Index from "../index";
import { useSimpleButton } from "@/hooks/simple-button.hook";

jest.mock("@/hooks/simple-button.hook");

describe("Index Screen", () => {
  const mockOnPressButton = jest.fn();

  beforeEach(() => {
    // Mock the hook
    (useSimpleButton as jest.Mock).mockReturnValue({
      onPressButton: mockOnPressButton,
    });
  });

  it("renders the title and button", () => {
    const { getByText } = render(<Index />);
    
    // Check if the title and button text are rendered
    expect(getByText("Welcome to Mobile Piscine!")).toBeTruthy();
    expect(getByText("Press me")).toBeTruthy();
  });

  it("calls the button's onPress handler when pressed", () => {
    const { getByText } = render(<Index />);

    // Simulate button press
    fireEvent.press(getByText("Press me"));
    expect(mockOnPressButton).toHaveBeenCalled();
  });
});
