import seedImage from './static/seed.jpg';
import leafImage from './static/leaf.jpg';
import flowerImage from './static/flower.jpg';
import fruitImage from './static/fruit.jpg';
import Course from './Course';
import Menu from '../menu/Menu';
import styles from './course.module.css';

export default function Courses() {
    return (
        <div className={styles['courses']}>
            <Menu />
            <div className={styles['content']}>
                <div className={styles['content-courses']}>
                    <Course imgUrl={seedImage} description="beginner course" />
                    <Course imgUrl={leafImage} description="pre-intermediate course" />
                    <Course imgUrl={flowerImage} description="intermediate course" />
                    <Course imgUrl={fruitImage} description="upper-intermediate course" />
                </div>

            </div>
        </div >

    )
}