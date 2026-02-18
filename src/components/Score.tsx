import { useQuiz } from "../context/QuizContext"
const Score = () => {
    const { score } = useQuiz();
    return (
        <div className='flex flex-row gap-1.5 items-center font-medium bg-brand-gradient px-4 py-2 text-mist-gray rounded-full text-sm md:text-base'>
            <span>🏆</span>
            <div className="whitespace-nowrap">
                <span>{score}</span>
                <span>/</span>
                <span>10</span>
                <span className="ml-1">Points</span>
            </div>
        </div>
    )
}

export default Score