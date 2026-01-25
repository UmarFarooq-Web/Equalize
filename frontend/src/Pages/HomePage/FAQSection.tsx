import Accordion from "./Accordion"

export default function FAQSection() {
    const data = [
        { q: "How does Equilo work?", a: "Splitr allows you to easily split expenses with friends, roommates, or travel companions. Simply scan your receipts, add your friends to a group, and assign who paid for what. The app automatically calculates balances and allows for easy settlements." },
        { q: "Is my data secure?", a: "Yes, your data is secure. We use bank-level encryption and follow industry best practices to protect your information." },
        { q: "What payment methods do you support?", a: "We support a variety of payment methods, including credit/debit cards, bank transfers, and popular digital wallets to make settling up as convenient as possible." }
    ]
    return (
        <section id="faq" className="dark:bg-cGray-700 dark:text-cWhite-500 text-cBlack bg-cWhite-700 py-[100px] flex flex-col justify-center items-center px-[16px] sm:px-[42px]  md:px-[92px]" >
            <h1 className=" text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            <div className="flex flex-col items-center mt-10 md:mt-20 gap-2 w-full" >
                {data.map(e => <div className="w-full md:w-1/3 flex-col items-center" >
                    <Accordion q={e.q} a={e.a}/>
                </div>)}
            </div>
        </section>
    )
}