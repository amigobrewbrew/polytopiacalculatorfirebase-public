import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import App from "./App";

// Mock the child components
vi.mock("./components/navbar", () => ({
    default: () => <div data-testid="navbar">Navbar</div>,
}));
vi.mock("./components/helpPage", () => ({
    default: () => <div data-testid="help-page">Help Page</div>,
}));
vi.mock("./components/secretGame", () => ({
    default: () => <div data-testid="secret-game">Secret Game</div>,
}));
vi.mock("./components/battleGroundDetails", () => ({
    default: () => <div data-testid="battle-ground">Battle Ground</div>,
}));
vi.mock("./envConfig", () => ({
    default: {
        firebase: {
            apiKey: "test_firebase_api_key",
            authDomain: "test.firebaseapp.com",
            projectId: "test-project-id",
            storageBucket: "test.appspot.com",
            messagingSenderId: "123456789",
            appId: "1:123456789:web:abcdef",
            measurementId: "G-TESTMEASUREMENT",
        },
        siteVerification: "test-verification-code",
        email: "test@example.com",
        adsenseClient: "https://example.com/adsense-test",
    },
}));

describe("App Routing", () => {
    const renderWithRouter = (initialRoute: string) => {
        return render(
            <MemoryRouter initialEntries={[initialRoute]}>
                <App />
            </MemoryRouter>
        );
    };

    test("renders home page at /", () => {
        renderWithRouter("/");
        expect(screen.getByTestId("battle-ground")).toBeInTheDocument();
    });

    test("renders help page at /help", () => {
        renderWithRouter("/help");
        expect(screen.getByTestId("help-page")).toBeInTheDocument();
    });

    test("renders secret game at /secretgame", () => {
        renderWithRouter("/secretgame");
        expect(screen.getByTestId("secret-game")).toBeInTheDocument();
    });

    test("redirects unknown routes to home page", () => {
        renderWithRouter("/unknown-route");
        expect(screen.getByTestId("battle-ground")).toBeInTheDocument();
    });

    test("navbar is present on all routes", () => {
        renderWithRouter("/");
        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    });
});
