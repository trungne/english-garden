import styles from "./courseinfo.module.css";

import Typography from '@mui/material/Typography';
import { Fade } from "react-awesome-reveal";

export default function CourseTitle({ name, bannerUrl }: { name: string, bannerUrl: string }) {
    return (
        <Fade triggerOnce damping={0.1} cascade>
            <div style={{ backgroundImage: `url(${bannerUrl})` }} className={styles['course-banner']}>
                <div className={styles['course-title']}>

                    <Typography fontSize={"10vmin"} variant="name">
                        {name}
                    </Typography>

                </div>
            </div>
        </Fade>);
}