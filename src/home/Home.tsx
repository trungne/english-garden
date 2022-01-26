import styles from "./Home.module.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

import courseMenu from './static/course_menu.jpg';
import aboutUsMenu from './static/about_us_menu.png';
import treeBackground from './tree-background.jpg';
function MenuCard(props: {name: string, photoUrl: string, url: string}){
    const navigate = useNavigate();

    return (
        <Card sx={{maxWidth: 200}}>
            <CardActionArea
            onClick={() => navigate(props.url)}>
                <CardMedia
                component="img"
                height="250"
                image={props.photoUrl}
                />
                
                <CardContent>
                    <Typography 
                    className="menuText"
                    fontSize="1.5em"
                     variant="button" component="div">
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function Home(){
    return (
        <div className={styles.menus}>
            <MenuCard name="Courses" photoUrl={courseMenu} url="/courses"/>
            <MenuCard name="About Us" photoUrl={aboutUsMenu} url="/about"/>
        </div>
    );
}

export default Home;