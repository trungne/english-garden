import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { nanoid } from 'nanoid'

import avatar1 from './static/ava1.jpg';
import avatar2 from './static/ava2.jpg';

import styles from "./about.module.css";
import { useState } from 'react';

function Descriptions(props: {descriptions: string[]}){
    const descriptionList = props.descriptions.map(d => {
        return <li>{d}</li>
    })
    return (
        <ul>
            {descriptionList}
        </ul>
    );
}

function CustomAvatar(props: {url: string, alt: string}){
    return (
        // TODO: create responsive avatar
        <Avatar 
            sx={{width:0.8, height: 0.8,
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                }}}
            src={props.url}
        />
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

export default function About(){
    const [teacherId, setTeacherId] = useState("");

    function handleClick(id: string){
        setTeacherId(id);
    }

    const teacherList = teachers.map((t) => {
        return (
        <Box
            key={t.id}
            onClick={() => {handleClick(t.id)}}
            sx={{
                width: 1 / teachers.length,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            {
                teacherId === t.id 
                ? <Descriptions descriptions={t.descriptions} /> 
                : <CustomAvatar url={t.avatarUrl} alt={t.name} /> 
            } 
        </Box>)
    });

    return (
        <div className={styles.about}>
        {teacherList}
        </div>
    )
}