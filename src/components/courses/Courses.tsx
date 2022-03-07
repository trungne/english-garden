import communicativeImage from './static/communicative.png';
import ieltsImage from './static/ielts.png';
import { useNavigate } from "react-router-dom";

import styles from './course.module.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function CourseType({name, url, imgUrl} : {name: string, url: string, imgUrl: string}){
    const navigate = useNavigate();
    return (
        <Box
        sx={{
            "&:before": {
                content: '""',
                zIndex: -1,
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${imgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                filter: "blur(2px)",
            }
        }}
        className={styles['course-type']}
        onClick={() => {
            navigate(url);
        }}>
            <Typography sx={{
                textShadow: "4px 4px 3px black",
                color: "white"}} variant="courseType">
                {name}
            </Typography>
        </Box>

    )
}

export default function Courses() {
    return (
        <div className={styles['content-courses']}>
            <CourseType name="Giao Tiếp" url="communicative" imgUrl={communicativeImage} />
            <CourseType name="IELTS" url="ielts" imgUrl={ieltsImage} />
        </div>

    )
}