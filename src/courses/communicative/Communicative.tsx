import styles from "./communicative.module.css";
import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"

interface CourseProps {
    name: string,
    photoUrl: string,
    description: string,
}
function Course({ name, photoUrl, description }: CourseProps) {
    const style: React.CSSProperties = {
        backgroundImage: `url(${photoUrl})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    }
    return (
        <div className={styles['course']}>
            <div style={style} className={styles['course-image']}>

            </div>

            <div className={styles['course-content']}>
                {description}
            </div>
        </div>
    )
}

const courses: CourseProps[] = [
    {
        name: "Seed",
        photoUrl: seedImg,
        description: "Beginner Course",
    },
    {
        name: "Leaf",
        photoUrl: leafImg,
        description: "Pre-intermediate Course",
    },
    {
        name: "Flower",
        photoUrl: flowerImg,
        description: "Intermediate Course",
    },
    {
        name: "Fruit",
        photoUrl: fruitImg,
        description: "Advanced Course",
    },
]

export default function Communicative() {
    return (
        <div className={styles['communicative']}>
            {courses.map(course => {
                return <Course name={course.name} photoUrl={course.photoUrl} description={course.description} />
            })}
        </div>
    )
}