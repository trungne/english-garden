import styles from './communicative.module.css';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

export default function CourseOutcomes({ outcomes }: { outcomes: string[] }) {
    return (
        <div>
            <Typography variant="h4">
                Sau khóa học, bạn có thể:
            </Typography>
            <br/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}>
                <div className={styles['course-outcomes']}>
                    {outcomes.map((outcome, idx) => {
                        return (
                            <div className={styles['outcome']} key={idx}>
                                <CheckIcon />
                                <Typography variant="subtitle1">
                                    {outcome}
                                </Typography>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}