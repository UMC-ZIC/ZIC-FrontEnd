import '../successpage.css';
import '../../styles/fonts.css'
import NextButton from '../../components/button';

export default function OwnerSuccess() {
    return (
        <div className="success-container">
            <main className="success-center"> {/*가운데 콘텐츠 영역*/}
                <div>
                    <p>회원가입에</p>
                    <h1>성공했어요!</h1>
                </div>
                <div>
                    <NextButton text="룸 등록하기"/> {/*다음 버튼 공용 컴포넌트 사용*/}
                    <button className="skip-btn">건너뛰기</button>    
                </div>
            </main>
        </div>  
    );
}
