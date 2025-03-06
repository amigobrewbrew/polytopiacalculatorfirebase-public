/** This component defines the style and actions of the defender selection buttons using an interface */

import * as React from "react";
import Button from "@mui/material/Button";

/**
 * Interface is used so buttons in defender selection components are defined using these properties
 */
interface Props {
    defenderType: string;
    onClick: () => void;
    ButtonImage: any;
}

const defendersImageStyle = {
    height: "40px",
    width: "30px",
    objectFit: "contain",
    WebkitAppearance: "none",
    transform: "scaleX(-1)",
} as React.CSSProperties;

// const defendersButtonStyle = {
//   marginRight: 5,
//   marginLeft: 5,
//   borderRadius: 5,
//   marginBottom: 5,
//   marginTop: 5,
// } as React.CSSProperties;

const defendersButtonStyle = {
    m: 1,
    maxWidth: "4em",
    minWidth: "4em",
};

const DefendersSelectionButton: React.FC<Props> = ({
    defenderType,
    onClick,
    ButtonImage,
}) => {
    return (
        <Button
            onClick={onClick}
            className="defendersSelectionButton"
            size="small"
            variant="outlined"
            sx={defendersButtonStyle}
            color="error"
        >
            <img
                src={ButtonImage}
                alt="defendersSelectionButton"
                style={defendersImageStyle}
            />
        </Button>
    );
};

export default DefendersSelectionButton;
