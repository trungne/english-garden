import styles from "./Home.module.css";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import courseMenu from './static/course_menu.png';
import aboutUsMenu from './static/about_us_menu.png';

interface MenuCardProps {
    name: string,
    photoUrl: string,
    url: string,
}
function MenuCard({ name, photoUrl, url }: MenuCardProps) {
    const navigate = useNavigate();
    return (
        <div className={styles['menu-card']}>
            <Card sx={{
                width: 1,
            }}>
                <CardActionArea
                    onClick={() => navigate(url)}>
                    <CardMedia
                        alt={name}
                        component="img"
                        image={photoUrl}
                    />
                </CardActionArea>
            </Card>
        </div>

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