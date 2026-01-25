import { CirclePoundSterling, Divide, ReceiptText, UserRoundPlus } from "lucide-react"


export default function WorkSection(){
    const data = [
        {icon:<UserRoundPlus size={35}  /> , heading:"2. Add friends" , des:"Invite your friends to your group and easily assign who paid for what. Keep track of who owes whom."},
        {icon:<ReceiptText size={35} /> , heading:"2. Create Bill" , des:"Select friends, Enter Bill, Send Recipt"},
        {icon:<CirclePoundSterling size={35} /> , heading:"3. Settle up" , des:"Settle balances with a few taps. We support various payment methods for seamless transactions."}
    ]
    return(
        <section id="work" className="dark:bg-black dark:text-cWhite-500 text-cBlack bg-cWhite-500 py-[100px] flex flex-col justify-center items-center px-[16px] sm:px-[42px]  md:px-[92px] " >
            <div className="max-w-[1440px] flex flex-col items-center" >

            <h1 className=" text-4xl md:text-5xl font-bold">How it works</h1>
            <p className="dark:text-Pgray-300" >Three simple steps to split expenses.</p>
            <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-10" >
                {data.map(e=><div className="flex w-full md:w-1/3 flex-col items-center" >
                    {e.icon}
                    <h2 className="text-2xl font-semibold" >{e.heading}</h2>
                    <p className="dark:text-gray-500" >{e.des}</p>
                </div>)}
            </div>
            </div>
        </section>
    )
}