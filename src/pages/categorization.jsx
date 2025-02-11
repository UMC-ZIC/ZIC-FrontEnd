import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/signup-header"
import NextButton from "../components/button"; // 공용 button 컴포넌트 가져오기기
import "./categorization.css";
import "../styles/fonts.css";

export default function Categorization() {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        if (selected === "user") {
            navigate("/user/information"); // '이용자' 선택 시 user-information 페이지로 이동
        } else if (selected === "owner") {
            navigate("/owner/information"); // '대여자' 선택 시 owner-information 페이지로 이동
        } else {
            alert("가입 목적을 선택해주세요."); // 아무것도 선택하지 않은 경우 경고
        }
    };

    return (
        <div className="categorization-container"> {/*전체 레이아웃*/}

            <Header/>
            <div className="progress-bar-container"> {/*진행 바*/}
                <div className="progress-bar-fill"></div>
            </div>
            
            <h1 className="question">어떤 목적으로 가입하시나요?</h1>

            <div className="button-group"> {/*버튼 그룹 영역(클래스) 안에 이용자/대여자 분류 버튼*/}
                <button
                    className={`category-button ${selected === "user" ? "active" : ""}`} 
                    /*selected === "user"가 true 일 때 className="category-button active" , selected !== "owner"가 true일 때 className="category-button"*/
                    onClick={() => setSelected("user")}> {/*버튼이 클릭되었을 때 selected 상태를 user로 업데이트*/}
                    <div>
                        <span>연습실</span>
                        <p>이용자</p>
                    </div>
                </button>
                <button
                    className={`category-button ${selected === "owner" ? "active" : ""}`}
                    onClick={() => setSelected("owner")}>
                    <div>
                        <span>연습실</span>
                        <p>대여자</p>
                    </div>
                </button>
            </div>

            <NextButton text="다음" onClick={handleNext}/> {/*다음 버튼 공용 컴포넌트 사용*/}

        </div>
    );
}