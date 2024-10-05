import { useEffect } from "react";
import $ from 'jquery';

const RoundButton = ({className = "", text, href }) => {

  useEffect(()=> {
    $('.btn-hover').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
        top: y,
        left: x
        });
    });

    $('.btn-hover').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
        top: y,
        left: x
        });
    });
  }, [])

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
