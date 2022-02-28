import styles from './menu.module.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

const menuItems: MenuItem[] = [
    { name: "Home", url: '/home' },
    { name: "Courses", url: '/courses' },
    { name: "About Us", url: '/about' },
]

export interface MenuItem {
    name: string,
    url: string,
}

interface MenuProps {
    items?: MenuItem[],
}
export default function Menu({ items = menuItems}: MenuProps) {
    const navigate = useNavigate();
    const handleClick = (url: string) => {
        navigate(url);
    };
    const color = "#d591b2"

    return (
        <div className={styles['menu']}>
                {items.map((item) => {
                    return <Button
                        onClick={() => { handleClick(item.url) }}
                        key={item.url}
                        className={styles['menu-item']}
                        variant="contained"
                        color="success"
                        sx={{
                            backgroundColor: color,
                        }}
                    >
                        {item.name}
                    </Button>
                })}
        </div>

    )
}