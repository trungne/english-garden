import styles from "./courseinfo.module.css";

import CoursePreviews from "./CoursePreviews";
import CourseOutcomes from "./CourseOutcomes";
import courses from "../coursedata";
import { useParams } from "react-router-dom";
import CourseDescription from "./CourseDescription";
import CourseOverview from "./CourseOverview";
import CourseTitle from "./CourseTitle";
import ClickToRegister from "../../../register/ClickToRegister";
import Container from '@mui/material/Container';
import Loading from "../../../loading/Loading";

export default function CourseInfo() {
    const params = useParams();
    const course = courses[`${params.courseName}`];
    if (course === undefined) {
        return null;
    }
    return (
        <div className={styles['course-overlay']}>
            <CourseTitle name={course.name} bannerUrl={course.photoUrl} />
            <CourseDescription description={course.description} />
            <CourseOverview duration={course.duration} level={course.level} />
            <CourseOutcomes backgroundImage={course.overviewPhotoUrl} outcomes={course.outcomes} />
            <CoursePreviews images={course.previews} />
            <Container sx={{display: "flex", justifyContent: "center"}} maxWidth="lg">
                <ClickToRegister />
            </Container>

            <Loading />
        </div >
    )


}