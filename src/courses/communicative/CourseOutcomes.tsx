import styles from './communicative.module.css';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import { Fade } from "react-awesome-reveal";

export default function CourseOutcomes({ outcomes }: { outcomes: string[] }) {
    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "1em",
            maxWidth: "1200px",
        }}>
            <div style={{ width: "90%" }}>
                <Typography variant="h4" textAlign={"left"}>
                    Sau khóa học, bạn có thể:
                </Typography>
            </div>
            <div className={styles['course-outcomes']}>
                <Fade damping={0.5} direction="up" className={styles['outcome']}>
                    {outcomes.map((outcome, idx) => {
                        return (
                            <div
                                style={{ display: "flex", alignItems: "center", gap: "1.5em" }}
                                 key={idx}>
                                <CheckIcon />
                                <Typography variant="subtitle1">
                                    {outcome}
                                </Typography>
                            </div>
                        )
                    })}
                </Fade>
            </div>
        </div>

    )
}