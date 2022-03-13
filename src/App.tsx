import './App.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Communicative from './components/courses/communicative/Communicative';
import Overview from './components/courses/Overview';
import CourseInfo from './components/courses/communicative/CourseInfo/CourseInfo';
import CourseSelection from './components/courses/communicative/CourseSelection';

import { ThemeProvider } from '@mui/material';
import { theme } from './globalTextTheme';
import Register from './components/register/Register';
import Loading from './components/loading/Loading';
import Ielts from './components/courses/ielts/Ielts';
export default function App() {
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
