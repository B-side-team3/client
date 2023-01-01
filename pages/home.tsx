/* eslint-disable no-plusplus */
import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import type SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const routineData = {
  deadline_count: 3,
  routine_data: [
    {
      startTime: "기상 후, 오전 6:30",
      label: "승리하는 아침을 만드는 다섯가지 의식",
      author: "팀 페리스",
      requiredTime: 35,
      totalRoutine: 8,
      restRoutine: 8,
    },
    {
      startTime: "출근 후, 오전 10:00",
      label: "첫 걸음을 뗄 수 있어야 진짜 아이디어다",
      author: "리처드 브랜슨",
      requiredTime: 35,
      totalRoutine: 8,
      restRoutine: 0,
    },
    {
      startTime: "",
      label: "세상에 나쁜 개는 없다",
      author: "강형욱",
      requiredTime: 35,
      totalRoutine: 8,
      restRoutine: 3,
    },
  ],
};

// 0 미완료
// 1 진행중
// 2 완료
const statusColor: { [key: string]: string } = {
  incomplete: "#F5313D",
  ongoing: "#F39200",
  completion: "#593FF4",
};
const todoData = [
  {
    time: "오전 6:30 . 기상 직후",
    data: [
      {
        status: "incomplete",
        todo: "강아지와 포옹하기",
      },
      {
        status: "incomplete",
        todo: "아침일기 쓰기",
      },
      {
        status: "ongoing",
        todo: "잠자리 정리",
      },
      {
        status: "incomplete",
        todo: "하나의 동작 반복하기",
      },
      {
        status: "incomplete",
        todo: "차 마시기",
      },
      {
        status: "incomplete",
        todo: "명상하기",
      },
      {
        status: "ongoing",
        todo: "강아지 물 바꾸기",
      },
      {
        status: "completion",
        todo: "강아지 밥주기",
      },
      {
        status: "completion",
        todo: "달리기를 시작할 장소로 이동하기",
      },
      {
        status: "completion",
        todo: "달리기",
      },
    ],
  },
  {
    time: "오전 10:00 . 출근 후",
    data: [
      {
        status: "incomplete",
        todo: "아이디어 적기",
      },
      {
        status: "incomplete",
        todo: "아이디어를 수행하기 위한 첫 번째 항목 두번째 항목 세 번째 항목",
      },
      {
        status: "incomplete",
        todo: "강아지와 산책하기",
      },
    ],
  },
];

