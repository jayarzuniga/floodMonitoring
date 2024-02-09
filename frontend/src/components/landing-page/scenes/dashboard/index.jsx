import { Box, Button, /*IconButton,*/ Typography, useTheme } from "@mui/material";
// import { DownloadOutlined } from "@mui/icons-material/DownloadOutlined";
import Header from "../../Header";
// import GeographyChart from "../../GeographyChart";
import LineChart from "../../LineChart";
import BarChart from "../../BarChart";
import { tokens } from "../../../../theme";
// import { mockTransactions } from "../../../../assets/data/mockData";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dashboard" subtitle="Welcome to your Dashboard" />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: "red",
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px"
                        }}
                    >
                        DANGER: ALERT RESIDENTS!
                    </Button>
                </Box>

            </Box>
            {/* GRID and CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat (12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/*ROW 1*/}
                <Box
                    gridRow="span 2"
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <BarChart />
                </Box>

                {/*ROW 2*/}
                <Box
                    gridRow="span 3"
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}

                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Water Level Per Minute
                            </Typography>

                            <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                                10 cm
                            </Typography>
                        </Box>
                    </Box>

                    <Box height="80%" m="20px" >
                        <LineChart />
                    </Box>

                </Box>


            </Box>
        </Box>
    )
}

export default Dashboard;