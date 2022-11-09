import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import './addque.css'


function AddQuestions() {
    const navigate = useNavigate();
  // record hooks variable store the exam info
  const [record, setRecord] = useState({
    text: "",
    point: "",
    answer: "",
  });
  // options
  const [optA, setOptA] = useState("");
  const [optB, setOptB] = useState("");
  const [optC, setOptC] = useState("");
  const [optD, setOptD] = useState("");

  // questions array to exam info and options
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Display and Hide table
  const [hide, setHide] = useState(false);

  function AddQuestion(e) {
    e.preventDefault();
    setSubmitted(true);
    const options = [optA, optB, optC, optD]; // option ie answers

    if (record.text !== "") {
    if (record.answer !== "") {
          setQuestions([
            ...questions,
            {
              id: questions.length + 1,
              text: record.text,
              answer: record.answer,
              point: record.point,
              options: options,
            },
          ]);
          setRecord({
            text: "",
            point: "",
            answer: "",
          });
          setOptA("");
          setOptB("");
          setOptC("");
          setOptD("");
          setSubmitted(false);
        } else {
          alert("Select the radio button for answer");
        }
    
    }
  }

  const [isEditing, setIsEditing] = useState();
  const [currentQuestion, setCurrentQuestion] = useState({});

  // remove a question by  ID
  function handleDeleteClick({ id }) {
    // filter through all the questions and removed the match with ID
    const removeItem = questions.filter((q) => {
      return q.id !== id;
    });
    setQuestions(removeItem);
    setIsEditing(false);
  }

  // function to handle when the "Edit" button is clicked
  function handleEditClick(questions) {
    console.log(questions);
    // set editing to true
    setIsEditing(true);
    // set the currentQuestion to the question item that was clicked
    setCurrentQuestion({
      ...questions,
      id: questions.id,
      text: questions.text,
      point: questions.point,
      optA: questions.options[0],
      optB: questions.options[1],
      optC: questions.options[2],
      optD: questions.options[3],
    });
  }

  // function to update a question takes 2 para id and updatedQuestion ie currentQuestion
  function handleUpdateQuestion(id, updatedQuetion) {
    // here we are mapping over the question array - the idea is check if the question.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated question object
    // otherwise just use old question
    console.log(updatedQuetion);

    setSubmitted(true);
    // because the setcurrentQuestion set the options outside the array
    const optA = updatedQuetion.optA;
    const optB = updatedQuetion.optB;
    const optC = updatedQuetion.optC;
    const optD = updatedQuetion.optD;
    // options aboves put inside the options array below
    const options = updatedQuetion.options.splice(0, 4, optA, optB, optC, optD);
    // after the options is replace inside the options array, delete the object property of the optA-optD
    delete updatedQuetion.optA;
    delete updatedQuetion.optB;
    delete updatedQuetion.optC;
    delete updatedQuetion.optD;

    // will compare the props id and question id before executing...
    const updatedItem = questions.map((question) => {
      return question.id === id ? updatedQuetion : question;
    });

    setQuestions([
      {
        id: updatedItem.id,
        text: updatedItem.text,
        answer: updatedItem.answer,
        point: updatedItem.point,
        options: options,
      },
    ]);

    setQuestions(updatedItem);
    //  set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    setIsEditing(false);
    // update the question state with the updated todo
    setSubmitted(false);
  }

  // Handle the Update btn and replace the questions record by it's ID
  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateQuestion(currentQuestion.id, currentQuestion);
  }

  function HideShowTable() {
    return setHide(!hide);
  }

  // Final submit function that will submit to the API

  async function submitAllQuestions() {
    console.log("QUESTIONS ", questions)
    navigate('/exam'); 
  }


  return (
    <div>
      <header>
     <Header />
      </header>


      <main className="mainAddQuestionForm">
        <div className="FormAddQuestion">
          {isEditing ? (
            <form onSubmit={handleEditFormSubmit} className="">
              <div>
                <label htmlFor="question" className="title_name">
                  Update Question{" "}
                </label>
                <textarea
                  type="text"
                  placeholder="Update Question"
                  id="question"
                  value={currentQuestion.text}
                  required
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      text: e.target.value,
                    })
                  }
                />{" "}
              </div>

           
              <div className="InputOpt">
                  <input
                    type="text"
                    placeholder="Option A"
                    value={currentQuestion.optA}
                    required
                    onChange={(e) =>
                      setCurrentQuestion({
                        ...currentQuestion,
                        optA: e.target.value,
                      })
                    }
                  />
                <input
                  type="radio"
                  name="answer"
                  required
                  value={currentQuestion.optA}
                  checked={currentQuestion.answer === currentQuestion.optA}
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      answer: e.target.value,
                    })
                  }
                />
              </div>

              <div className="InputOpt">
                  <input
                    type="text"
                    placeholder="Option B"
                    value={currentQuestion.optB}
                    required
                    onChange={(e) =>
                      setCurrentQuestion({
                        ...currentQuestion,
                        optB: e.target.value,
                      })
                    }
                  />
                <input
                  type="radio"
                  name="answer"
                  value={currentQuestion.optB}
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      answer: e.target.value,
                    })
                  }
                  checked={currentQuestion.answer === currentQuestion.optB}
                />
              </div>

              <div className="InputOpt">
                  <input
                    type="text"
                    placeholder="Option C"
                    value={currentQuestion.optC}
                    style={{
                      background: submitted && !currentQuestion.optC ? "red" : "",
                    }}
                    onChange={(e) =>
                      setCurrentQuestion({
                        ...currentQuestion,
                        optC: e.target.value,
                      })
                    }
                  />
                <input
                  type="radio"
                  name="answer"
                  value={currentQuestion.optC}
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      answer: e.target.value,
                    })
                  }
                  checked={currentQuestion.answer === currentQuestion.optC}
                />
              </div>

              <div className="InputOpt">
                  <input
                    type="text"
                    placeholder="Option D"
                    value={currentQuestion.optD}
                    required
                    onChange={(e) =>
                      setCurrentQuestion({
                        ...currentQuestion,
                        optD: e.target.value,
                      })
                    }
                  />
                <input
                  type="radio"
                  name="answer"
                  value={currentQuestion.optD}
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      answer: e.target.value,
                    })
                  }
                  checked={currentQuestion.answer === currentQuestion.optD}
                />
              </div>

              <button>Update</button>
            </form>
          ) : (
            <form onSubmit={AddQuestion} className="">
              <div>
                <label htmlFor="question" className="title_name">
                  Create Question{" "}
                </label>
                <textarea
                  type="text"
                  placeholder="Create a new question"
                  id="question"
                  value={record.text}
                  onChange={(e) =>
                    setRecord({ ...record, text: e.target.value })
                  }
                />{" "}
              </div>

          
              <div className="InputOpt">
                <input
                  type="text"
                  placeholder="A"
                  value={optA}
                  onChange={(e) => setOptA(e.target.value)}
                />
                <input
                  type="radio"
                  name="answer"
                  value={optA}
                  onChange={(e) =>
                    setRecord({ ...record, answer: e.target.value })
                  }
                  checked={record.answer === optA}
                />
              </div>
              <div className="InputOpt">
                <input
                  type="text"
                  placeholder="B"
                  value={optB}
                  onChange={(e) => setOptB(e.target.value)}
                />
                <input
                  type="radio"
                  name="answer"
                  value={optB}
                  onChange={(e) =>
                    setRecord({ ...record, answer: e.target.value })
                  }
                  checked={record.answer === optB}
                />
              </div>
              <div className="InputOpt">
                <input
                  type="text"
                  placeholder="C"
                  value={optC}
                  onChange={(e) => setOptC(e.target.value)}
                />
                <input
                  type="radio"
                  name="answer"
                  value={optC}
                  onChange={(e) =>
                    setRecord({ ...record, answer: e.target.value })
                  }
                  checked={record.answer === optC}
                />{" "}
              </div>
              <div className="InputOpt">
                <input
                  type="text"
                  placeholder="D"
                  value={optD}
                  onChange={(e) => setOptD(e.target.value)}
              />
                <input
                  type="radio"
                  name="answer"
                  value={optD}
                  onChange={(e) =>
                    setRecord({ ...record, answer: e.target.value })
                  }
                  checked={record.answer === optD}
                />{" "}
              </div>

              <button>Add</button>
            </form>
          )}
          <div className="btnDiv">
            <button className="hide" onClick={HideShowTable}>
              {" "}
              {hide ? "Show table" : "Hide Table"}{" "}
            </button>
            <button className="submitAll" onClick={submitAllQuestions}>
              Submit All
            </button>
          </div>
        </div>

        <div className="table" style={{ display: hide ? "none" : "" }}>
          <table border="1px">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Questions</th>
                <th>Answer</th>
                <th>options</th>
               <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {questions &&
                questions.map((question) => {
                  return (
                    <tr key={question.id}>
                      <td>{question.id}</td>
                      <td>{question.text}</td>
                      <td>{question.answer}</td>
                      <td>{`${question.options}`} </td>
                      <td>
                        <button
                          className="deleteBtn"
                          onClick={() => handleDeleteClick(question)}
                        >
                          Delete
                        </button>
                        <button
                          className="editBtn"
                          onClick={() => handleEditClick(question)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AddQuestions;