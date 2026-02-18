import { useQuiz } from "../context/QuizContext"


const QuestionNumber = () => {
    const { currentIndex } = useQuiz();

    const classAsignation = (i: number) => (i + 1 <= currentIndex ? "bg-brand-gradient" : 'bg-deep-navy');

    return (
        /* gap-2 en móvil para que quepan los 10 en una o dos líneas */
        <div className="flex flex-wrap w-full justify-center items-center gap-2 md:gap-3.5 mb-6 md:mb-10">
            {[...Array(10)].map((_, i) => (
                <div key={i} className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-base text-mist-gray flex items-center justify-center transition-all ${classAsignation(i)}`}>
                    {i + 1}
                </div>
            ))}
        </div>
    )
}

export default QuestionNumber