import * as questionsData from './../DomandeGEV.json'
import {useEffect, useState} from "react";
import QuestionContainer from "./questionContainer";
import ResultsContainer from "./resultsContainer";

const {data} = questionsData;

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

function Container() {

    const selectedQuestions = shuffleArray((Object.entries(data))).slice(0, 30);

    let [currentQuestionNumber, setCurrentQuestionNumber]= useState(1, value => {
        return value
    })
    let [currentQuestion, setCurrentQuestion] = useState(selectedQuestions[currentQuestionNumber], value => {
        return value
    })

    let [ wrongQuestions, setWrongQuestions] = useState([]);
    let [ correctQuestions, setCorrectQuestions] = useState([]);

    function nextQuestion(isCorrect, question, answerId){
        if(isCorrect){
            setCorrectQuestions([...correctQuestions,{
            "question": question,
            "answerId": answerId,
            }]);
        }else{
            setWrongQuestions([...wrongQuestions,{
                "question": question,
                "answerId": answerId,
            }]);
        }
        setCurrentQuestionNumber(currentQuestionNumber+1)
        if(currentQuestionNumber <= 30){
            setCurrentQuestion(selectedQuestions[currentQuestionNumber-1])
        }else{

        }
    }

    useEffect(() => {

    })

    return(
        <>
            {
                currentQuestionNumber <= 30 ?
                    <p className="text-center text-3xl mb-5">{currentQuestionNumber}/30</p> :
                    ''
            }
            {
                currentQuestionNumber <= 30 ?
                    <QuestionContainer question={currentQuestion} nextQuestion={nextQuestion}/> :
                    <ResultsContainer correctQuestions={correctQuestions} wrongQuestions={wrongQuestions}/>
            }
        </>
    )

}

export default Container
