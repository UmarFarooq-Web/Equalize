import Button from "./Button";
import GetStartedButton from "./GetStartedButton";


export default function HeroSection() {

    return (
        <section className="dark:bg-cGray-700 dark:text-cWhite-500 text-cBlack bg-cWhite-700 flex flex-col justify-center items-center min-h-[400px] md:min-h-[600px] px-[16px] sm:px-[42px]  md:px-[92px]">
            <div className="flex justify-center items-center flex-col w-full max-w-[900px] gap-2.5" >
                <h1 className="font-bold text-5xl md:text-7xl text-center" >Split bills, not friendships.</h1>
                <p className="text-center mb-2 mt-2">Equilo makes it easy to share expenses with friends, roommates, and travel companions. Track balances, settle up, and keep everyone on the same page.</p>
                <div className="mt-2.5" >
                   <GetStartedButton/>
                </div>
            </div>
        </section>
    )
}