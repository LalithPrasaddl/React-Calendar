import { getHours } from '../../helpers/utils';
import './style.css';

function WeekView() {
  function getBoxes() {
    const rows: any[] = [];
    for (let i = 0; i < 7; i++) {
        rows.push(i + 1)
    }
    return rows;
  }
  const boxes = getBoxes()
  const hours = getHours();
  return (
    <div className="week">
      <div className="week-time">
      {
        hours.map((hour, hourIndex) => {
          return (
            <div className="week-hour-title" key={`hour_title_${hourIndex}_`}>
              <span>{hour} AM</span>
            </div>
          )
        })
      }
      </div>
      {
        boxes.map((_, boxIndex) => {
          let className = 'week-column';
          className += boxIndex === 0 ? ' sunday' : '';
          return (
            <div key={`row_${boxIndex}`} className={className}>
                {
                  hours.map((hour, hourIndex) => {
                    return (
                      <div className="week-hour" key={`hour_${hourIndex}_row_${boxIndex}`}>{boxIndex} {hour}</div>
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
