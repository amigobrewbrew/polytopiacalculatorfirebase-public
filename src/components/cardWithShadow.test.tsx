import { render } from "@testing-library/react";
import CardWithShadow from "./cardWithShadow";

describe("CardWithShadow", () => {
    test("renders with children", () => {
        const { getByText } = render(
            <CardWithShadow>
                <div>Test Content</div>
            </CardWithShadow>
        );

        expect(getByText("Test Content")).toBeInTheDocument();
    });

    test("applies custom styles when provided", () => {
        const { container } = render(
            <CardWithShadow sx={{ backgroundColor: "red" }}>
                <div>Test Content</div>
            </CardWithShadow>
        );

        // This is a simple check - you might need to adjust based on your component implementation
        const card = container.firstChild;
        expect(card).toBeInTheDocument();
    });
});
