import styles from './menu.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

const menuItems: MenuItem[] = [
    { name: "Trang Chủ", url: '/home' },
    { name: "Khóa Học", url: '/courses' },
    { name: "Giáo Viên", url: '/about' },
]

export interface MenuItem {
    name: string,
    url: string,
}

interface MenuProps {
    items?: MenuItem[],
}

const color = "#d591b2"

export default function Menu({ items = menuItems }: MenuProps) {
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
                        width: matches ? `${100 / items.length}%` : `${40 / items.length}%`,
                    }}
                >

                    <Typography variant="menu">
                        {item.name}
                    </Typography>

                </Button>
            })}
        </div>

    )
}