import React from 'react'
import "../styles/Quiz.css"
import Determiner from './Determiner'

const QuizFooter = () => {

      let values = Determiner()
    
    let treatmentArray = [...values[4]]

    let displayTreatment = treatmentArray.map(object => {
        return(
            <div className="treatment-box">
                <p>{object}</p>
            </div>
        )
    })
    return (
        <div>
            <div className="treatment-container">
                <h1>Expected Treatment</h1>
                <div className="treatment-groupbox">
                    {displayTreatment}
                </div>
            </div>
        </div>
    )
}

export default QuizFooter