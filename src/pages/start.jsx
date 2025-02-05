import React, {useEffect} from 'react';
import './start.css';
import "../styles/fonts.css";

export default function Start() {
    useEffect(() => {
        // Kakao SDK 스크립트 동적 로드
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.onload = () => {
            // Kakao SDK 초기화
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init('f1c1be5764e3d1e9d99b64e47e00ac1b');
                console.log('Kakao SDK 초기화 여부:', window.Kakao.isInitialized());
            }
            handleRedirect(); // 페이지 로드 시 리다이렉트 처리
        };
        document.head.appendChild(script);

        // 컴포넌트 언마운트 시 스크립트 제거
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    // 로그인 함수
    const handleKakaoLogin = () => {
        const redirectURL = `http://localhost:5173/categorization`; // 리다이렉트 후 돌아올 URL
        if (window.Kakao) {
            window.Kakao.Auth.authorize({
                redirectUri: redirectURL,
                scope: 'profile_nickname,profile_image',
            });
        }
    };

    // 로그인 후 리다이렉트된 URL에서 인증 코드 확인
    const handleRedirect = () => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code'); // URL에서 인증 코드 추출

        if (code) {
            console.log('인가 코드:', code);
            alert(`인가 코드: ${code}`);
        }
        else {
            console.error('인가 코드가 없습니다. URL을 확인하세요.');
        }
    };

    return (
        <div className="start-container">

            <header className="text-and-logo">
                <p>당신이 연주할 곳은 여기</p>
                <img src="/piano5line.png" className="piano-lines" />
                <img src="/logo-on-lines.png" className="start-logo" />
            </header>

            <footer className="footer">
                <button className="kakao-button" onClick={handleKakaoLogin}>
                    <img src="/kakaobutton.png"/>
                </button>
                <button className="email-button">다른 이메일로 시작하기</button>
            </footer>

        </div>
    );
}
