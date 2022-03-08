import styles from "./courseinfo.module.css";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";

function OverviewItem({ content, backgroundColor }: { content: string, backgroundColor: string }) {
    return (
        <Paper sx={{
            display: "flex",
            width: "100%",
            maxWidth: "calc(1200px - 6em)",

            alignItems: "center",
            justifyContent: "center",
            backgroundColor: backgroundColor,
            flexGrow: '1',
        }}>
            <Fade style={{ maxWidth: "600px" }}>
                <Typography component={"div"} variant="normalText">
                    {content}
                </Typography>
            </Fade>

        </Paper>

    )
}

export default function CourseOverview({ duration, level }: { duration: number, level: string }) {
    return (
        <div className={styles['course-overview']} >
            <OverviewItem backgroundColor="#6db089" content={`Thời lượng: ${duration} tiếng`} />
            <OverviewItem backgroundColor="#9ce0e3" content={`Trình độ đầu vào: ${level}`} />
            <OverviewItem backgroundColor="#b1acde" content={`Học phí: 8.000.000 VNĐ`} />
        </div >


    )
}