import styles from "./courseinfo.module.css";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";
import { Container } from "@mui/material";
import Box from "@mui/system/Box";

function OverviewItem({ content, backgroundColor }: { content: string, backgroundColor: string }) {
    return (
        <Paper className={styles['course-overview-item']} sx={{
            backgroundColor: backgroundColor
        }}>
            <Fade>
                <Typography component={"div"} variant="normalText">
                    {content}
                </Typography>
            </Fade>

        </Paper>

    )
}

export default function CourseOverview({ duration, level }: { duration: number, level: string }) {
    return (
        <Container maxWidth='md' >
            <Box className={styles['course-overview']}>
                <OverviewItem backgroundColor="#6db089" content={`Thời lượng: ${duration} tiếng`} />
                <OverviewItem backgroundColor="#9ce0e3" content={`Trình độ đầu vào: ${level}`} />
                <OverviewItem backgroundColor="#b1acde" content={`Học phí: 8.000.000 VNĐ`} />
            </Box>
        </Container >
    )
}