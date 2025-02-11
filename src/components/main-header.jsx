import { useNavigate } from "react-router-dom";
import logo from '../../public/logo.svg';
import reservation from '../../public/book-icon.svg';
import mypage from '../../public/mypage-icon.svg';
import "./main-header.css";

function MainHeader() {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="main-header-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-button">
        <div className="reservation-details" onClick={() => navigate("/reservation-details-page")}>
          <img src={reservation} alt="reservation-datails-page" />
        </div>
        <div className="mypage-img" onClick={() => navigate("/mypage")}>
          <img src={mypage} alt="My Page" />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;