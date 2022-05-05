

function Answer({answer, clickOnAnswer, answerIndex}) {

    function handleClick() {
        clickOnAnswer(answer.is_correct, answerIndex);
    }

    return (
        <div className="text-lg mt-4 p-2 bg-blue-300 rounded-xl border-2 border-blue-500 text-center"
             onClick={handleClick}>
            <p>{answer.text}</p>
        </div>
    )
}

export default Answer
