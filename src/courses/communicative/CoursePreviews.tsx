import styles from "./communicative.module.css";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CoursePreviews({ images }: { images: string[] }) {
    return (
        <div className={styles['course-previews']}>
            <ImageList sx={{
                width: "100%",
                height: "100%"
            }} variant="woven" cols={2} gap={8}>
                {images.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            className={styles['preview']}
                            src={item}
                            srcSet={item}
                            alt="preview"
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}