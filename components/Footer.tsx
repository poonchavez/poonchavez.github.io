import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-center items-center text-center text-sm text-gray-700 p-8 dark:text-gray-300">
                Designed and developed by Chavez Poon © 2026
                <span className="mx-2 hidden md:inline">|</span>
        </footer>
    )    
}

export default Footer;
