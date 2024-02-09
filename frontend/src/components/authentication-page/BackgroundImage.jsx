import {Box} from "@mui/material"
import Graphic from './../../assets/img/Graphic.png.svg';

const BackgroundImage = () => {
    return (
        <Box
        display="flex"
        flex="1.5"
        width="100%"
        height="100vh"
        justifyContent="center"
        backgroundColor="aqua"
      >
        <img src={Graphic} alt="Background Graphic" />
      </Box>
        
    )
}

export default BackgroundImage;