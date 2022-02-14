import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styles from './course.module.css';
interface CourseProps {
    imgUrl: string,
    description: string,
}

export default function Course({ imgUrl, description }: CourseProps) {
    return (
        <Card className={styles['course-card']}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={imgUrl}
                    alt={description}
                />
            </CardActionArea>
        </Card>
    )
}