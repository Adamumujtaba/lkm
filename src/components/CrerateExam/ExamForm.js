import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import './exam.css'

function CreateExam() {

  const navigate = useNavigate();

  // Test variables ...
  const [name, setName] = useState("");
  const [pass_mark, setPass_mark] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [startDate, setStartDate] = useState("");
  // console.log(dateTime);

 
  const [hrs, setHrs] = useState("");
  const [min, setMin] = useState("");




  return (
    <>
        <Header />

      <div className="examForm">
          <div className="">
            <form>
              <div>
                <label>
                 
                 Subject: 
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                </label>
              </div>

              <div>
                <label>
                 Total Score
                  <input
                    type="number"
                    name="score"
                    onChange={(e) => {
                      setPass_mark(e.target.value);
                    }}
                    value={pass_mark}
                  />{" "}
                </label>
              </div>

              <div>
                <label>
                 
                  Description
                  <textarea
                    name="describtion"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  />
                </label>
              </div>

              <div>
                <label>
                  Instructions
                  <textarea
                    name="instruction"
                    onChange={(e) => {
                      setInstructions(e.target.value);
                    }}
                    value={instructions}
                  />
                </label>
              </div>

             
            
              <div>
                <label>
                  Date and Time:
                  <input
                    type='datetime-local'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    
                  />
                </label>
              </div> 

              <div>
                Duration
                <input
                  type="number"
                  className="duration"
                  value={hrs}
                  onChange={(e) => setHrs(e.target.value)}
                  placeholder="hrs"
                />
                <input
                  type="number"
                  className="duration"
                  values={min}
                  onChange={(e) => setMin(e.target.value)}
                  placeholder="min"
                />
              </div>

              <button onClick={() => navigate('/addquestions') }>Submit</button>
            </form>
          </div>
    
      </div>
    </>

  );
}

export default CreateExam;