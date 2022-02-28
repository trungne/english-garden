import styles from "./communicative.module.css";
import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"

import seedPreview1 from './static/seed_preview1.jpg';
import seedPreview2 from './static/seed_preview2.jpg';
import seedPreview3 from './static/seed_preview3.jpg';

import { CourseProps } from "./CourseInfo";
import CourseInfo from "./CourseInfo";
const courses: CourseProps[] = [
    {
        course: {
            name: "Seed",
            photoUrl: seedImg,
            description: "Beginner Course",
            duration: "120 hours",
            level: "A1-A2",
            previews: [seedPreview1, seedPreview2, seedPreview3],
        },
        direction: "left"
    },
    {
        course: {
            name: "Leaf",
            photoUrl: leafImg,
            description: "Pre-intermediate Course",
            duration: "120 hours",
            level: "B1",
            previews: [],
        },
        direction: "right"
    },
    {
        course: {
            name: "Flower",
            photoUrl: flowerImg,
            description: "Intermediate Course",
            duration: "120 hours",
            level: "B2",
            previews: [],
        },
        direction: "left"
    },
    {
        course: {
            name: "Fruit",
            photoUrl: fruitImg,
            description: "Advanced Course",
            duration: "120 hours",
            level: "C1",
            previews: [],
        },
        direction: "right"
    },
]

export default function Communicative() {

    return (
        <div className={styles['communicative']}>
            {courses.map(course => {
                console.log(course);
                return <CourseInfo 
                    course={course.course} 
                    direction={course.direction}
                />
            })}
        </div>
    )
}