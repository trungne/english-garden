import styles from "./profile.module.css";
import useHovering from "../hooks/useHovering";

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
    const [isHovering, handleMouseOver, handleMouseLeave] = useHovering(false);

    return (
        <div onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className={styles['avatar']} >
            {isHovering
                ?
                <Description descriptions={descriptions} />
                : <img alt={`${name}'s pretty avatar`} src={avatarUrl} />
            }
        </div>
    )
}