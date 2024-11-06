import React from 'react';
import { Link } from 'react-router-dom';
import { FaAsymmetrik } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoProjectRoadmap } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import '../assest/styling/EmployeeDashboard.css';

const EmployeeDashboard = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="sidebar">
          <ul>
            <li><FaAsymmetrik className="icon company" />Company Name</li>
            <li>
              <AiOutlineDashboard className="icon company" />
              <Link to="/employee Dashboard" className='title' >Dashboard</Link>
            </li>
            <li>
              <CgProfile className="icon company" />
              <Link to="/profile" className='title'>Profile</Link>
            </li>
            <li>
              <GoProjectRoadmap className="icon company" />
              <Link to="/project Overview" className='title'>Project Overview</Link>
            </li>
            <li>
              <FaTasks className="icon company" />
              <Link to="/Task Management" className='title'>Task Management</Link>
            </li>
            <li>
              <FaUserCheck className="icon company" />
              <Link to="/attendance" className='title'>Attendance</Link>
            </li>
            <li>
              <VscFeedback className="icon company" />
              <Link to="/feedback" className='title'>Feedback</Link>
            </li>
          </ul>
        </div>
        <div className="contentSection">
          <div className="header">
            <div className="search">
              <input type="text" name='search' placeholder='search here....'/>  
              <label><FiSearch/></label>
            </div>
            <div className="user">
              <img src="../assest/images/user.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeDashboard
