import styles from "./communicative.module.css";

import seedCover from "./static/cover/seed.jpg";
import leafCover from "./static/cover/leaf.jpg";
import flowerCover from "./static/cover/flower.jpg";
import fruitCover from "./static/cover/fruit.jpg";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Typography from "@mui/material/Typography";


const theme = createTheme();
theme.typography.h3 = {
    color: "#dedede",
    fontSize: '1.5rem',
    '@media (min-width:650px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4.5rem',
    },
};

const courses: CourseCover[] = [
    {
        name: "Seed",
        coverImgUrl: seedCover,
    },
    {
        name: "Leaf",
        coverImgUrl: leafCover,
    },
    {
        name: "Flower",
        coverImgUrl: flowerCover,
    },
    {
        name: "Fruit",
        coverImgUrl: fruitCover,
    },
];

interface CourseCover {
    name: string,
    coverImgUrl: string,
}
export default function Communicative() {

    return (
        <div className={styles['communicative']}>
            {courses.map((course, idx) => {
                return (
                    <div className={styles['course-cover']}
                        key={idx}>

                        <div style={{
                            backgroundImage: `url(${course.coverImgUrl})`
                        }} className={styles['cover']}>

                            <ThemeProvider theme={theme}>
                                <Typography sx={{
                                    textShadow: "1px 1px #3c3c3c"
                                }} variant="h3">
                                    {course.name}
                                </Typography>
                            </ThemeProvider>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}