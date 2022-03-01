import styles from "./communicative.module.css";
import Paper from '@mui/material/Paper';

function OverviewItem({ content, width }: { content: string, width: number | string }) {
    return (
        <Paper sx={{
            display: "flex",
            width: width,
            maxWidth: "300px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            aspectRatio: "1/1",
        }}>
            {content}
        </Paper>

    )
}

export default function CourseOverview({ duration, level }: { duration: number, level: string }) {
    return (
        <div className={styles['course-overview']}>
            <OverviewItem width={"30%"} content={`${duration} tiếng`} />
            <OverviewItem width={"30%"} content={`${level}`} />
        </div>

    )
}