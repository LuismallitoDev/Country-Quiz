import { useQuiz } from "../context/QuizContext"
import type { Country } from "../context/QuizContext"
import check from "../assets/resources/Check_round_fill.svg"
import close from "../assets/resources/Close_round_fill.svg"
import { useState } from "react";

interface OptionsProps {
    children: Country[];
}

const Options = ({ children }: OptionsProps) => {
    const [hasClicked, setHasClicked] = useState(false)
    const { questions, handleCheck, icons } = useQuiz()

    return (
        /* - grid-cols-1 por defecto (Mobile First)
           - min-[635px]:grid-cols-2: A partir de 635px se pone en dos columnas
           - w-full para asegurar que ocupe todo el ancho del Dashboard
        */
        <div className="grid grid-cols-1 min-[635px]:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
            {children.map((country: Country, index) => (
                <button
                    disabled={hasClicked}
                    onClick={() => {
                        handleCheck(country.name.common);
                        setHasClicked(true);
                        questions[index].selected = true;
                        setTimeout(() => {
                            setHasClicked(false);
                            questions[index].selected = false;
                        }, 3000)
                    }}
                    key={country.name.common}
                    /* - text-sm md:text-base: Ajusta el texto para móviles
                       - min-h-[56px]: Mantiene un tamaño consistente si el nombre del país es corto
                    */
                    className="flex flex-row justify-between items-center px-6 py-4 rounded-2xl cursor-pointer bg-deep-navy text-mist-gray transition-all duration-300 group relative overflow-hidden min-h-14 disabled:cursor-not-allowed"
                >
                    {/* Overlay de Hover */}
                    <span className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Nombre del país - z-10 para estar sobre el gradiente */}
                    <span className="relative z-10 text-sm md:text-base font-medium text-left mr-2">
                        {country.name.common}
                    </span>

                    {/* Contenedor de Iconos - z-20 para estar arriba de todo */}
                    <div className="relative z-20 shrink-0 w-6 h-6 flex items-center justify-center">
                        {icons[index] === true && (
                            <img src={check} alt="Correct" className="w-full h-full object-contain" />
                        )}
                        {icons[index] === false && questions[index].selected === true && (
                            <img src={close} alt="Incorrect" className="w-full h-full object-contain" />
                        )}
                    </div>
                </button>
            ))}
        </div>
    )
}

export default Options