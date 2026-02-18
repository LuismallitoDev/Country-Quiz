import { useEffect, useState, type ReactNode } from 'react';
import { QuizContext, type Country, type Questions } from './QuizContext';

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [questions, setQuestions] = useState<Questions[]>([])
    const [countries, setCountries] = useState<Country[]>([]);
    const [icons, setIcons] = useState<boolean[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [gameOver, setGameOver] = useState(false);

    const generateQuestions = (allCountries: Country[]): Questions[] => {
        const shuffledTotal = [...allCountries].sort(() => 0.5 - Math.random());
        const selectedCountries = shuffledTotal.slice(0, 10);

        return selectedCountries.map((country) => {

            const distractors = allCountries
                .filter(c => c.name.common !== country.name.common)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);

            const options = [country, ...distractors].sort(() => 0.5 - Math.random());

            return {
                answer: country,
                options: options,
                selected: false,
            };
        });
    };

    const fetchCountries = () => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region')
            .then(res => res.json())
            .then(data => {
                const newQuestions = generateQuestions(data);
                setQuestions(newQuestions);
                const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 10);
                setCountries(shuffled);
            });
    };

    useEffect(() => {
        fetchCountries();
    }, []);




    const handleCheck = (selectedCountryName: string) => {
        const currentQuestion = questions[currentIndex];
        const userCurrentAnswer = currentQuestion.answer.name.common;
        const auxIcons = Array(4).fill(null);
        currentQuestion.options.map((i, index) => {
            auxIcons[index] = false
            if (i.name.common === userCurrentAnswer) {
                auxIcons[index] = true;
            } else if (i.name.common !== userCurrentAnswer && questions[index].selected == true) {
                auxIcons[index] = false
            }
            setIcons(auxIcons);
        })

        setUserAnswer(userCurrentAnswer);
        setTimeout(() => {
            if (selectedCountryName === userCurrentAnswer) {
                setScore((prev) => prev + 1);
            }
            if (currentIndex < questions.length - 1) {
                setCurrentIndex((prev) => prev + 1);
                setIcons([])
            } else {
                setGameOver(true);
            }
        }, 3000)
    };

    const resetQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setUserAnswer('');
        setGameOver(false);
        fetchCountries();
    };

    return (
        <QuizContext.Provider value={{
            questions,
            countries,
            currentIndex,
            score,
            userAnswer,
            gameOver,
            icons,
            setUserAnswer,
            handleCheck,
            resetQuiz
        }}>
            {children}
        </QuizContext.Provider>
    );
};