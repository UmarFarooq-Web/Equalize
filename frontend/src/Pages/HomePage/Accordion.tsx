'use client'
import { ChevronDown } from "lucide-react";
import { useState } from "react";


export default function Accordion({ q, a }: { q: string, a: string }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div onClick={() => setIsOpen(prev => !prev)} className="  border dark:border-Pgray-300 dark:bg-Pgray-400 rounded py-3 px-4 flex flex-col">
            <div className="flex">
                <span className="w-full font-semibold">
                    {q}
                </span>
                <div className={`${isOpen?"transform rotate-180":""} transition-all duration-200 ` } >
                    <ChevronDown />
                </div>
            </div>
            <span className={`${isOpen ? "" : "h-0"}  overflow-hidden dark:text-stone-400`}>
                {a}
            </span>
        </div>
    )
}