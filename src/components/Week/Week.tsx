import { useEffect, useState } from 'react';
import { getHours, getTodaysDate, getWeekDates } from '../../helpers/utils';
import './style.css';

function WeekView({
  currDate
}: {
  currDate: CurrDate
}) {
  const boxes = getBoxes();
  const hours = getHours();
  const [today, setToday] = useState(getTodaysDate());
  const weekDates = getWeekDates(currDate);

  useEffect(() => {
    const timeout = setInterval(() => {
      setToday(getTodaysDate())
    }, 60000)
    return () => {
      clearInterval(timeout)
    }
  }, [])

  function getBoxes() {
    const rows: any[] = [];
    for (let i = 0; i < 7; i++) {
        rows.push(i + 1)
    }
    return rows;
  }

  function isTodaysWeek() {
    let isTodaysWeek = false;
    let time = 0;
    let timeOffset = 0
    for (let i = 0; i < weekDates.length; i++) {
      const item = weekDates[i];
      if(item.day === today.date && item.month === today.month && item.year === today.year) {
        isTodaysWeek = true;
        break;
      }
    }
    if (isTodaysWeek) {
      time = (today.hours + Math.fround(today.mins / 60)) * 8 + 5;
      timeOffset = today.day * ((100 / 7.5)) + 1.8;
    }
    return {isTodaysWeek, time, timeOffset};
  }
  const isTodayWeek = isTodaysWeek();
  return (
    <div className="week">
      <div className="all-day-line">
        <span>all-day</span>
      </div>
      {
        isTodayWeek.isTodaysWeek &&
        <div className="curr-time-red-line" style={{
          top: `${isTodayWeek.time}vh`
        }}>
        <span>{[[today.hours > 12 ? today.hours - 12 : today.hours, today.mins < 10 ? `0${today.mins}` : today.mins].join(':'), today.hours > 12 ? 'PM' : 'AM'].join(' ')}</span>
          <div style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            backgroundColor: 'rgb(252, 61, 57)',
            borderRadius: '50%',
            top: '-6px',
            left: `${isTodayWeek.timeOffset}vw`
          }}>

          </div>
        </div>
      }
      <div className="week-time">
        <div className="week-hour-title week-full-day" key={`hour_title_${-1}_`}>
          <span>12 AM</span>
        </div>
        {
          hours.map((hour, hourIndex) => {
            return (
              <div className="week-hour-title" key={`hour_title_${hourIndex}_`}>
                <span>{hour.text}</span>
              </div>
            )
          })
        }
      </div>
      {
        boxes.map((_, boxIndex) => {
          const className = 'week-column';
          let weekFullday = 'week-hour week-full-day';
          if(boxIndex === 0) {
            weekFullday += ' sunday';
          }
          return (
            <div key={`row_${boxIndex}`} className={className}>
              <div className={weekFullday} key={`hour_${-1}_row_${-1}`}></div>
                {
                  hours.map((_, hourIndex) => {
                    let className = 'week-hour';
                    if(boxIndex === 0) {
                      className += ' sunday';
                    }
                    return (
                      <div className={className} key={`hour_${hourIndex}_row_${boxIndex}`}></div>
                    )
                  })
                }
            </div>
          )
        })
      }
    </div>
  )
}

export default WeekView
