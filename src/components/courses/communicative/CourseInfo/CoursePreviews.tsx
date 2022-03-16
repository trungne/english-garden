import styles from "./courseinfo.module.css";

import { Fade } from "react-awesome-reveal";
import Typography from "@mui/material/Typography";
import ImageGroup from "../../../utils/ImageGroup";
import Img from "../../../../models/Img";
import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../../../../firebase/context";


export default function CoursePreviews({ courseName }: { courseName: string }) {
    const [previews, setPreviews] = useState<Img[]>([]);
    const firebaseContext = useContext(FirebaseContext);
    useEffect(() => {
        if (!firebaseContext){
            return;
        }

        firebaseContext.getPreviews(courseName.toLowerCase()).then(
            (res) => {
                const p: Img[] = [];
                for(const url of res){
                    p.push({url: url, description: "preview"})
                }

                setPreviews(p);
            }
        )
    }, [firebaseContext]);

    return (
        <Fade triggerOnce damping={0.1} cascade>
            <div className={styles['course-previews']}>
                <Typography variant="largeText">
                    Hình ảnh từ bài học
                </Typography>
                <ImageGroup row={2} images={previews} />
            </div>
        </Fade>
    )
}