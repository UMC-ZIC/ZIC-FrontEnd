import React from 'react';
import './Main-Footer.css';
import '../styles/fonts.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="ZIC">
        ZIC
      </p>
      <p className="footer-info">
        회사소개 | 개인정보 처리방침 | 서비스 이용약관 | 사업자 정보확인
        <br />
        <br />
        광고제휴문의 | 위치정보 이용약관 | 전자공정거래 이용자 유의사항
      </p>
    </footer>
  );
}

export default Footer;
