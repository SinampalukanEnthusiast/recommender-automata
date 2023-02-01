import React from 'react'
import QuizNav from '../components/QuizNav'
import QuizFooter from '../components/QuizFooter'
import "../styles/Quiz.css"
import { useParams } from "react-router-dom";
import Start from "./Start"
import Need from "./Need"
import Want from "./Want"
import Type from "./Type"
import Plan from "./Plan"
import Result from "./Result"

const questions = {
  "need": <Need />,
  "want": <Want />,
  "type": <Type />,
  "plan": <Plan />,
  "result": <Result />
}

const Quiz = () => {
    const { id } = useParams();

    return(
        <div>
          <QuizNav />
          { questions[id] 
            ? <>
                {questions[id]}
                {id !== "result" ? <QuizFooter /> : console.log("ola")}
              </> 
            : <Start />
          }
        </div>
    )
}

export default Quiz