import Image from "next/image";
import Link from "next/link";

export default function Whatsapp() {
    return (
        <div className="fixed bottom-4 right-4 h-[5vw] w-[5vw] mobile:w-[15vw] mobile:h-[15vw] tablet:w-[10vw] tablet:h-[10vw] fadeup z-[2] bg-white/25 backdrop-blur-md rounded-full overflow-hidden p-3">
            <Link href="https://wa.me/971545178971">
                <Image
                    proiority={false}
                    height={100}
                    width={100}
                    src="/assets/icons/whatsapp-icon.svg"
                    alt="Whatsapp Icon"
                    className="w-full h-full object-contain"
                />
            </Link>
        </div>
    )
}