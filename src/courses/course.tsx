import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styles from './course.module.css';
import { useNavigate } from "react-router-dom";

interface CourseProps {
    imgUrl: string,
    description: string,
    url: string,
}

export default function Course({ imgUrl, description, url }: CourseProps) {
    const navigate = useNavigate();
    return (
        <Card className={styles['course-card']}>
            <CardActionArea onClick={() => {
                navigate(url);
            }}>
                <CardMedia
                    component="img"
                    image={imgUrl}
                    alt={description}
                />
            </CardActionArea>
        </Card>
    )
}