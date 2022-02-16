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

    return (
        <div className={styles['menu']}>
            <div className={styles['menu-group']}>
                {items.map((item) => {
                    return <Button
                        onClick={() => { handleClick(item.url) }}
                        key={item.url}
                        className={styles['menu-item']}
                        variant="contained"
                    >
                        {item.name}
                    </Button>
                })}
            </div>
            <Divider sx={{borderRadius: '1px', borderWidth: "1px", borderColor: "rgb(255,255,255, 0.8)"}} variant="fullWidth" />
        </div>

    )
}