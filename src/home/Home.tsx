import styles from "./Home.module.css";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
theme.typography.h3 = {
    color: "#d591b2",
    fontSize: '1.5rem',
    '@media (min-width:650px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4.5rem',
    },
};

function HomeMenu() {
    const color = "#d591b2"
    return (
        <div className={styles['home-menus']}>
            <Button sx={{
                backgroundColor: color,

            }} color="success" variant="contained">
                Get Started
            </Button>
        </div>
    )
}

function Home() {
    return (
        <div className={styles['home']}>
            <div className={styles['home-title']}>
                <ThemeProvider theme={theme}>
                    <Typography sx={{
                        textShadow: "1px 1px #66588e"
                    }} gutterBottom variant="h3">
                        Grow the seed in you
                    </Typography>
                </ThemeProvider>
                <HomeMenu />
            </div>
            
        </div>
    );
}

export default Home;