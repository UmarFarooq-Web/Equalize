import Button from "./Button";

export default function EndSection(){
    return(
        <section className="dark:bg-cBlack dark:text-cWhite-500 text-cBlack bg-cWhite-500 py-[100px] flex flex-col gap-3 justify-center items-center px-[16px] sm:px-[42px]  md:px-[92px]" >
            <h1 className=" text-4xl md:text-5xl font-bold">Ready to simplify your shared expenses?</h1>
            <p className="dark:text-Pgray-300" >Join thousands of users who are splitting bills the smart way.</p>
            <Button ExtraClasses="px-5 py-3" />
        </section>
    )
}