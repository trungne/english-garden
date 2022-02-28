import styles from "./communicative.module.css";
import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"


import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const theme = createTheme({
    typography: {
        name: {
            color: "#581f7e",
            fontFamily: "SansterdamScript"
        }
    }
})

declare module '@mui/material/styles' {
    interface TypographyVariants {
        name: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        name?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        name: true;
    }
}

interface CourseProps {
    name: string,
    photoUrl: string,
    description: string,
    direction: string,
}
function Course({ name, photoUrl, description, direction }: CourseProps) {
    const coverStyle: React.CSSProperties = {
        backgroundImage: `url(${photoUrl})`,
    }

    const titleStyle: React.CSSProperties = {};
    titleStyle[direction === "right" ? "marginRight" : "marginLeft"] = " 50%";

    return (
        <div className={styles['course-overlay']}>
            <Fade
                damping={0.1}
                cascade
                direction={direction === "left" ? "left" : "right"}>
                <div style={coverStyle} className={styles['course-cover']}>
                    <div style={titleStyle} className={styles['course-title']}>
                        <ThemeProvider theme={theme}>
                            <Typography fontSize={"10vmin"} variant="name">
                                {name}
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>
                <div className={styles['course-overview']}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5em",
                    }}>
                        <MenuBookIcon />
                        <Typography>
                            A1-A2
                        </Typography>
                    </div>
                    <div>
                        <CalendarTodayIcon />
                        120 hours
                    </div>

                </div>
                <Typography>
                    {description}
                </Typography>

            </Fade>
        </div>

    )
}

const courses: CourseProps[] = [
    {
        name: "Seed",
        photoUrl: seedImg,
        description: "Beginner Course",
        direction: "left"
    },
    {
        name: "Leaf",
        photoUrl: leafImg,
        description: "Pre-intermediate Course",
        direction: "right"
    },
    {
        name: "Flower",
        photoUrl: flowerImg,
        description: "Intermediate Course",
        direction: "left"
    },
    {
        name: "Fruit",
        photoUrl: fruitImg,
        description: "Advanced Course",
        direction: "right"
    },
]

export default function Communicative() {

    return (
        <div className={styles['communicative']}>
            {courses.map(course => {
                return <Course
                    direction={course.direction}
                    name={course.name}
                    photoUrl={course.photoUrl}
                    description={course.description}
                />
            })}
        </div>
    )
}