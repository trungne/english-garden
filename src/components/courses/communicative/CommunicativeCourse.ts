import Img from "../../../models/Img";

export default interface CommuncativeCourse {
    name: string;
    photoUrl: string;
    description: string;
    duration: number;
    level: string;
    previews: Img[];
    outcomes: string[];
    overviewPhotoUrl: string;
}