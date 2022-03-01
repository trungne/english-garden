import styles from "./communicative.module.css";
import { Outlet } from "react-router-dom";

export default function Communicative() {
    return (
        <div className={styles['communicative']}>
            <Outlet/>
        </div>
    )
}