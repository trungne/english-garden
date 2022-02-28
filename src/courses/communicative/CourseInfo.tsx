import styles from "./communicative.module.css";

import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"

import seedPreview1 from './static/seed_preview1.jpg';
import seedPreview2 from './static/seed_preview2.jpg';
import seedPreview3 from './static/seed_preview3.jpg';


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

const courses: CourseProps[] = [
    {
        course: {
            name: "Seed",
            photoUrl: seedImg,
            description: "Hạt (Seed) là khóa học dành cho những ai vừa bắt đầu hành trình trồng cây. Tại Hạt, các bạn sẽ được giới thiệu và bồi đắp gốc rễ của tiếng Anh cũng như được thực hành với những tình huống giao tiếp thông dụng.",
            duration: "120 hours",
            level: "A1-A2",
            previews: [seedPreview1, seedPreview2, seedPreview3],
            outcomes: ["Giới thiệu bản thân và nói về sở thích",
                "Hiểu và sử dụng những cụm từ thông dụng và cơ bản",
                "Làm quen với những tình huống giao tiếp thông dụng",
                "Sử dụng các thì cơ bản ở quá khứ, hiện tại, tương lai",
                "Áp dụng tư duy phản biện",
                "Sử dụng các từ nối cơ bản để nói và viết mạch lạc hơn",
                "Phát âm cơ bản",
                "Nhận biết các âm tiết dễ nhầm lẫn",
                "Viết đoạn văn ngắn mô tả đồ vật và người",
                "Áp dụng văn phong KISS (Keep It Short & Simple)"]
        },
    },
    {
        course: {
            name: "Leaf",
            photoUrl: leafImg,
            description: "Pre-intermediate Course",
            duration: "120 hours",
            level: "B1",
            previews: [],
            outcomes: [],
        },
    },
    {
        course: {
            name: "Flower",
            photoUrl: flowerImg,
            description: "Intermediate Course",
            duration: "120 hours",
            level: "B2",
            previews: [],
            outcomes: [],
        },
    },
    {
        course: {
            name: "Fruit",
            photoUrl: fruitImg,
            description: "Advanced Course",
            duration: "120 hours",
            level: "C1",
            previews: [],
            outcomes: [],
        },
    },
]


export interface CourseProps {
    course: CommuncativeCourse,
}

export default function CourseInfo({
    course,
}: CourseProps) {

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