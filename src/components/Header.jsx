import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="title">간단 쇼핑몰 연습용</div>
        <div className="subtitle">
          context API 만 이용해서 만든 간단간단 연습용 사이트임{" "}
        </div>
        <div className="btm__area">
          <a
            href="https://github.com/suwoncityBoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>깃허브로 이동</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
