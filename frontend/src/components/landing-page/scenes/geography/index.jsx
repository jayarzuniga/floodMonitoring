import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Header from "../../Header";
import GeographyChart from "../../GeographyChart";
import { tokens } from "../../../../theme";


const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px">
            <Header title="Geography Chart" subtitle="Simple Geo Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="10px" >
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;