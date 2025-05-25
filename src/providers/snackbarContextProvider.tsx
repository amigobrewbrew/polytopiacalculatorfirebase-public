// Boilerplate from: https://gist.github.com/akinncar/a9a87537768287fc2c1ed7c7d77d9433

import { Alert, AlertColor, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

type SnackBarContextActions = {
    showSnackBar: (text: string, severity: AlertColor) => void;
};

const SnackBarContext = createContext({} as SnackBarContextActions);

type SnackBarContextProviderProps = {
    children: React.ReactNode;
};

const SnackBarProvider: React.FC<SnackBarContextProviderProps> = ({
    children,
}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("info");

    const showSnackBar = (text: string, color: AlertColor = "info") => {
        setMessage(text);
        setSeverity(color);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSeverity("info");
    };

    return (
        <SnackBarContext value={{ showSnackBar }}>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            {children}
        </SnackBarContext>
    );
};

const useSnackBar = (): SnackBarContextActions => {
    return useContext(SnackBarContext);
};

export { SnackBarProvider, useSnackBar };
