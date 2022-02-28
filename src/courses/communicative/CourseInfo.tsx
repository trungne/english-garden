import styles from "./communicative.module.css";

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import CommuncativeCourse from "./CommunicativeCourse";
import CoursePreviews from "./CoursePreviews";
import CourseOutcomes from "./CourseOutcomes";
import { ReactElement } from "react";

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


function ContentBox({ children, height }: { children: ReactElement, height?: string }) {
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
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5em",
        }}>
            <Chip label={text}/>
        </div>

    )
}
export interface CourseProps {
    course: CommuncativeCourse,
    direction: string,
    coverImgUrl: string
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
        <div className={styles['course-overlay']}>
            <Fade
                triggerOnce={true}
                damping={0.1}
                cascade
                direction={direction === "left" ? "left" : "right"}>
                <div style={coverStyle} className={styles['course-banner']}>
                    <div style={titleStyle} className={styles['course-title']}>
                        <ThemeProvider theme={theme}>
                            <Typography fontSize={"10vmin"} variant="name">
                                {course.name}
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>

                <Divider flexItem />
            </Fade>
            <Fade>
                <ContentBox height="20vh">
                    <div className={styles['course-overview']}>
                        <CourseOverviewItem text={`${course.level}`} />
                        <CourseOverviewItem text={course.duration} />
                    </div>
                </ContentBox>
            </Fade>

            <Divider flexItem />
            <Fade
                damping={0.1}
                cascade
                >
                <ContentBox>
                    <Typography variant="h2" textAlign={"center"}>
                        {course.description}
                    </Typography>
                </ContentBox>
            </Fade>
            <Divider flexItem />

            <Fade
                damping={0.1}
                cascade
                >
                <ContentBox>
                    <CourseOutcomes outcomes={course.outcomes} />
                </ContentBox>
            </Fade>

            <Divider flexItem />

            <Fade
                damping={0.1}
                cascade
                >
                <CoursePreviews images={course.previews} />
            </Fade>
            <Divider flexItem />
        </div>
    )
}