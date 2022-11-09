import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Exam from './components/CrerateExam'
import Home from './components/Home'
import './App.css'
import CreateExam from './components/CrerateExam/ExamForm'
import AddQuestions from './components/Question/addQuestions'
import CreateAccount from './components/Login/CreateAccount'
function App() {
  return (
    <div>
      <Routes>
      
        <Route path='/' element={<Home />} />      
        <Route path='/exam' element={<Exam/>} />
        <Route path='/createExam' element={<CreateExam />} />
        <Route path='/addquestions' element={<AddQuestions />} />
        <Route path='/createAccount' element={<CreateAccount />} />
      </Routes>      
    </div>
  )
}

export default App