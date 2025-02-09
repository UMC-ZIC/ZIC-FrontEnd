import { useNavigate } from "react-router-dom";
import "./main-header.css";

function MainHeader() {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="main-header-logo" onClick={() => navigate("/")}>
        <img src="zic-mainlogo.png" alt="Logo" />
      </div>
      <div className="header-button">
        <div className="reservation-details" onClick={() => navigate("/reservation-details-page")}>
          <img src="reservation-details.png" alt="reservation-datails-page" />
        </div>
        <div className="mypage-img" onClick={() => navigate("/mypage")}>
          <img src="mypage.png" alt="My Page" />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;