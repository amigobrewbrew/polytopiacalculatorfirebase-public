export const BORDER_RADIUS_DEFAULT = 2;
export const MARGIN_BOTTOM_DEFAULT = 1;
export const CARD_COLOR = "white";
export const PADDING_DEFAULT = "2%";
export const BOX_SHADOW_DEFAULT = 5;
export const SINGLE_COL_MAX_WIDTH_PX = 425;
export const ONE_HUNDRED_PERCENT = "100%";
export const MAX_WIDTH_PX = 900;
export const SINGLE_COLUMN_WIDTH_PERCENTAGE = 48;
export const getSecondaryButtonStyles = () => ({
    minWidth: "55px",
    padding: "1% 2%",
    marginRight: "2%",
});

/**
 * Padding/gap for the battleground layout. These must not be percentages:
 * a percentage padding resolves against the *parent* width, so on a wide
 * desktop window it ate enough of the 900px container that the two 425px
 * selection cards no longer fit side by side and wrapped onto two rows.
 */
export const LAYOUT_PADDING_PX = "8px";
export const LAYOUT_GAP_PX = "8px";
