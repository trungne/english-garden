import communicativeImage from './static/communicative.png';
import ieltsImage from './static/ielts.png';
import { useNavigate } from "react-router-dom";

import styles from './course.module.css';

function CourseType({url, imgUrl} : {url: string, imgUrl: string}){
    const navigate = useNavigate();
    return (
        <div
        style={{
            backgroundImage: `url(${imgUrl})`
        }}
        className={styles['course-type']}
        onClick={() => {
            navigate(url);
        }}>

        </div>

    )
}

export default function Courses() {
    return (
        <div className={styles['content-courses']}>
            <CourseType url="communicative" imgUrl={communicativeImage} />
            <CourseType url="ielts" imgUrl={ieltsImage} />
        </div>

    )
}