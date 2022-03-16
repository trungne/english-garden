import styles from "./communicative.module.css";

import seedCover from "./static/cover/seed.webp";
import leafCover from "./static/cover/leaf.webp";
import flowerCover from "./static/cover/flower.webp";
import fruitCover from "./static/cover/fruit.webp";

import seedCoverFallback from "./static/cover/seed.jpg";
import leafCoverFallback from "./static/cover/leaf.jpg";
import flowerCoverFallback from "./static/cover/flower.jpg";
import fruitCoverFallback from "./static/cover/fruit.jpg";

import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";
import { Fragment, useEffect, useRef, useState } from "react";
import Loading from "../../loading/Loading";
import Img from "../../../models/Img";

interface CourseCover {
    name: string,
    cover: Img,
    url: string,
}
const courses: CourseCover[] = [
    {
        name: "Seed",
        cover: { url: seedCover, fallback: seedCoverFallback, description: "Seed" },
        url: "seed",
    },
    {
        name: "Leaf",
        cover: { url: leafCover, fallback: leafCoverFallback, description: "Leaf" },
        url: "leaf",
    },
    {
        name: "Flower",
        cover: { url: flowerCover, fallback: flowerCoverFallback, description: "Flower" },
        url: "flower",
    },
    {
        name: "Fruit",
        cover: { url: fruitCover, fallback: fruitCoverFallback, description: "Fruit" },
        url: "fruit",
    },
];

function CourseCovers({ finishLoading, }: { finishLoading: () => void, }) {

    const [imagesLoaded, setImageLoad] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);


    const handleImageLoad = () => {
        setImageLoad(prev => {
            return prev + 1;
        })
    }

    useEffect(() => {
        if (imagesLoaded >= courses.length) {
            setTimeout(() => {
                if (ref.current) {
                    ref.current.style.display = "flex";
                }
                finishLoading();
            }, 500);
        }

    }, [imagesLoaded, finishLoading])

    const navigate = useNavigate();
    let direction = "left";
    const getDirection = () => {
        if (direction === "left") {
            direction = "right";
            return "left";
        }
        else {
            direction = "left";
            return "right";
        }
    }
    return (
        <div ref={ref} style={{ display: "none" }} className={styles['covers']}>
            {courses.map((course, idx) => {
                return (
                    <Fade className={styles['course-cover']}
                        key={idx}
                        direction={getDirection()}
                    >
                        <div onClick={() => {
                            navigate(course.url);
                        }} className={styles['cover']}>
                            <img
                                
                                src={course.cover.url}
                                alt={`${course.name}'s cover`}
                                onLoad={handleImageLoad}
                                onError={(e) => {
                                    if (
                                        !!course.cover.fallback &&
                                        e.currentTarget.src !== course.cover.fallback) {
                                        e.currentTarget.src = course.cover.fallback
                                    }
                                }}
                            />
                            <Typography sx={{
                                textShadow: "1px 1px #3c3c3c",
                                color: "black",
                            }} variant="name">
                                {course.name}
                            </Typography>
                        </div>
                    </Fade>
                )
            })}
        </div>
    )
}

export default function CourseSelection() {
    const [loading, setLoading] = useState(true);
    const finishLoading = () => {
        setLoading(false);
    }
    return (
        <Fragment>
            {loading && <Loading />}
            <CourseCovers finishLoading={finishLoading} />
        </Fragment>
    )
}