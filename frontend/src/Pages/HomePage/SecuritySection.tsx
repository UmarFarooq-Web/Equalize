import { ShieldCheck } from "lucide-react";


export default function SecuritySection() {
    return (<section id="security" className="dark:bg-cGray-700 dark:text-cWhite-500 text-cBlack bg-cWhite-700 py-[100px] flex flex-col justify-center px-[16px] sm:px-[42px]  md:px-[92px] items-center px-3 md:px-7" >
        <div className="w-full max-w-[700px] flex flex-col items-center gap-5">
            <ShieldCheck size={100} />
            <h1 className=" text-3xl md:text-4xl font-bold">Security You Can Trust</h1>
            <p className="dark:text-Pgray-300 text-center" >Your financial data is protected with bank-level security. We use end-to-end encryption and secure servers to ensure your information is always safe.</p>
        </div>
    </section>
    )
}