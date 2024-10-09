const RoundButton = ({className = "", text, href }) => {

  return (
    <div className="btn_wrapper">
      <a href={href} className={`btn-white btn-hover btn-item ${className}`}>
        <span></span>
            {text}
      </a>
    </div>
  );
};

export default RoundButton;
