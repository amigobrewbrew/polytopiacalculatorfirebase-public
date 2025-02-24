import * as React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardWithShadow from "./cardWithShadow";

const theme = createTheme();
const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("CardWithShadow", () => {
  it("renders its children", () => {
    const { getByText } = renderWithTheme(
      <CardWithShadow>
        <div>Test Child</div>
      </CardWithShadow>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("applies default styles when no props are overridden", () => {
    const { container } = renderWithTheme(
      <CardWithShadow>
        <div>Content</div>
      </CardWithShadow>
    );
    const element = container.firstChild as HTMLElement;
    console.log(element);
    expect(element).toHaveStyle({
      padding: "2%",
      backgroundColor: "white",
    });
  });

  it("merges custom sx styles with default styles", () => {
    const customSx = { mb: 10, backgroundColor: "red" };
    const { container } = renderWithTheme(
      <CardWithShadow sx={customSx}>
        <div>Content</div>
      </CardWithShadow>
    );
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      backgroundColor: "red",
      marginBottom: "80px",
    });
  });
});
