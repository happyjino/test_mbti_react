import React , {useEffect} from "react";
// import {useState } from "react";
import { useNavigate} from "react-router-dom";
import TopNavigation2 from '../components/TopNavigation2.js';
// import ImageMap from "image-map";
// import ImageMapper from 'react-img-mapper';

const DogMbtiResult = () => {
    const navigate = useNavigate();

    const goDetail = () => {
        navigate('/DogExplanation');
    };
    const goTest = () => {
        navigate('/Question');
    };

    const dogResultTest = {
        idx:"dNum1",
        name:"미미", 
        type:"ctil", 
        typeEx:"모범견계의 엄친아형", 
        img:"assets/ffgg1.png",
        detail1:"30", 
        detail2:"50", 
        detail3:"90", 
        detail4: "70", 
        content: `CTIL 설명 ㅁㄴㅇㅁㄴㅇㅁㄴ
        ㅇㅁㄴㅇㅁㄴ ㅇㅁㄴㅇㅁㄴㅇ
        ㅁㄴㅇ ㅁㄴㅇ ㅁㄴ
        ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ ㅇㅁㄴ
        ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅀㅁㄴ
        ㅇㅀ ㄴㅇㅀㄴ
        ㅇㅀ ㅗㅇㄹ홍ㄹ홍ㅀ
        ㅗㅇㄹ홍ㄹ홍ㄹ호
        ㅇㄹ홍ㄹ홍ㄹ홍ㄹ호
        CTIL 설명 ㅁㄴㅇㅁㄴㅇㅁㄴ
        ㅇㅁㄴㅇㅁㄴ ㅇㅁㄴㅇㅁㄴㅇ
        ㅁㄴㅇ ㅁㄴㅇ ㅁㄴ
        ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ ㅇㅁㄴ
        ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅀㅁㄴ
        ㅇㅀ ㄴㅇㅀㄴ
        ㅇㅀ ㅗㅇㄹ홍ㄹ홍ㅀ
        ㅗㅇㄹ홍ㄹ홍ㄹ호
        ㅇㄹ홍ㄹ홍ㄹ홍ㄹ호`
    };

    // 강아지 mbti 결과
    const {idx,name,type,typeEx,img,detail1,detail2,detail3,detail4,content} = dogResultTest;

    // 프로그레스바 설정
    useEffect(() => {
        const progress_bar = document.getElementById("detail1");
        progress_bar.style.width = `${detail1}%`;
        progress_bar.style.backgroundColor = "#5C4CFF";
      }, [detail1]);
      useEffect(() => {
        const progress_bar = document.getElementById("detail2");
        progress_bar.style.width = `${detail2}%`;
        progress_bar.style.backgroundColor = "#0A9A4A";
      }, [detail2]);
      useEffect(() => {
        const progress_bar = document.getElementById("detail3");
        progress_bar.style.width = `${detail3}%`;
        progress_bar.style.backgroundColor = "#FB7237";
      }, [detail3]);
      useEffect(() => {
        const progress_bar = document.getElementById("detail4");
        progress_bar.style.width = `${detail4}%`;
        progress_bar.style.backgroundColor = "#5186F3";
      }, [detail4]);

    return ( 
        <>
            <div className="result-box">
                <TopNavigation2 />
                <p>MBTI 분석 완료!</p>
                <div className="result-top">
                    <p className="result-word" key={idx}>[{name}] 의 성격유형은 :</p>
                    <div className="result-container">
                        <div className="result-left">
                            <h3>{type.toUpperCase()}</h3>
                            <p>{typeEx}</p>
                            <div className="detail-img">
                                <img src={img} alt="dogDetail img"/>
                            </div>
                        </div>
                        <div className="result-right"> 
                            <ul>
                                <li>
                                    <p>활동성</p>
                                    <div className="progress">
                                        <div className="progress-bar" id="detail1">

                                        </div>
                                    </div>
                                    <p className="percent">{detail1}%</p>
                                </li>
                                <li>
                                    <p>관계성</p>
                                    <div className="progress">
                                        <div className="progress-bar" id="detail2">

                                        </div>
                                    </div>
                                    <p className="percent">{detail2}%</p>
                                </li>
                                <li>
                                    <p>야생성</p>
                                    <div className="progress">
                                        <div className="progress-bar" id="detail3">

                                        </div>
                                    </div>
                                    <p className="percent">{detail3}%</p>
                                </li>
                                <li>
                                    <p>의존성</p>
                                    <div className="progress">
                                        <div className="progress-bar" id="detail4">

                                        </div>
                                    </div>
                                    <p className="percent">{detail4}%</p>
                                </li>
                            </ul>
                        </div>
                    </div>                   
                </div>
                <div className="result-detail">
                    <div className="detail-top">
                        <h4>{type.toUpperCase()}</h4>
                        <p>{typeEx}</p>
                    </div>
                   <div className="detail-content">
                        <p>{content}</p>
                   </div>                  
                </div>
                <div className="mbti-all-explanation">
                    <button onClick={goDetail}>MBTI 설명 보러가기</button>
                </div>
                <div className="mbit-btn-group">
                    <ul>
                        <li>
                            <button>결과 공유하기</button>
                        </li>
                        <li>
                            <button onClick={goTest}>다시 테스트하기</button>
                        </li>
                    </ul>
                </div>
                <div className="share-box">
                <span className="material-symbols-outlined">forward</span>
                    <input defaultValue="https://naver.com"/>
                    <button>URL 복사</button>
                </div>
            </div>
        </>
    )
};

export default DogMbtiResult;