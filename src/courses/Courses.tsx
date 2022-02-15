import communicativeImage from './static/communicative.png';
import ieltsImage from './static/ielts.png';
import Course from './Course';
import Menu from '../menu/Menu';
import styles from './course.module.css';

export default function Courses() {
    return (
        <div className={styles['courses']}>
            <Menu />
            <div className={styles['content']}>
                <div className={styles['content-courses']}>
                    <Course imgUrl={communicativeImage} description="communicative english courses" />
                    <Course imgUrl={ieltsImage} description="ielts courses" />
                </div>

            </div>
        </div >

    )
}