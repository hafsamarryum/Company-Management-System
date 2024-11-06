
import './App.css';
import LoginPg from './components/LoginPg';
import {Route , Routes} from 'react-router-dom';
import Register from './components/Register';
import EmployeeDashboard from './components/EmployeeDashboard';
import Profile from './components/Profile';
import ProjectOverview from './components/ProjectOverview';
import TaskManagement from './components/TaskManagement';
import Attendance from './components/Attendance';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LoginPg/>} />
      <Route path="/login" element={<LoginPg/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/employeeDashboard" element={<EmployeeDashboard/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/projectOverview" element={<ProjectOverview/>} />
      <Route path="/taskManagement" element={<TaskManagement/>} />
      <Route path="/attendance" element={<Attendance/>} />
      <Route path="/feedback" element={<Feedback/>} />
      </Routes>
      
    </div>
  );
}

export default App;
