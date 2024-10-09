const PrimaryButton = ({className = "", onClick, text }) => {

  return (
    <div className="btn_wrapper">
      <button aria-label="Play Showreel" onClick={onClick} className={`btn-white btn-hover btn-item ${className}`}>
        <span></span>
            {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
