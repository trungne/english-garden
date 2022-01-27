import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Course(props: { image: string, description: string }) {
    return (
        <Card sx={{ 
                flexBasis: "45%",
                '@media screen and (max-width: 1200px)': {
                    flexBasis: "90%"
                } 
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