import styles from "./courseinfo.module.css";

import CoursePreviews from "./CoursePreviews";
import CourseOutcomes from "./CourseOutcomes";
import courses from "../coursedata";
import { useParams } from "react-router-dom";
import CourseDescription from "./CourseDescription";
import CourseOverview from "./CourseOverview";
import CourseTitle from "./CourseTitle";
import ClickToRegister from "../../../register/ClickToRegister";
import Footer from "../../../footer/Footer";
import { Container } from "@mui/material";

export default function CourseInfo() {
    const params = useParams();
    const course = courses[`${params.courseName}`];
    if (course === undefined) {
        return null;
    }
    return (
        <div className={styles['course-overlay']}>
            <CourseTitle name={course.name} />
            <CourseDescription description={course.description} />
            <CourseOverview duration={course.duration} level={course.level} />
            <CourseOutcomes backgroundImage={course.layout.outcomeBackground} outcomes={course.outcomes} />
            <CoursePreviews courseName={course.name} />
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh", 
                marginTop: "2em", marginBottom: "2em"}} maxWidth="md">
                <ClickToRegister />
            </Container>

            <Footer />
        </div >
    )


}