import { CircleEqual } from "lucide-react";

export default function Footer(){
    return(
        <footer className="dark:bg-cBlack dark:text-cWhite-500 text-cBlack bg-cWhite-500 border-gray-600 flex gap-1 justify-center px-[16px] sm:px-[42px]  md:px-[92px]" >
            <CircleEqual size={30} />
            <span>Equalize</span>
            <span>© 2024 Equilo. All rights reserved.</span>
        </footer>
    )
}