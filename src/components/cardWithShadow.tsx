import Box from "@mui/material/Box";
import { ReactNode } from "react";
import {
    BORDER_RADIUS_DEFAULT,
    MARGIN_BOTTOM_DEFAULT,
    CARD_COLOR,
    PADDING_DEFAULT,
    BOX_SHADOW_DEFAULT,
} from "../customStyles";

interface CardWithShadowProps {
    children: ReactNode;
    shadowAmount?: number;
    sx?: object;
    style?: object;
    "data-testid"?: string;
}

const CardWithShadow = ({
    children,
    sx = {},
    style = {},
    "data-testid": dataTestId,
}: CardWithShadowProps) => {
    return (
        <Box
            boxShadow={BOX_SHADOW_DEFAULT}
            sx={{
                p: PADDING_DEFAULT,
                backgroundColor: CARD_COLOR,
                border: 0,
                borderRadius: BORDER_RADIUS_DEFAULT,
                mb: MARGIN_BOTTOM_DEFAULT,
                ...sx,
            }}
            style={style}
            data-testid={dataTestId}
        >
            {children}
        </Box>
    );
};

export default CardWithShadow;
