import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Whatsapp() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="fixed bottom-2 right-2 h-fit w-fit fadeup group z-[10] bg-white/25 backdrop-blur-md rounded-full overflow-hidden">
            <Link
                className="w-full h-full"
                aria-label="Connect With Us"
                href="https://wa.me/971545178971"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    width={120}
                    height={120}
                    className='animate-spin transition-transform object-cover duration-5000 w-[7vw] h-[7vw] tablet:w-[12vw] tablet:h-[12vw] mobile:w-[20vw] mobile:h-[20vw]'
                    alt='PopUp Form HireUs Image'
                    src="/assets/icons/talk-to-us-1.svg"
                    priority={false}
                />
                <Image
                    loading="lazy"
                    height={50}
                    width={50}
                    alt="Whatsapp Icon"
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 opacity-90 -translate-y-1/2 w-[40%] h-auto group-hover:scale-110 duration-300'
                    src={isHovered ? '/assets/icons/whatsapp.gif' : '/assets/icons/hireus.png'}
                />
            </Link>
        </div>
    )
}