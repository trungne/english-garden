import styles from './menu.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';

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

const color = "#d591b2"

export default function Menu({ items = menuItems}: MenuProps) {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const handleClick = (url: string) => {
        navigate(url);
    };

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
                            width: matches ? `${100/items.length}%` : `${40/items.length}%`,
                        }}
                    >
                        {item.name}
                    </Button>
                })}
        </div>

    )
}