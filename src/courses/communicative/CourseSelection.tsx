import styles from "./communicative.module.css";

import seedCover from "./static/cover/seed.jpg";
import leafCover from "./static/cover/leaf.jpg";
import flowerCover from "./static/cover/flower.jpg";
import fruitCover from "./static/cover/fruit.jpg";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";


const theme = createTheme();
theme.typography.h3 = {
    fontFamily: "SansterdamScript",
    color: "#dedede",
    fontSize: '1.5rem',
    '@media (min-width:650px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4.5rem',
    },
};

interface CourseCover {
    name: string,
    coverImgUrl: string,
    url: string,
}
const courses: CourseCover[] = [
    {
        name: "Seed",
        coverImgUrl: seedCover,
        url: "seed",
    },
    {
        name: "Leaf",
        coverImgUrl: leafCover,
        url: "leaf",
    },
    {
        name: "Flower",
        coverImgUrl: flowerCover,
        url: "flower",
    },
    {
        name: "Fruit",
        coverImgUrl: fruitCover,
        url: "fruit",
    },
];

export default function CourseSelection() {
    const navigate = useNavigate();
    return (
        <div className={styles['covers']}>
            {courses.map((course, idx) => {
                return (
                    <div className={styles['course-cover']}
                        key={idx}
                        onClick={() => {
                            navigate(course.url);
                        }}
                        >

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