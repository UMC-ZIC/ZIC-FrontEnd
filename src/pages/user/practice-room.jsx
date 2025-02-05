import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './practice-room.css'; // CSS 파일 연결

const practiceRooms = [
  {
    id: 1,
    name: 'A실',
    price: '10,000',
    image: '/practice-room 2.png',
    availableTimes: Object.fromEntries(Array.from({ length: 48 }, (_, i) => [i, i % 2 ===0])),
  }, // true는 이용 불가, false는 이용 가능
  {
    id: 2,
    name: 'B실',
    price: '10,000',
    image: '/practice-room 3.png',
    availableTimes: Object.fromEntries(Array.from({ length: 48 }, (_, i) => [i, i % 2 ===0])),
  },
  {
    id: 3,
    name: 'C실',
    price: '10,000',
    image: '/practice-room 4.png',
    availableTimes: Object.fromEntries(Array.from({ length: 48 }, (_, i) => [i, i % 2 ===0])),
  },
];


export default function UserPractice() {
  const [likes, setLikes] = useState(0); // 좋아요 수 상태
  const [isLiked, setIsliked] = useState(false) // 좋아요 상태 (하트 이미지 전환)
  const navigate = useNavigate();

  const LikeClick = () => {
    if (isLiked) {
      setLikes(likes -1) //이미 좋아요 상태라면 취소
    } else {
      setLikes(likes +1) //아니라면 좋아요 추가
    }
    setIsliked(!isLiked); //좋아요 토굴
  }

  const MapClick = () => {
    window.open(
      'https://map.kakao.com/link/search/울산광역시 남구 대학로 123',
      '_blank'
    );
  };

  const BackClick = () => {
    navigate("/start"); //메인 페이지로 연결되도록 수정 필요함함
  };

  return (
    <>
    {/* 상단 연습실 이미지 */}
    <div className="top-practice-room">
      <img src="/practice-room 1.png" className="main-image"/>
      <img src ="/back-button.png" className='back-button' onClick={BackClick}/>
    </div>

    <div className="practice-room-container"> 
      {/* 연습실 정보 */}
      <div className="practice-room-info">

        <div className="title-and-like">
          <h2>가위 피아노</h2>

          <button className="like-button" onClick={LikeClick}>
            <img
              src={isLiked ? "full-hearted.png" : "empty-hearted.png"} // 좋아요 상태에 따라 이미지 변경
              className="heart-icon"
            />
            <span className="like-count">{likes}</span>
          </button>
        </div>

        <button className="practice-room-address" onClick={MapClick}>
          <img src="address-point.png" className="address-point-icon"/>
          <span className="address-text">울산광역시 남구 대학로 123-1</span>
          <img src="address-arrow.png" className="address-arrow-icon"/>
        </button> 
      </div> 

      {/*hash 맵
      ture false*/}

      {/* 연습실 정보 칸과 연습실 목록 사이의 간격 */}
      <div className="gap"></div>

      {/* 연습실 목록 */}
      {practiceRooms.map((room) => (
        <div key={room.id} className="practice-room">
          <img src={room.image} alt={room.name} className="practice-room-image" />

          <div className="time-graph-container">
            <div className="time-graph">
              <div className="time-container">
                {Array.from({ length: 24 }).map((_, index) => (
                  <div key={index} className="time-item">
                    {index}시
                  </div>
                ))}
              </div>

              <div className="graph-container">
                <div className="container">
                  <div style={{ borderTopLeftRadius: "23.09px", borderBottomLeftRadius: "23.09px" }}
                  className={`time-slot ${room.availableTimes[1] ? 'unavailable' : 'available'}`}/>
                  {/* <div className="time-graph-divider-white"/> */}
                </div>
                  {Array.from({length: 48}).slice(1,47).map((_, index) => (
                    index % 2 === 0 ? 
                    ( //짝수 일때 실행이 됨 검정색 선
                      <>
                        <div className="container">
                          <div
                            key={index}
                            className={`time-slot ${
                              room.availableTimes[index] ? 'unavailable' : 'available'
                            }`}/>
                          <div className="time-graph-divider-white"/>
                        </div>
                      </>
                    ) : ( //홀수 일때 실행이 됨 검정색 선
                      <>
                        <div className="container">
                          <div
                            key={index}
                            className={`time-slot ${
                              room.availableTimes[index] ? 'unavailable' : 'available'
                            }`}/>
                          <div className="time-graph-divider-black"/>
                        </div>
                      </>
                    )
                  ))}
                <div  style={{borderTopRightRadius: "23.09px", borderBottomRightRadius: "23.09px" }} 
                  className={`time-slot ${room.availableTimes[48] ? 'unavailable' : 'available'}`}/>
              </div>
          </div>
        </div>

          <div className='room-name-and-price'>
            <h3>{room.name}</h3>
            <h4>1시간</h4>
            <h5>{room.price}</h5>
            <h6>원</h6>
          </div>

          {/* 연습실 칸 사이 간격 */}
          <div className="gap"></div>
        </div>
      ))}
    </div>
    <div className='margin-bottom'></div>
    </>
  );
}