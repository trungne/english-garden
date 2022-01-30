import { nanoid } from 'nanoid'

import avatar1 from './static/ava1.jpg';
import avatar2 from './static/ava2.jpg';

import styles from "./about.module.css";
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import { Paper } from '@mui/material';




function ActiveLastBreadcrumb() {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href={process.env.PUBLIC_URL + "/"}>

                    Home
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    aria-current="page"
                    href={process.env.PUBLIC_URL + "/about"}
                >
                    About Us
                </Link>

            </Breadcrumbs>
        </div>
    );
}

function Descriptions(props: { descriptions: string[] }) {
    const descriptionList = props.descriptions.map(d => {
        return <li key={nanoid()}>{d}</li>
    })
    return (
        <Paper elevation={24}>
            <ul>
                {descriptionList}
            </ul>
        </Paper>
    );
}

function CustomAvatar(props: { url: string, alt: string }) {
    const customAvatarStyle = {
        backgroundImage: "url(" + props.url + ")",

    };
    return (
        <div className={styles.customAvatar} style={customAvatarStyle} />
    )
}

interface Teacher {
    id: string,
    avatarUrl: string,
    name: string,
    descriptions: string[]
}

// TODO: create a function that loads teacher profiles instead of hardcode
const teachers: Teacher[] = [
    {
        id: nanoid(),
        name: "Trung",
        avatarUrl: avatar1,
        descriptions: ["8.0 IELTS", "Can't use chopsticks"]
    },
    {
        id: nanoid(),
        name: "Ha",
        avatarUrl: avatar2,
        descriptions: ["8.0 IELTS", "Can use chopsticks"]
    },
]



export default function About() {
    const [teacherId, setTeacherId] = useState("");

    function handleClick(id: string) {
        setTeacherId(id);
    }

    const teacherList = teachers.map((t) => {
        const descriptions = Descriptions({ descriptions: t.descriptions });
        const avatar = CustomAvatar({ url: t.avatarUrl, alt: t.name });
        return (
            <div key={t.id} className={styles.customAvatarContainer}
                onClick={() => {
                    handleClick(t.id);

                }}
            >
                <div className={styles.fade}>
                    <div className={styles.centerWithFlex}>
                        <Fade in={teacherId === t.id}>{descriptions}</Fade>
                    </div>
                </div>
                <div className={styles.fade}>
                    <div className={styles.centerWithFlex}>
                        <Fade in={teacherId !== t.id}>{avatar}</Fade>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div style={{ height: "100%" }}>
            <div className={styles.menu}>
                <ActiveLastBreadcrumb />
                <Divider />
            </div>

            <div className={styles.about}>
                {teacherList}
            </div>
        </div>

    )
}

