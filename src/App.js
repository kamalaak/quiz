import {useState} from "react";
import questions from "./componants/questions";
import "./index.css"

function App() {
  const [questionind, setQuestion]=useState(0);
  const curquestion = questions[questionind];
  const [score, setscore]=useState(0);
  const [screenscore, setscreenscore]=useState(false);
  const selectoptions= (index)=>{
    console.log(index);
    if (curquestion.snswer === index) {
        setscore(score + 1);
    }
    const last = questionind+1;
    if (last < questions.length) {
      setQuestion(questionind +1);
    }else{
     setscreenscore(true)
    }
   
  };
  const some = () => {
    setQuestion(0)
    setscreenscore(false)
    setscore(0)
  };

 
return(
<div className="container">
  {
    screenscore ? (<><h1>Your score is :   {score}</h1>
     <button className="btn" onClick={some}>do you wanna try again </button>
    </>):( <div className="questions">
    <p>{curquestion.questions} </p>
   <div className="options">
    <ul className="ul">{curquestion.options.map((Option, i) =>{
      return <li className="li" onClick={()=>selectoptions(i)}>{Option} </li>
    })}
    </ul>
   </div>
  </div>)
  };
 </div>
);
}
export default App;