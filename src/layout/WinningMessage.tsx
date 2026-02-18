import image from "../assets/resources/congrats.png"
import { useQuiz } from "../context/QuizContext"
const WinningMessage = () => {
    const { score, resetQuiz } = useQuiz()
    return (
        <div className="flex flex-col justify-center items-center w-fit  gap-10 bg-deep-navy rounded-2xl pt-8 pb-15 shadow-2xl ">
            <img src={image} alt="Congrats Image!" className="w-4/5" />
            <div className="flex flex-col justify-center items-center text-mist-gray gap-4 -mt-4">
                <h2 className="text-3xl w-4/5 text-center">
                    Congrats! You completed the quiz.
                </h2>
                <p className="text-lg">You answer {score}/10 correctly</p>
            </div>
            <button
            onClick={resetQuiz}
                className="border-0 outline-0 p-4.5 rounded-xl cursor-pointer bg-brand-gradient font-medium text-mist-gray w-3xs text-lg mt-3  
                group
                ">
                Play again
            </button>

        </div>
    )
}

export default WinningMessage