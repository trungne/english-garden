import './App.css';

import Home from './home/Home';
import About from './about/About';
import Courses from './courses/Courses';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Communicative from './courses/communicative/Communicative';
import Overview from './courses/Overview';
import CourseInfo from './courses/communicative/CourseInfo/CourseInfo';
import CourseSelection from './courses/communicative/CourseSelection';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Overview />}>
          {/* default path for courses */}
          <Route path="/courses" element={<Courses />} /> 

          <Route path="/courses/communicative" element={<Communicative />}>
            {/* default path for coummicative courses */}
            <Route path="/courses/communicative" element={<CourseSelection />}/>
            <Route path="/courses/communicative/:courseName" element={<CourseInfo />}/>
          </Route>
        </Route>


        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}
