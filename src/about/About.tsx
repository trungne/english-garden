import trungAvatar from './static/trung.png';
import haAvatar from './static/ha.png';
import { profileProps } from './Profile';
import Profile from './Profile';
import styles from "./about.module.css";

import Menu from '../menu/Menu';
import Introduction from './Introduction';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

// TODO: create a function that loads teacher profiles instead of hardcode
const teachers: profileProps[] = [
    {
        name: "Ha",
        avatarUrl: haAvatar,
        descriptions: ["8.0 IELTS", "Can use chopsticks"]
    },
    {
        name: "Trung",
        avatarUrl: trungAvatar,
        descriptions: ["8.0 IELTS", "Can't use chopsticks"]
    },

]



export default function About() {
    return (
        <div className={styles['about']}>
            <Menu />
            <Introduction />

            <Root>
                <Divider>
                    <Typography 
                        fontWeight={100} 
                        variant="h3">
                        Meet Us
                    </Typography>
                </Divider>
            </Root>



            <div className={styles['avatar-container']}>
                <div className={styles['avatars']}>
                    {teachers.map((teacher, idx) => {
                        return <Profile
                            key={idx}
                            avatarUrl={teacher.avatarUrl}
                            name={teacher.name}
                            descriptions={teacher.descriptions}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

