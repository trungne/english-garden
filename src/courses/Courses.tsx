import communicativeImage from './static/communicative.png';
import ieltsImage from './static/ielts.png';
import Course from './Course'
import Menu from '../menu/Menu';
import styles from './course.module.css';
import { Outlet } from 'react-router-dom';

export default function Courses() {
    return (
        <div className={styles['content-courses']}>
            <Course url="communicative" imgUrl={communicativeImage} description="communicative english courses" />
            <Course url='ielts' imgUrl={ieltsImage} description="ielts courses" />
        </div>

    )
}