import Link from "next/link";

const RoundButton = ({ ...props }) => {

  return (
    <div className="flex justify-center items-center relative h-fit w-fit">
      <Link {...props} className={`flex items-center rounded-full justify-center w-[8vw] h-[8vw] tablet:w-[12vw] tablet:h-[12vw] tablet:text-[1.8vw] mobile:w-[22vw] mobile:h-[22vw] mobile:text-[4vw] font-body font-medium text-[1.2vw] leading-[1.2] text-white capitalize border border-white relative overflow-hidden transition-colors duration-500 ease-out group magnetic-inner pointer-events-auto tablet:px-[2vw] hover:text-black`}>
        <span className="absolute w-0 h-0 left-0 top-0 text-white bg-white z-[-1] rounded-full transition-all duration-500 -translate-y-1/2 -translate-x-1/2 group-hover:w-[400px] group-hover:h-[400px]" />
          View More
      </Link>
    </div>
  );
};

export default RoundButton;
