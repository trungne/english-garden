import styles from "./communicative.module.css";
import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"

import seedCover from "./static/cover/seed.jpg";
import leafCover from "./static/cover/leaf.jpg";
import flowerCover from "./static/cover/flower.jpg";
import fruitCover from "./static/cover/fruit.jpg";

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
            description: "Hạt (Seed) là khóa học dành cho những ai vừa bắt đầu hành trình trồng cây. Tại Hạt, các bạn sẽ được giới thiệu và bồi đắp gốc rễ của tiếng Anh cũng như được thực hành với những tình huống giao tiếp thông dụng.",
            duration: "120 hours",
            level: "A1-A2",
            previews: [seedPreview1, seedPreview2, seedPreview3],
            outcomes: ["Giới thiệu bản thân và nói về sở thích",
                "Hiểu và sử dụng những cụm từ thông dụng và cơ bản",
                "Làm quen với những tình huống giao tiếp thông dụng",
                "Sử dụng các thì cơ bản ở quá khứ, hiện tại, tương lai",
                "Áp dụng tư duy phản biện",
                "Sử dụng các từ nối cơ bản để nói và viết mạch lạc hơn",
                "Phát âm cơ bản",
                "Nhận biết các âm tiết dễ nhầm lẫn",
                "Viết đoạn văn ngắn mô tả đồ vật và người",
                "Áp dụng văn phong KISS (Keep It Short & Simple)"]
        },
        direction: "left",
        coverImgUrl: seedCover,
    },
    {
        course: {
            name: "Leaf",
            photoUrl: leafImg,
            description: "Pre-intermediate Course",
            duration: "120 hours",
            level: "B1",
            previews: [],
            outcomes: [],
        },
        direction: "right",
        coverImgUrl: leafCover,
    },
    {
        course: {
            name: "Flower",
            photoUrl: flowerImg,
            description: "Intermediate Course",
            duration: "120 hours",
            level: "B2",
            previews: [],
            outcomes: [],
        },
        direction: "left",
        coverImgUrl: flowerCover,
    },
    {
        course: {
            name: "Fruit",
            photoUrl: fruitImg,
            description: "Advanced Course",
            duration: "120 hours",
            level: "C1",
            previews: [],
            outcomes: [],
        },
        direction: "right",
        coverImgUrl: fruitCover,
    },
]

export default function Communicative() {

    return (
        <div className={styles['communicative']}>
            {courses.map((course, idx) => {
                return (
                    <div
                    className={styles['course-cover']}
                     style={{
                        
                        backgroundImage: `url(${course.coverImgUrl})`
                    }} key={idx}>
                        {course.course.name}
                    </div>
                )
            })}
            {/* {courses.map(course => {
                return <CourseInfo 
                    course={course.course} 
                    direction={course.direction}
                />
            })} */}
        </div>
    )
}