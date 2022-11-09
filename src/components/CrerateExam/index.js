import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './exam.css'
function Exam() {
    const navigate = useNavigate();
    function Next(){
        navigate('/createExam');
    }
  return (
    <>
    <Header />
    <div className='createExamCont'>

        <div className='userInfor'>
            <h3>User Details</h3>
            <p>Full Name: Lukman Said </p>
            <p>Email: lukamsaid@gmail.com</p>
           
        </div>
        <div className='examInfo'>
           <div>
             Exams Details
            <ul>
                <li>English</li>
                <li>Mathematics</li>
                <li>Geography</li>
                <li>Physics</li>
            </ul>
            </div>
            <p><button onClick={Next}>Create Exam</button></p>
        </div>
    </div>
    </>
  )
}

export default Exam