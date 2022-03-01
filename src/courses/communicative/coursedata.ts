import CommuncativeCourse from "./CommunicativeCourse";
import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"

import seedOverviewImg from "./static/overview/seed.jpg"
import leafOverviewImg from "./static/overview/leaf.jpg"
import flowerOverviewImg from "./static/overview/flower.jpg"
import fruitOverviewImg from "./static/overview/fruit.jpg"

import seedPreview1 from './static/seed_preview1.jpg';
import seedPreview2 from './static/seed_preview2.jpg';
import seedPreview3 from './static/seed_preview3.jpg';

const courses: { [key: string]: CommuncativeCourse } = {
    seed: {
        name: "Seed",
        photoUrl: seedImg,
        description: "Hạt (Seed) là khóa học dành cho những ai vừa bắt đầu hành trình trồng cây. Tại Hạt, các bạn sẽ được giới thiệu và bồi đắp gốc rễ của tiếng Anh cũng như được thực hành với những tình huống giao tiếp thông dụng.",
        duration: 120,
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
            "Áp dụng văn phong KISS (Keep It Short & Simple)"],
        overviewPhotoUrl: seedOverviewImg,
    },
    leaf: {
        name: "Leaf",
        photoUrl: leafImg,
        description: "Pre-intermediate Course",
        duration: 120,
        level: "B1",
        previews: [],
        outcomes: [],
        overviewPhotoUrl: leafOverviewImg,
    },
    flower: {
        name: "Flower",
        photoUrl: flowerImg,
        description: "Intermediate Course",
        duration: 120,
        level: "B2",
        previews: [],
        outcomes: [],
        overviewPhotoUrl: flowerOverviewImg,
    },
    fruit: {
        name: "Fruit",
        photoUrl: fruitImg,
        description: "Advanced Course",
        duration: 120,
        level: "C1",
        previews: [],
        outcomes: [],
        overviewPhotoUrl: fruitOverviewImg,
    }
}

export default courses;