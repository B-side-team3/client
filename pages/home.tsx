/* eslint-disable no-plusplus */
import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import type SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home: NextPage = () => {
  const todayDate = new Date().getDate();
  const [swiper, setSwiper] = useState<SwiperCore>();

  const clickDate = (date: number) => {
    (swiper as SwiperCore).slideTo(date - 1, 500, false);
  };

  const getThisMounth = () => {
    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth() + 1;
    const lastDay = new Date(thisYear, thisMonth, 0).getDate();
    const thisMonthDays = [];
    const days = ["일", "월", "화", "수", "목", "금", "토"];

    for (let i = 1; i <= lastDay; i++) {
      thisMonthDays.push(
        <SwiperSlide key={i} onClick={() => clickDate(i)}>
          <ol>
            <li className="day">{days[i % 7]}</li>
            <li className="date">{i}</li>
          </ol>
        </SwiperSlide>,
      );
    }

    return thisMonthDays;
  };

  return (
    <HomeWrap>
      <div className="title-wrap">
        <h3>나의 루틴</h3>
      </div>

      <div className="date-wrap">
        <Swiper
          className="date"
          slidesPerView={7}
          centeredSlides
          initialSlide={todayDate - 1}
          onSwiper={swiper => setSwiper(swiper as SwiperCore)}
        >
          {getThisMounth()}
        </Swiper>
      </div>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin: 0 auto;
  width: 100%;
  max-width: 20rem;
  height: 100%;
  .title-wrap {
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 1.25rem;
      color: #444;
    }
  }
  .date-wrap {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 1rem;
    .date {
      width: 100%;
      height: 6rem;
      .swiper-slide {
        transition: all 0.5s;
        .date {
          transition: all 0.25s;
          color: #d9d9d9;
        }
      }
      .swiper-slide-prev,
      .swiper-slide-next {
        .date {
          color: #000;
        }
      }
      .swiper-slide-active {
        .date {
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 2rem;
            height: 2rem;
            border-radius: 2rem;
            background: #48d74d;
            z-index: -1;
          }
          color: #fff;
        }
      }
      li {
        position: relative;
        width: 3rem;
        height: 3rem;
        font-size: 1.0625rem;
        line-height: 3rem;
        text-align: center;
      }
    }
  }
`;
export default Home;
