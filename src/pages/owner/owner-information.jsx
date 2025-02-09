import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/signup-header"; // 공용 header 컴포넌트 가져오기
import NextButton from "../../components/button"; // 공용 button 컴포넌트 가져오기
import "./owner-information.css";
import "../../styles/fonts.css";
import "../../App.css"

export default function OwnerInformation() {
    const [selectedInstruments, setSelectedInstruments] = useState([]);
    const [businessNumber, setBusinessNumber] = useState(""); // 사업자 번호 상태
    const [businessError, setBusinessError] = useState(""); // 에러 메시지 상태
    const [storeName, setStoreName] = useState(""); // 상호명 상태 
    const [address, setAddress] = useState(""); // 주소 상태
    const [detailAddress, setDetailAddress] = useState(""); // 상세 주소 상태
    const navigate = useNavigate();

    const instruments = [
        "피아노", "바이올린",
        "기타", "베이스",
        "드럼", "플룻",
        "하프", "트럼펫",
        "비올라", "사물놀이",
    ];

    const toggleInstrument = (instrument) => {
        if (selectedInstruments.includes(instrument)) {
            setSelectedInstruments(selectedInstruments.filter(item => item !== instrument));
        } else {
            setSelectedInstruments([...selectedInstruments, instrument]);
        }
    };

    //사업자 번호 유효성 검사
    const handleBusinessNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, ""); // 숫자가 아닌 문자 제거 (only 숫자)
        setBusinessNumber(input); 

        if (input.length === 10) {
            setBusinessError(""); // 10자리 숫자일 경우 에러 제거
        } else {
            setBusinessError("숫자 10자리를 정확히 입력해주세요."); // 에러 메시지 표시
        }
    };

    // 빈 화면 클릭하면 에러 메시지 숨김
    const handleBlur = () => {
        setBusinessError(""); // 에러 메시지 제거
    };

    //상호명 입력값 변경 핸들러
    const handleStoreNameChange = (e) => setStoreName(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleDetailAddressChange = (e) => setDetailAddress(e.target.value);

    const handleNext = () => {
        if (businessNumber.length !== 10) {
            setBusinessError("숫자 10자리를 정확히 입력해주세요");
            return;
        }
        navigate("/owner-success");
    };

    return (
        <div className="content-wrap owner-information">
            <Header />
            <div className="owner-progress-bar-container">
                <div className="owner-progress-bar-fill"/>
            </div>
            
            {/*상호명 입력*/}
            <div className="label-section">
                <label className={storeName ? "label-filled" : "label-unfilled"}>상호명</label>
                <div className="input-bar">
                    <input 
                    type="text" 
                    placeholder="상호명을 입력해주세요."
                    value={storeName}
                    onChange={handleStoreNameChange}
                    />
                </div>
            </div>

            {/*사업자 번호 입력*/}
            <div className="business-number-section">
                <label className={businessNumber ? "label-filled" : "label-unfilled"}>사업자 번호</label>
                <div className="input-bar">
                    <input 
                    type="text" 
                    placeholder="사업자 번호를 입력해주세요." 
                    value={businessNumber}
                    onChange={handleBusinessNumberChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    />
                </div> 
                {businessError && <p className="error-message">{businessError}</p>} {/* 에러 메시지 표시 */}               
            </div>

            {/*주소 입력*/}
            <div className="address-section">

                <label className={address && detailAddress ? "label-filled" : "label-unfilled"}>주소</label>
                <div className="input-bar">
                    <input
                        type="text" 
                        placeholder="도로명, 지번, 건물명 검색"
                        value={address}
                        onChange={handleAddressChange}
                    />
                    <button className="search-button">
                        <img src="/searchbutton.png"/>
                    </button>
                </div>
                <div className="second-input-bar">
                    <input
                        type="text" 
                        placeholder="상세주소를 작성해주세요."
                        value={detailAddress}
                        onChange={handleDetailAddressChange}
                    />
                </div>
            </div>

            {/*연주 가능 종목*/}
            <div className={`owner-instruments-section ${selectedInstruments.includes(instruments) ? "active" : ""}`}>
                <label className={selectedInstruments.length > 0 ? "label-filled" : "label-unfilled"}>연주 가능 종목</label>
                <div className="instruments-grid">
                    {instruments.map((instrument, index) => (
                        <button
                            key={index}
                            className={`instrument-button ${
                                selectedInstruments.includes(instrument) ? "active" : ""}`}
                            onClick={() => toggleInstrument(instrument)}>{instrument}
                        </button>
                    ))}
                </div>
            </div>
            <NextButton text="다음" onClick={handleNext}/> {/*다음 버튼 공용 컴포넌트 사용*/}
        </div>
    );
}