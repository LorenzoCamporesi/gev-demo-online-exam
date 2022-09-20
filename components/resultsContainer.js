import {useEffect} from "react";
import Answer from "./answer";
import WrongQuestionContainer from "./wrongQuestionContainer";

function ResultsContainer({ correctQuestions, wrongQuestions }) {

    useEffect(() => {

    })

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            {
            wrongQuestions.length > 5?
                <h1 className='text-center text-3xl text-red-600 uppercase font-bold'>Bocciato</h1> :
                <h1 className='text-center text-3xl text-green-600 uppercase font-bold'>🎉 Promosso 🎉</h1>
            }
            <div className="ml-3 mt-3">
                Risposte sbagliate: <b>{ wrongQuestions.length }</b>
            </div>
            <div className="py-2">
                <button className="p-2 w-full bg-orange-300 rounded-xl border-1 text-center shadow-lg" onClick={refreshPage}>Ripeti il quiz</button>
            </div>
            <div className="mt-3 mt-3">
                {
                    wrongQuestions.map((value, index) => {
                        // return JSON.stringify(value['question'][1]['question']);
                        let wrongAnswer;
                        let correctAnswer;
                        value['question'][1].answers.map((answer, index) => {
                            if(answer.is_correct){
                                correctAnswer = answer;
                            }else if(index === value.answerId){
                                wrongAnswer = answer;
                            }
                        })
                        return (<>
                            <div className="my-5">
                                <WrongQuestionContainer
                                    questionText={value['question'][1]['question']}
                                    questionCode={value['question'][0]}
                                    correctAnswer={correctAnswer}
                                    wrongAnswer={wrongAnswer}
                                />
                            </div>
                        </>);
                    })
                }
            </div>
            <div className="py-2">
                <button className="p-2 w-full bg-orange-300 rounded-xl border-1 text-center shadow-lg" onClick={refreshPage}>Ripeti il quiz</button>
            </div>
        </div>
    );

}

export default ResultsContainer
