import styles from "./communicative.module.css";

import Typography from '@mui/material/Typography';

import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import CommuncativeCourse from "./CommunicativeCourse";
import CoursePreviews from "./CoursePreviews";

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



function CourseOverviewItem({ text }: { text: string
}) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5em",
            
        }}>
            <Typography sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }} variant="h4">
                {text}
            </Typography>
        </div>

    )
}
export interface CourseProps {
    course: CommuncativeCourse,
    direction: string,
}

export default function CourseInfo({
    course,
    direction,
}: CourseProps) {

    const coverStyle: React.CSSProperties = {
        backgroundImage: `url(${course.photoUrl})`,
    }

    const titleStyle: React.CSSProperties = {};
    titleStyle[direction === "right" ? "marginRight" : "marginLeft"] = " 50%";

    return (

        <Fade
            triggerOnce={true}
            className={styles['course-overlay']}
            damping={0.1}
            cascade
            direction={direction === "left" ? "left" : "right"}>
            <div>
                <div style={coverStyle} className={styles['course-cover']}>
                    <div style={titleStyle} className={styles['course-title']}>
                        <ThemeProvider theme={theme}>
                            <Typography fontSize={"10vmin"} variant="name">
                                {course.name}
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>

                <div className={styles['course-overview']}>
                    <CourseOverviewItem  text={`${course.level}`} />
                    <CourseOverviewItem  text={course.duration} />
                </div>

                <CoursePreviews images={course.previews} />

                <div>
                    <Typography>
                        {course.description}
                    </Typography>
                </div>
            </div>

        </Fade>

    )
}