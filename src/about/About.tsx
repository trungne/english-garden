
import Profiles from './Profiles';
import styles from "./about.module.css";

import Menu from '../menu/Menu';
import Introduction from './Introduction';

export default function About() {
    return (
        <div className={styles['about']}>
            <Menu />
            <Introduction />
            <Profiles/>
        </div>
    )
}

