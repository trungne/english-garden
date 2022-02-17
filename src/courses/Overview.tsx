import styles from './course.module.css';
import Menu from '../menu/Menu';
import { Outlet } from 'react-router-dom';
export default function Overview() {
    return (
        <div className={styles['overview']}>
            <Menu />
            <div className={styles['content']}>
                
                <Outlet />
            </div>
        </div >
    )
}