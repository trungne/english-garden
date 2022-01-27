import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Course(props: { image: string, description: string }) {
    return (
        <Card sx={{ width: 375 }}>
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