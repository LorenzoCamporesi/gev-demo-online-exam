import {useEffect} from "react";

function WrongQuestionContainer({ questionText, questionCode, correctAnswer, wrongAnswer }) {

    useEffect(() => {

    })

    return (
        <div className="border-b-2 pb-2">
            <div className="p-2 bg-gray-300 rounded-xl border-1 text-center">
                <h3>{questionText}</h3>
            </div>
            <div className="">
                {/*"text-lg mt-4 p-2 bg-blue-300 rounded-xl border-2 border-blue-500 text-center"*/}
                <div className="text-lg mt-1 p-2 bg-green-300 rounded-xl border-2 border-green-500 text-center">
                    <p className="text-center font-bold mb-1">Risposta corretta:</p>
                    <p>{correctAnswer?.text}</p>
                </div>
                <div className="text-lg mt-1 p-2 bg-red-300 rounded-xl border-2 border-red-500 text-center">
                    <p className="text-center font-bold mb-1">Risposta data:</p>
                    <p>{wrongAnswer?.text}</p>
                </div>
            </div>
            <p className="text-right">{questionCode}</p>
        </div>
    );

}

export default WrongQuestionContainer

