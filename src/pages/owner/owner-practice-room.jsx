import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./owner-practice-room.css";
import { useDropzone } from "react-dropzone";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

export default function OwnerPractice() {
    const [likes, setLikes] = useState(0); // 좋아요 수 상태
    const [isLiked, setIsliked] = useState(false); // 좋아요 상태 (하트 이미지 전환)
    const [roomName, setRoomName] = useState(""); // 룸명 상태
    const [roomPrice, setRoomPrice] = useState(""); // 시간당 이용 가격 상태
    const [previewImg, setPreviewImg] = useState("/practice-room 3.png"); // 연습실 기본 이미지
    const [img, setImg] = useState(null); // 연습실 기본 이미지
    const navigate = useNavigate();

    const LikeClick = () => {
        if (isLiked) {
            setLikes(likes - 1); //이미 좋아요 상태라면 취소
        } else {
            setLikes(likes + 1); //아니라면 좋아요 추가
        }
        setIsliked(!isLiked); //좋아요 토굴
    };

    const MapClick = () => {
        window.open(
            "https://map.kakao.com/link/search/울산광역시 남구 대학로 123",
            "_blank"
        );
    };

    const BackClick = () => {
        navigate("/start"); //메인 페이지로 연결되도록 수정 필요함함
    };

    const handleAddRoom = () => {
        if (!roomName || !roomPrice) {
            alert("룸명과 가격을 모두 입력해주세요.");
            return;
        }

        setRoomName(""); // 입력 필드 초기화
        setRoomPrice(""); // 입력 필드 초기화

        // // TODO : 아래 부터 추가된 코드
        // // firebase에 이미지 업로드 완료시 알림
        // uploadImg(img).then((url) => {
        //     alert(
        //         `룸이 추가되었습니다!
        //     \n룸명: ${roomName}
        //     \n시간당 이용 가격: ${roomPrice}원
        //     \n이미지 Url: ${url}
        //     `
        //     );
        //     console.log(url); // TODO : 삭제할 것
        //     setRoomName(""); // 입력 필드 초기화
        //     setRoomPrice(""); // 입력 필드 초기화
        // });
    };

    // // firebase에 이미지 저장하는 함수
    // const uploadImg = (file) => {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             const storage = getStorage(app);
    //             const fileName = `zic/test/${
    //                 file.name
    //             }_${new Date().getTime()}`;
    //             const storageRef = ref(storage, fileName);
    //             const uploadTask = uploadBytesResumable(storageRef, file);

    //             uploadTask.on(
    //                 "state_changed",
    //                 (snapshot) => {
    //                     const progress =
    //                         (snapshot.bytesTransferred / snapshot.totalBytes) *
    //                         100;
    //                     console.log(progress);
    //                 },
    //                 (error) => {
    //                     alert("Image Upload Failed");
    //                     reject(error);
    //                 },
    //                 async () => {
    //                     try {
    //                         const url = await getDownloadURL(
    //                             uploadTask.snapshot.ref
    //                         );
    //                         resolve(url);
    //                     } catch (error) {
    //                         reject(error);
    //                     }
    //                 }
    //             );
    //         } catch (error) {
    //             alert("Image Upload Failed");
    //             reject(error);
    //         }
    //     });
    // };

    // // input에 이미지를 넣을 경우 미리보기 url을 변경하는 함수
    // const handleImgChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues((prevValues) => ({
    //         ...prevValues,
    //         [name]: value,
    //     }));

    //     if (e.target.name === "imgUrl") {
    //         setPreviewImg(e.target.value);
    //     }
    // };

    // // 이미지 Drop 시 실행
    // const onDrop = (acceptedFiles) => {
    //     const reader = new FileReader();
    //     const file = acceptedFiles;

    //     if (file) {
    //         // 이미지 파일을 읽어 setImg로 저장
    //         reader.readAsDataURL(file[0]); // img 파일을 base64로 인코딩
    //         setImg(file[0]);
    //     }

    //     reader.onload = (e) => {
    //         // onDrop되면 preview 되게 처리, 기존 이미지 url 정보를 공백처리
    //         setPreviewImg(reader.result);
    //         document.getElementsByName("imgUrl")[0].value = "";
    //     };
    // };

    // const { getRootProps, getInputProps } = useDropzone({ onDrop }); // html 컴포넌트와 연결

    return (
        <>
            {/* 상단 연습실 이미지 */}
            <div className="top-practice-room">
                <img src="/practice-room 1.png" className="main-image" />
                <img
                    src="/back-button.png"
                    className="back-button"
                    onClick={BackClick}
                />
            </div>

            <div className="practice-room-container">
                {/* 연습실 정보 */}
                <div className="practice-room-info">
                    <div className="title-and-like">
                        <h2>가위 피아노</h2>

                        <button className="like-button" onClick={LikeClick}>
                            <img
                                src={
                                    isLiked
                                        ? "full-hearted.png"
                                        : "empty-hearted.png"
                                } // 좋아요 상태에 따라 이미지 변경
                                className="heart-icon"
                            />
                            <span className="like-count">{likes}</span>
                        </button>
                    </div>

                    <button
                        className="practice-room-address"
                        onClick={MapClick}
                    >
                        <img
                            src="address-point.png"
                            className="address-point-icon"
                        />
                        <span className="address-text">
                            울산광역시 남구 대학로 123-1
                        </span>
                        <img
                            src="address-arrow.png"
                            className="address-arrow-icon"
                        />
                    </button>
                </div>

                {/*hash 맵 ture false*/}

                {/* 연습실 정보 칸과 연습실 목록 사이의 간격 */}
                <div className="gap"></div>

                {/* 대여자 연습실 등록 UI */}
                <div className="add-room-container">
                    {/* TODO : 추가 코드 */}
                    {/* <div {...getRootProps()}>
                        <img
                            src={previewImg}
                            alt="Practice Room"
                            className="room-image"
                        />
                        <input
                            multiple={false}
                            name="imgUrl"
                            {...getInputProps()}
                        />
                    </div> */}
                    <img
                        src={previewImg}
                        alt="Practice Room"
                        className="room-image"
                    />

                    <div className="add-practice-room-info">
                        <label htmlFor="room-name" className="label">
                            룸명
                        </label>
                        <div className="name-input-container">
                            <input
                                type="text"
                                id="room-name"
                                value={roomName}
                                onChange={(e) => setRoomName(e.target.value)}
                                placeholder="룸명을 입력해 주세요."
                                className="name-input"
                            />
                        </div>

                        <label htmlFor="room-price" className="label">
                            시간 당 이용 가격
                        </label>
                        <div className="price-input-container">
                            <input
                                type="text"
                                id="room-price"
                                value={roomPrice}
                                onChange={(e) => setRoomPrice(e.target.value)}
                                className="price-input"
                                placeholder="00,000"
                                inputMode="numeric"
                            />
                            <span className="currency">원</span>
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <button className="stop-room-button">이용중지</button>
                        <button
                            className="add-room-button"
                            onClick={handleAddRoom}
                        >
                            + 룸 추가하기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
