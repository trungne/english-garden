import styles from "./communicative.module.css";
import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"


import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";

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
    const style: React.CSSProperties = {
        backgroundImage: `url(${photoUrl})`,
    }
    
    const contentStyle: React.CSSProperties = {};
    contentStyle[direction === "right" ? "marginRight" : "marginLeft"] = " 50%";

    return (
        <div className={styles['course-overlay']}>
            <div style={style} className={styles['course']}>
                <div style={contentStyle} className={styles['course-content']}>
                    <ThemeProvider theme={theme}>
                        <Typography fontSize={"5vmin"} variant="name">
                            {name}
                        </Typography>
                    </ThemeProvider>
                </div>
            </div>
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

                return <Course direction={course.direction} name={course.name} photoUrl={course.photoUrl} description={course.description} />
            })}
        </div>
    )
}