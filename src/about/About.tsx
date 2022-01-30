import { nanoid } from 'nanoid'

import avatar1 from './static/ava1.jpg';
import avatar2 from './static/ava2.jpg';

import styles from "./about.module.css";
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function ActiveLastBreadcrumb() {
    console.log(process.env.PUBLIC_URL);
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
        return <li>{d}</li>
    })
    return (
        <ul>
            {descriptionList}
        </ul>
    );
}

function CustomAvatar(props: { url: string, alt: string }) {
    const customAvatarStyle = {
        display: "inline-block",
        height: 0,
        
        borderRadius: "50%",
        backgroundImage: "url(" + props.url + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
        }
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

const style = {
    height: "100%"
}

export default function About() {
    const [teacherId, setTeacherId] = useState("");

    function handleClick(id: string) {
        setTeacherId(id);
    }

    const teacherList = teachers.map((t) => {
        return (
            <CustomAvatar key={t.id} url={t.avatarUrl} alt={t.name} />

            // <Box
            //     key={t.id}
            //     onClick={() => {handleClick(t.id)}}
            //     sx={{
            //         width: 1 / teachers.length,
            //         display: "flex",
            //         alignItems: "center",
            //         justifyContent: "center",
            //     }}>
            //     {
            //         teacherId === t.id 
            //         ? <Descriptions descriptions={t.descriptions} /> 
            //         : <CustomAvatar url={t.avatarUrl} alt={t.name} /> 
            //     } 
            // </Box>

        )
    });

    return (
        <div style={style}>
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

