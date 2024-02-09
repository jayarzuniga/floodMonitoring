import { Box } from "@mui/material";
import Header from "../../Header";
import LineChart from "../../LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh" width="95%">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;