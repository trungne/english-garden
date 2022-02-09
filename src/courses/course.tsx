import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Course(props: { image: string, description: string }) {
    return (
        <Card sx={{ 
                flexBasis: "400px",
            }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.image}
                    alt={props.description}
                />
            </CardActionArea>
        </Card>
    )
}