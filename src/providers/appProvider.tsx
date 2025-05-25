import { SnackBarProvider } from "./snackbarContextProvider";
import { ThemeProvider } from "./themeProvider";

// Wrapper for all providers. Add providers here.
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <SnackBarProvider>{children}</SnackBarProvider>
        </ThemeProvider>
    );
};
