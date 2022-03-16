import Img from "../../../models/Img";

interface CommunicativeCourseLayout {
    cover: Img,
    outcomeBackground: Img,

}

export default interface CommuncativeCourse {
    name: string;
    description: string;
    duration: number;
    level: string;
    previews: Img[];
    outcomes: string[];

    layout: CommunicativeCourseLayout;
}