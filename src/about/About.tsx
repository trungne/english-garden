import trungAvatar from './static/trung.png';
import haAvatar from './static/ha.png';
import { profileProps } from './Profile';
import Profile from './Profile';
import styles from "./about.module.css";

import Menu, { MenuItem } from '../menu/Menu';


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

const menuItems: MenuItem[] = [
    { name: "Home", url: '/home' },
    { name: "Courses", url: '/courses' },
    { name: "About Us", url: '/about' },
]


export default function About() {
    return (
        <div className={styles['about']}>
            <Menu items={menuItems} />
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
    )
}

