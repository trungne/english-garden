import styles from "./communicative.module.css";

import seedCover from "./static/cover/seed.jpg";
import leafCover from "./static/cover/leaf.jpg";
import flowerCover from "./static/cover/flower.jpg";
import fruitCover from "./static/cover/fruit.jpg";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";


const theme = createTheme();
theme.typography.h3 = {
    fontFamily: "SansterdamScript",
    color: "#dedede",
    [theme.breakpoints.down('md')]: {
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
    let direction = "left";
    const getDirection = () => {
        if (direction === "left"){
            direction = "right";
            return "left";
        }
        else{
            direction = "left";
            return "right";
        }
    }
    return (
        <div className={styles['covers']}>
            {courses.map((course, idx) => {
                return (
                    <Fade className={styles['course-cover']}
                        key={idx}
                        direction = {getDirection()}
                    >
                        <div onClick={() => {
                            navigate(course.url);
                        }} style={{
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
                    </Fade>
                )
            })}
        </div>
    )
}