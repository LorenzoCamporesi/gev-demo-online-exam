import Question from "./question";
import Answer from "./answer";
import {useEffect} from "react";


const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

function QuestionContainer({ question, nextQuestion }) {

    function clickOnAnswer(isCorrect, answerId){
        nextQuestion(isCorrect, question, answerId);
    }

    useEffect(() => {

    })

    return (
        <div>
            <Question text={question[1].question}/>
            <div className="">
                {
                    question[1].answers.map((value, index) => {
                        return <Answer answerIndex={index} key={index} answer={value} text={value.text} clickOnAnswer={clickOnAnswer}/>;
                    })
                }
            </div>
            <p className="text-right">{question[0]}</p>
        </div>
    );

}

export default QuestionContainer
