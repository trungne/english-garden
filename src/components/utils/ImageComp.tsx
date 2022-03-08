import { ReactEventHandler, SyntheticEvent } from "react";
import Img from "../../models/Img";

interface ImageCompProps {
    image: Img,
    className?: string,
    onLoad?: ReactEventHandler<HTMLImageElement>,
}

export default function ImageComp(
    { image, className, onLoad }:
        ImageCompProps) {
    const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        if (!!image.fallback && e.currentTarget.src !== image.fallback) {
            e.currentTarget.src = image.fallback;
        }
    }

    return (
        <img
            onLoad={onLoad}
            loading="lazy"
            className={className}
            src={image.url}
            onError={handleError}
            alt={image.description} />
    )
}