import styles from "./communicative.module.css";

import seedCover from "./static/cover/seed.jpg";
import leafCover from "./static/cover/leaf.jpg";
import flowerCover from "./static/cover/flower.jpg";
import fruitCover from "./static/cover/fruit.jpg";

import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";
import { Fragment, SyntheticEvent, useEffect, useRef, useState } from "react";
import Loading from "../../loading/Loading";

interface CourseCover {
    name: string,
    coverImgUrl: string,
    url: string,
}
const courses: CourseCover[] = [
    {
        name: "Seed",
        coverImgUrl: seedCover,
        url: "seed",
    },
    {
        name: "Leaf",
        coverImgUrl: leafCover,
        url: "leaf",
    },
    {
        name: "Flower",
        coverImgUrl: flowerCover,
        url: "flower",
    },
    {
        name: "Fruit",
        coverImgUrl: fruitCover,
        url: "fruit",
    },
];

function CourseCovers(
    {
        finishLoading,
    }:
        {
            finishLoading: () => void,
        }
) {

    const [imagesLoaded, setImageLoad] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);


    const handleImageLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        
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
            }, 1000);

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
                            {/* <ImageComp
                                image={{
                                    url: course.coverImgUrl,
                                    description: `${course.name}'s cover`,
                                    fallback: "",
                                }}
                                onLoad={handleImageLoad} /> */}
                            <img 
                                src={course.coverImgUrl}
                                alt={`${course.name}'s cover`}
                                onLoad={handleImageLoad}
                                onError={(e) => {

                                    e.currentTarget.src = ""
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