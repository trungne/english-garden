import styles from "./communicative.module.css";

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import Paper from '@mui/material/Paper';

import { Fade } from "react-awesome-reveal";

import CoursePreviews from "./CoursePreviews";
import CourseOutcomes from "./CourseOutcomes";
import courses from "./coursedata";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import CourseDescription from "./CourseDescription";


const theme = createTheme({
    typography: {
        name: {
            color: "#581f7e",
            fontFamily: "SansterdamScript"
        }
    }
});

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


function ContentBox({ children, height }: { children: ReactElement, height?: string | number }) {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: height ? height : "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </Box>
    )
}
function CourseOverviewItem({ text }: {
    text: string
}) {
    return (
        <Paper sx={{
            width: "10vmax",
            height: "10vmax",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }} >
            <Typography variant="subtitle1">
                {text}
            </Typography>
        </Paper>

    )
}


export default function CourseInfo() {
    const params = useParams();
    const course = courses[`${params.courseName}`];
    if (course === undefined) {
        return null;
    }


    const coverStyle: React.CSSProperties = {
        backgroundImage: `url(${course.photoUrl})`,
    }

    return (
        <div className={styles['course-overlay']}>
            <Fade
                triggerOnce={true}
                damping={0.1}
                cascade
            >
                <div style={coverStyle} className={styles['course-banner']}>
                    <div className={styles['course-title']}>
                        <ThemeProvider theme={theme}>
                            <Typography fontSize={"10vmin"} variant="name">
                                {course.name}
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>

                <Divider flexItem />
            </Fade>

            <Fade damping={0.1} cascade>
                <ContentBox height="40vh">
                    <CourseDescription description={course.description} />
                </ContentBox>
            </Fade>

            <Fade>
                <ContentBox height="auto">
                    <div className={styles['course-overview']}>
                        <CourseOverviewItem text={`${course.level}`} />
                        <CourseOverviewItem text={course.duration} />
                    </div>
                </ContentBox>
            </Fade>

            <Divider flexItem />



            <Divider flexItem />

            <Fade damping={0.1} cascade>
                <ContentBox>
                    <CourseOutcomes outcomes={course.outcomes} />
                </ContentBox>
            </Fade>

            <Divider flexItem />

            <Fade damping={0.1} cascade>
                <CoursePreviews images={course.previews} />
            </Fade>

            <Divider flexItem />
        </div>
    )
}