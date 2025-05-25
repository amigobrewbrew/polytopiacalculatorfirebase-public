import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import CardWithShadow from "./cardWithShadow";
import { VersionConfig } from "../types/VersionConfig";

type GameVersionSelectProps = {
    versionConfig: VersionConfig;
    versionConfigs: Record<string, VersionConfig>;
    handleGameVersionChange: (event: SelectChangeEvent) => void;
};

const gameVersionSelect = ({
    versionConfig,
    versionConfigs,
    handleGameVersionChange,
}: GameVersionSelectProps) => {
    return (
        <CardWithShadow sx={{ p: "3px 2%", width: "100%" }}>
            <Box
                component="span"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    typography: "body2",
                }}
            >
                <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
                    <InputLabel id="version-select-label">
                        Game version
                    </InputLabel>
                    <Select
                        labelId="version-select-label"
                        id="version-select"
                        value={versionConfig.version}
                        label="Game version"
                        onChange={handleGameVersionChange}
                    >
                        {Object.entries(versionConfigs)
                            .sort(([a], [b]) => b.localeCompare(a))
                            .map(([version, config]) => (
                                <MenuItem key={version} value={version}>
                                    {version} - {config.title}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <span>Build version: {versionConfig?.buildVersion}</span>
            </Box>
        </CardWithShadow>
    );
};

export default gameVersionSelect;
