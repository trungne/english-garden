import styles from "./courseinfo.module.css";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
theme.typography.caption = {
    textAlign: "center",
    fontWeight: "100",
    fontStyle: "italic",
    
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
};

function OverviewItem({ content, backgroundColor }: { content: string, backgroundColor: string }) {
    return (
        <Paper sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: backgroundColor,
            flexGrow: '1',
        }}>
            <Fade style={{maxWidth: "600px"}}>
                <ThemeProvider theme={theme}>
                    <Typography component={"div"} variant="caption">
                        {content}
                    </Typography>
                </ThemeProvider>
            </Fade>

        </Paper>

    )
}

export default function CourseOverview({ duration, level }: { duration: number, level: string }) {
    return (
        <div className={styles['course-overview']} >
            <OverviewItem backgroundColor="#6db089" content={`Thời lượng: ${duration} tiếng`} />
            <OverviewItem backgroundColor="#9ce0e3" content={`Trình độ đầu vào: ${level}`} />
            <OverviewItem backgroundColor="#b1acde" content={`Chú trọng kỹ năng giao tiếp và sử dụng >80% Tiếng Anh trong lớp`} />
        </div >


    )
}