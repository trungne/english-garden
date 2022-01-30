import styles from "./Home.module.css";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import courseMenu from './static/course_menu.png';
import aboutUsMenu from './static/about_us_menu.png';


function MenuCard(props: { name: string, photoUrl: string, url: string }) {
    const navigate = useNavigate();

    return (
        <Card sx={{
            width: 0.35,
            '@media screen and (max-width: 760px)': {
                width: 0.65,
                height: "auto",
                marginTop: "1em"
            }
        }}>
            <CardActionArea
                onClick={() => navigate(props.url)}>
                <CardMedia
                    component="img"
                    image={props.photoUrl}
                />
            </CardActionArea>
        </Card>
    );
}

function Home() {
    return (
        <div className={styles.menus}>
            <MenuCard name="Courses" photoUrl={courseMenu} url="/courses" />
            <MenuCard name="About Us" photoUrl={aboutUsMenu} url="/about" />
        </div>
    );
}

export default Home;