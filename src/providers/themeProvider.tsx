import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

type ThemeProviderProps = {
    children: React.ReactNode;
};

// Create theme once outside of component to avoid recreation on every render
const theme = createTheme({
    typography: {
        fontFamily: "Josefin Sans, Arial, sans-serif",
    },
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
