import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';

function abs(n: number): number{
    return n > 0 ? n : -n;
}
export default function Course(props: { image: string, description: string }) {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const defaultFlexBasis = window.innerWidth < 760 ? "90%" : "40%";
    const [flexBasis, setFlexBasis] = useState(defaultFlexBasis)

    useEffect(() => {
        console.log("use effect called");
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        };

        if (dimensions.width < 760){
            setFlexBasis("90%")
        }
        else{
            setFlexBasis("40%")
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [dimensions.width]);



    return (
        <Card sx={{ flexBasis: flexBasis }}>
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