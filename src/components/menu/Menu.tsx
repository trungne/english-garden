import styles from './menu.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

const menuItems: MenuItem[] = [
    { name: "Trang Chủ", url: '/home' },
    { name: "Vườn", url: '/about' },
    { name: "Khóa Học", url: '/courses' },
]

interface MenuItem {
    name: string,
    url: string,
}

interface MenuProps {
    items?: MenuItem[],
}



export default function Menu({ items = menuItems }: MenuProps) {
    const navigate = useNavigate();
    const handleClick = (url: string) => {
        navigate(url);
    };

    return (
        <div className={styles['menu']}>
            <div className={styles['menu-buttons']}>
                {items.map((item) => {
                    return <Button
                        onClick={() => { handleClick(item.url) }}
                        key={item.url}
                        className={styles['menu-item']}
                        variant="contained"
                        color="success"
                        sx={{
                            backgroundColor: "var(--primary)",
                            color: "black",
                        }}
                    >

                        <Typography variant="menu">
                            {item.name}
                        </Typography>

                    </Button>
                })}
            </div>

        </div>

    )
}