import questionsData from "./questionsData";
import "./questions.css";
import { useState } from "react";

function Questions() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleQuestionClick = (questionNumber) => {
    setOpenQuestion(questionNumber === openQuestion ? null : questionNumber);
  };
  return (
    <>
      <Question1  number={1}
      isOpen={openQuestion === 1}
        onClick={() => handleQuestionClick(1)}/>
      <Question2  number={2}
      isOpen={openQuestion === 2}
        onClick={() => handleQuestionClick(2)}/>
      <Question3  number={3}
      isOpen={openQuestion === 3}
        onClick={() => handleQuestionClick(3)}/>
    </>
  );
}


function Question1({isOpen , onClick}){
  return(
    <>  
      <div className="questions">
            <div className="questionsItems" >
              <div className="items">
                <div className="cont">
                <div>
                  <span className="questionNumber">01</span>
                  <span className="question">Where are these chairs assembled?</span>
                </div>
                <button className="btn" onClick={onClick}>
                  {isOpen ? "-" : "+"}
                </button>
                </div>
                <div>{isOpen && <p className="answer">Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>}</div>
              </div>
            </div>
      </div>
    </>
  )
}


function Question2({isOpen , onClick}){
  return(
    <>  
      <div className="questions">
            <div className="questionsItems" >
              <div className="items">
                <div className="cont">
                <div>
                  <span className="questionNumber">02</span>
                  <span className="question">How long do i have to return my chair?</span>
                </div>
                <button className="btn" onClick={onClick}>
                  {isOpen ? "-" : "+"}
                </button>
                </div>
                <div>{isOpen && <p className="answer">Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>}</div>
              </div>
            </div>
      </div>
    </>
  )
}


function Question3({isOpen , onClick}){
  return(
    <>  
      <div className="questions">
            <div className="questionsItems" >
              <div className="items">
                <div className="cont">
                <div>
                  <span className="questionNumber">03</span>
                  <span className="question">Do you ship to countries outside the EU?</span>
                </div>
                <button className="btn" onClick={onClick}>
                  {isOpen ? "-" : "+"}
                </button>
                </div>
                <div>{isOpen && <p className="answer">Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>}</div>
              </div>
            </div>
      </div>
    </>
  )
}
export default Questions;





{/* <div className="questions">
        {questionsData.map((value) => {
          return (
            <div className="questionsItems" key={value.id}>
              <div className="items">
                <div className="cont">
                <div>
                  <span className="questionNumber">{value.questionNumber}</span>
                  <span className="question">{value.question}</span>
                </div>
                <button className="btn" onClick={()=>setShow(!show)}>{show === true ? "-" : "+"}</button>
                </div>
                <div>{show && <p className="answer">{value.answer}</p>}</div>
              </div>
            </div>
          );
        })}
</div> */}