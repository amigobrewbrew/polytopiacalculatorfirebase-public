import Box from "@mui/material/Box";
import type React from "react";
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
    draggable?: boolean;
    onDragStart?: (e: React.DragEvent) => void;
    onDrag?: (e: React.DragEvent) => void;
    onDragOver?: (e: React.DragEvent) => void;
    onDrop?: (e: React.DragEvent) => void;
    onDragEnd?: (e: React.DragEvent) => void;
    className?: string;
}

const CardWithShadow = ({
    children,
    sx = {},
    style = {},
    draggable = false,
    onDragStart,
    onDrag,
    onDragOver,
    onDrop,
    onDragEnd,
    className,
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
            draggable={draggable}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnd={onDragEnd}
            className={className}
        >
            {children}
        </Box>
    );
};

export default CardWithShadow;
