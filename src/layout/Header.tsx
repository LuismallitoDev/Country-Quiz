import Score from "../components/Score"

const Header = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between w-full gap-4 items-center'>
            <h1 className='text-2xl md:text-4xl text-mist-gray font-medium'>Country Quiz</h1>
            <Score />
        </div>
    )
}

export default Header