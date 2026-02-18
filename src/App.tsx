import { useQuiz } from "./context/QuizContext"
import Dashboard from "./layout/Dashboard"
import Header from "./layout/Header"
import WinningMessage from "./layout/WinningMessage"

function App() {
  const { gameOver } = useQuiz()

  return (
    <div className="min-h-screen w-full font-vietnam grid grid-cols-12 items-center p-4">
      {/* - col-span-12: Full width en móvil
          - min-[635px]:col-span-8: A partir de 635px ocupa 8 columnas
          - min-[635px]:col-start-3: Centrado manual
      */}
      <div className="col-span-12 min-[635px]:col-span-8 min-[635px]:col-start-3 lg:col-span-6 lg:col-start-4 flex flex-col gap-6 md:gap-10 items-center">
        {!gameOver ? (
          <>
            <Header />
            <Dashboard />
          </>
        ) : (
          <WinningMessage />
        )}
      </div>
    </div>
  )
}

export default App