const Home: NextPage = () => {
  const todayDate = new Date().getDate();
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [tab, setTab] = useState("routine");

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

  const changeTab = (e: any) => {
    if (e.target.classList[0] === "active") {
      return;
    }
    setTab(e.target.id);

    const parentElement = e.target.parentElement.children;
    const { length } = parentElement;
    for (let i = 0; i < length; i++) {
      parentElement[i].classList.remove("active");
    }
    (e.target as HTMLLIElement).classList.add("active");
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

      <div className="home-content">
        <ul className="category">
          <li className="active" id="routine" onClick={changeTab}>
            루틴별로 보기
          </li>
          <li id="todo" onClick={changeTab}>
            할 일별로 보기
          </li>
        </ul>
        {tab === "routine" ? (
          <ul className="category-routine">
            <p>
              며칠 후 종료되는 루틴이
              <span className="green_color">
                {routineData.deadline_count}개
              </span>
              있어요.
            </p>
            {routineData.routine_data.map(
              (
                {
                  startTime,
                  label,
                  author,
                  requiredTime,
                  totalRoutine,
                  restRoutine,
                },
                index,
              ) => (
                <ol key={`${index}th_routine_data`} className="routine_card">
                  {startTime && <li className="startTime">{startTime}</li>}
                  <li className="label">{label}</li>
                  <li className="author">{author}</li>
                  <li className="data_graph" />
                  <li className="complete_wrap">
                    <p className="required_time">{requiredTime}분</p>
                    <p className="complete">
                      {restRoutine === totalRoutine
                        ? "완료"
                        : `${restRoutine}/${totalRoutine}`}
                    </p>
                  </li>
                </ol>
              ),
            )}
          </ul>
        ) : (
          <ul className="category-to-do">
            {todoData.map(({ time, data }, index) => (
              <ol key={`${index}th_todo_data`}>
                <p className="time">{time}</p>
                <li className="todo_wrap">
                  {data.map(({ status, todo }, index) => (
                    <div key={`${index}_todo`} className="todo_card">
                      <div>
                        <span
                          className="status-icon"
                          style={{ backgroundColor: `${statusColor[status]}` }}
                        />
                        <span>{todo}</span>
                      </div>
                      <button className={status} />
                    </div>
                  ))}
                </li>
              </ol>
            ))}
          </ul>
        )}
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
  height: 100%;
  p,
  li {
    font-weight: 600;
  }

  .green_color {
    font-weight: 800;
    color: #48d74d;
  }
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
    cursor: pointer;
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

  .home-content {
    .category {
      display: flex;
      justify-content: center;
      cursor: pointer;
      border-bottom: 1px #aaaaaa solid;
      li {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%;
        height: 4rem;
        color: #aaaaaa;
        font-weight: 600;
        transition: all 0.5s;
        &.active {
          color: #48d74d;
        }
        &.active::before {
          opacity: 1;
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 6px;
          background-color: #48d74d;
          z-index: 1;
          opacity: 0;
          transition: all 0.5s;
        }
      }
    }

    .category-routine {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
      background-color: #f5f5f5;
      > p {
        position: relative;
        padding: 1rem;
        color: #444444;
        border: #ececec 1px solid;
        border-radius: 16px;
        cursor: pointer;
        background-color: #fff;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 1rem;
          width: 0.5rem;
          height: 0.5rem;
          border-color: transform;
          border-bottom: 2px solid #444444;
          border-right: 2px solid #444444;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }

      .routine_card {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 0 0.5rem;
        gap: 0.25rem;
        color: #444444;
        border: #ececec 1px solid;
        border-radius: 16px;
        background-color: #fff;
        li {
          padding: 0 1rem;
        }
        .startTime {
          padding: 1rem;
          border-bottom: 1px #ececec solid;
        }
        .label {
          font-size: 17px;
          padding-top: 1rem;
        }
        .author {
          color: #666666;
          font-size: 13px;
        }
        .data_graph {
          padding: 2rem 0 1rem;
        }
        .complete_wrap {
          display: flex;
          justify-content: space-between;
          .required_time {
            color: #888888;
          }
        }
      }
    }

    .category-to-do {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
      background-color: #f5f5f5;
      .time {
        padding: 0.5rem 0;
        color: #444444;
        font-weight: 500;
      }
      .todo_wrap {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .todo_card {
          position: relative;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background-color: #fff;
          border-radius: 16px;
          > div {
            display: flex;
            align-items: center;
            gap: 1rem;
            .status-icon {
              display: block;
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 0.5rem;
            }
          }
          > button {
            position: relative;
            width: 24px;
            height: 24px;
            border-radius: 24px;
            background-color: #ececec;
            &.incomplete {
              background-color: #48d74d;
            }
            &::before {
              content: "";
              display: block;
              position: absolute;
              margin-top: -2px;
              top: 50%;
              left: 50%;
              width: 10px;
              height: 6px;
              border-top: 2px #fff solid;
              border-right: 2px #fff solid;
              transform: translate(-50%, -50%) rotate(135deg);
            }
            &.ongoing::before {
              border-color: #aaaaaa;
            }
            &.completion::before {
              margin: 0 0 0 5px;
              width: 12px;
              height: 12px;
              border: 6px transparent solid;
              border-left: 10px #aaaaaa solid;
              transform: translate(-50%, -50%);
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
`;
export default Home;
