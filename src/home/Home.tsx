import "./Home.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, createTheme } from '@mui/material';

import courseMenu from './static/course_menu.jpg'

function MenuCard(props: {name: string, photoUrl: string}){
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
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
        <div className="menus">
            <MenuCard name="Courses" photoUrl={courseMenu}/>
            <MenuCard name="Classroom" photoUrl={courseMenu}/>
            <MenuCard name="About Us" photoUrl={courseMenu}/>
        </div>
    );
}

export default Home;