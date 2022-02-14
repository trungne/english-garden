import styles from "./profile.module.css";
import { useState } from "react";

export interface profileProps {
    avatarUrl: string,
    name: string,
    descriptions: string[],
}

interface DescriptionProps {
    descriptions: string[],
}
function Description({ descriptions }: DescriptionProps) {
    return (
        <div className={styles['description']}>
            {descriptions.map((description, idx) => {
                return (
                    <li key={idx}>
                        {description}
                    </li>
                );
            })}
        </div>
    )
}

export default function Profile({ avatarUrl, name, descriptions }: profileProps) {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div onClick={() => {
            setShowDescription(prev => {
                return !prev;
            })
        }}
            className={styles['avatar']} >
            {showDescription 
                ? <Description descriptions={descriptions} />
                : <img alt={`${name}'s pretty avatar`} src={avatarUrl} />}
        </div>
    )
}