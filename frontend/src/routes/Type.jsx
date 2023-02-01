import React from 'react'
import "../styles/Quiz.css"
import QuizBody from '../components/QuizBody'
import Determiner from "../components/Determiner"

function Type(){
  let values = Determiner()
    return(
        <div>
          <QuizBody index={values[0]} label={values[2]} choices={values[3]}/>
        </div>
    )
}

export default Type