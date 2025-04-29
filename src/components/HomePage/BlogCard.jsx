import { formatDate } from "@/lib/datetime";
import Image from "next/image";
import Link from "next/link";
import Line from "../Line";

const BlogCard = ({ title, src, date, link }) => {
  return (
    <div className="group hide-first-child">
      <Line />
      <div className="w-full bg-black lineDraw h-[1px] hidden mobile:block tablet:block"></div>
      <div className="w-full flex justify-between items-start mt-[2vw] mb-[4vw] mobile:flex-col mobile:mt-[8vw]">
        <div className="flex items-start gap-[2vw] mobile:flex-col">
          <Link
            href={link}
            className="overflow-hidden rounded-[1.5vw] mobile:rounded-[20px]"
          >
            <div className="h-[16.5vw] w-[26.5vw] image-animation-down-wrapper overflow-hidden mobile:w-[85vw] mobile:h-[27vh] tablet:w-[30vw] tablet:h-[20vw] scale-[1.1] group-hover:scale-[1] transition-all ease-in-out duration-500">
              <div className="">
                <Image
                  src={src}
                  alt="blog image"
                  priority={false}
                  fill
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </Link>
          <div className="flex flex-col h-[16vw] justify-between items-start mobile:h-full mobile:gap-[3vw] mobile:pl-[2vw]">
            <Link href={link}>
              <h4 className="text-[2vw] font-medium w-[43vw] leading-[1.3] mobile:text-[5.5vw] mobile:w-full tablet:text-[3vw] fadeup">
                {title}
              </h4>
            </Link>
            <p className="text-[1.1vw] font-medium fadeUp mobile:text-[4vw] fadeup tablet:text-[2vw]">
              {formatDate(date)}
            </p>
          </div>
        </div>
        <Link href={link}>
          <div className="h-[5vw] fadeIn w-[5vw] flex items-center justify-center border border-body rounded-full group-hover:bg-body transition-all duration-500 group-hover:text-white mobile:h-[15vw] mobile:w-[15vw] tablet:w-[8vw] tablet:h-[8vw] mobile:my-[5vw]">
            <svg
              className="relative -rotate-[135deg] w-[1.7vw] h-[1.7vw] overflow-hidden mobile:w-[6vw] mobile:h-[6vw] tablet:w-[4vw] tablet:h-[4vw]"
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                fill="currentColor"
              />
              <path
                className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
