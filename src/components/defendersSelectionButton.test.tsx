import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DefendersSelectionButton from "./defendersSelectionButton";

describe("DefendersSelectionButton", () => {
  const mockOnClick = jest.fn();
  const mockButtonImage = "test-image-url";

  it("calls onClick when the button is clicked", () => {
    render(
      <DefendersSelectionButton
        defenderType="testType"
        onClick={mockOnClick}
        ButtonImage={mockButtonImage}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  }); 
});
