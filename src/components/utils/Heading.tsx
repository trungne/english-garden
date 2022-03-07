import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    overflow: "hidden",
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
        marginBottom: "2em",
    },
}));

export default function Heading({ content }: { content: string }) {
    return (
        <Root>
            <Divider>
                <Typography
                    gutterBottom
                    fontWeight={100}
                    variant="home">
                    {content}
                </Typography>
            </Divider>
        </Root>
    )
}