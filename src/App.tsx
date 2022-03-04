import './App.css';

import Home from './home/Home';
import About from './about/About';
import Courses from './courses/Courses';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Communicative from './courses/communicative/Communicative';
import Overview from './courses/Overview';
import CourseInfo from './courses/communicative/CourseInfo/CourseInfo';
import CourseSelection from './courses/communicative/CourseSelection';

import { ThemeProvider } from '@mui/material';
import { theme } from './globalTextTheme';
import Register from './register/Register';
import Loading from './loading/Loading';
import Ielts from './courses/ielts/Ielts';
export default function App() {
  console.log(process.env);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Overview />}>
            {/* default path for courses */}
            <Route path="/courses" element={<Courses />} />

            <Route path="/courses/ielts" element={<Ielts />}/>

            <Route path="/courses/communicative" element={<Communicative />}>
              {/* default path for coummicative courses */}
              <Route path="/courses/communicative" element={<CourseSelection />} />
              <Route path="/courses/communicative/:courseName" element={<CourseInfo />} />
            </Route>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="register" element ={<Register />} />
          <Route path="loading" element ={<Loading />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
