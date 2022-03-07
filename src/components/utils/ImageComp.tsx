import {  SyntheticEvent } from "react";
import Img from "../../models/Img";
export default function ImageComp({ image, className }: { image: Img, className?: string}) {
    const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        if (!!image.fallback) {
            e.currentTarget.src = image.fallback;
        }
    }

    return (
        <img
            className={className}
            src={image.url}
            onError={handleError}
            alt={image.description} />
    )
}