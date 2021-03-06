
import Profiles from './Profiles';
import styles from "./about.module.css";

import Menu from '../menu/Menu';
import Introduction from './Introduction';
import Feedback from '../feedback/Feedback';
import Footer from '../footer/Footer';

export default function About() {
    return (
        <div className={styles['about']}>
            <Menu />
            <Introduction />
            <Profiles/>

            <Feedback/>
            <Footer/>
        </div>
    )
}

