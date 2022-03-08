import styles from "./Home.module.css";

import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

function HomeMenu() {
    const color = "#d591b2";
    const navigate = useNavigate();
    return (
        <div className={styles['home-menus']}>
            <Button sx={{
                backgroundColor: color,

            }} onClick={() => {
                navigate('/about')
            }} color="success" variant="contained">
                <Typography variant="homeSmall">
                    Bắt đầu
                </Typography>
            </Button>
        </div>
    )
}

function Home() {
    return (
        <div className={styles['home']}>
            <div className={styles['home-title']}>
                <Typography sx={{
                    textShadow: "2px 2px #66588e",
                    color: "white",
                }} gutterBottom variant="home">
                    Gieo Hạt Mầm Ngôn Ngữ
                </Typography>
                <HomeMenu />
            </div>
        </div>
    );
}

export default Home;