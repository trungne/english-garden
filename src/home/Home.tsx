import styles from "./Home.module.css";

import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
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
    const color = "#d591b2";
    const navigate = useNavigate();
    return (
        <div className={styles['home-menus']}>
            <Button sx={{
                backgroundColor: color,
            
            }} onClick={() => {
                navigate('/courses')
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