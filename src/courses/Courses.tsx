import Box from '@mui/material/Box';

import seedImage from './static/seed.jpg';
import leafImage from './static/leaf.jpg';
import flowerImage from './static/flower.jpg';
import fruitImage from './static/fruit.jpg';
import Course from './Course';

import styles from './course.module.css';
  
export default function Courses() {
    return (
        <div style={{width: "100%", height: "100%"}}>
            {/* <Box >
                <img style={imgStyle} alt="header" src={coverImage}/>
            </Box> */}
            <Box className={styles.content} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: "wrap",
                    height: "100%",
                    alignItems: 'center',
                    gap: "1em 1em",
                    
                    
                }}>
                <Course image={seedImage} description="beginner course" />
                <Course image={leafImage} description="pre-intermediate course" />
                <Course image={flowerImage} description="intermediate course" />
                <Course image={fruitImage} description="upper-intermediate course" />
            </Box>
        </div >

    )
}