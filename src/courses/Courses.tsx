import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import coverImage from './static/cover.png';
import seedImage from './static/seed.jpg';
import leafImage from './static/leaf.jpg';
import flowerImage from './static/flower.jpg';
import fruitImage from './static/fruit.jpg';
import Course from './Course';

import styles from './course.module.css';
const imgStyle = {
    width: "100%"
};
  
export default function Courses() {
    return (
        <div>
            <Box >
                <img style={imgStyle} alt="header" src={coverImage}/>
            </Box>
            <Divider variant='middle'/>
            <Box className={styles.content} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: "wrap",
                    
                    alignItems: 'center',
                    gap: "1em 1em",
                    padding: "1em 1em 1em 1em",
                    
                }}>
                <Course image={seedImage} description="beginner course" />
                <Course image={leafImage} description="pre-intermediate course" />
                <Course image={flowerImage} description="intermediate course" />
                <Course image={fruitImage} description="upper-intermediate course" />
            </Box>
        </div >

    )
}