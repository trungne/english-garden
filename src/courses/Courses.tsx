import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import coverImage from './static/cover.png';
import seedImage from './static/seed.png';
import leafImage from './static/leaf.png';
import flowerImage from './static/flower.png';
import fruitImage from './static/fruit.png';
import Course from './Course';

export default function Courses() {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: "1em 1em 1em 1em"
                }}>
                <Card sx={{
                    width: 1
                }}>
                    <CardMedia

                        component="img"
                        image={coverImage}
                    />
                </Card>
            </Box>
            <Divider variant='middle'/>
            <Box sx={{
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