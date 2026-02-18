import Options from "../components/Options"
import QuestionNumber from "../components/QuestionNumber"
import { useQuiz } from "../context/QuizContext"

const Dashboard = () => {
    const { questions, currentIndex } = useQuiz();

    if (questions.length === 0) return <div className="text-white text-center">Cargando...</div>;

    const currentQuestion = questions[currentIndex];

    return (
        
        <div className="flex flex-col justify-center items-center w-full h-auto gap-6 md:gap-10 bg-slate-indigo backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-2xl">
            <div className="flex flex-col items-center w-full">
                <QuestionNumber />

               
                <h2 className="flex flex-wrap justify-center items-center text-xl md:text-heading-lg text-center text-mist-gray mb-6 md:mb-10 gap-3 max-w-2xl">
                    <span>Which country does this flag</span>
                    <img
                        src={currentQuestion.answer.flags.png}
                        alt="Secret Country"
                        className="w-12 h-auto rounded-sm shadow-sm object-cover"
                    />
                    <span>belong to?</span>
                </h2>

                <Options children={currentQuestion.options} />
            </div>
        </div>
    );
}

export default Dashboard;