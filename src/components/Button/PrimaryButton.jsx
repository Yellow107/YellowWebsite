const PrimaryButton = ({ ...props }) => {

  return (
    <div className="flex justify-center items-center relative h-fit w-fit">
      <button {...props} aria-label="Play Showreel" className={`flex items-center rounded-full justify-center w-[8vw] h-[8vw] tablet:w-[18vw] tablet:h-[18vw] tablet:text-[3vw] mobile:w-[22vw] mobile:h-[22vw] mobile:text-[4vw] font-body font-medium text-[1.2vw] leading-[1.2] text-white capitalize border border-white relative overflow-hidden transition-colors duration-500 ease-out group magnetic-inner hover:text-black`}>
        <span aria-label="Play Showreel" className="absolute w-0 h-0 left-0 top-0 text-white bg-white z-[-1] rounded-full transition-all duration-500 -translate-y-1/2 -translate-x-1/2 group-hover:w-[400px] group-hover:h-[400px]" />
            Play Reel
      </button>
    </div>
  );
};

export default PrimaryButton;
