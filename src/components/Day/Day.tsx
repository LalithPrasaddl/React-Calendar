import { getHours } from '../../helpers/utils';
import './style.css';

function Day() {
  const hours = getHours();
  return (
    <div className="day-wrapper">
      <div>
        {
          hours.map((hour, hourIndex) => {
            return (
              <div className="day-hour-title" key={`hour_title_${hourIndex}_`}>
                <span>{hour.text}</span>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          hours.map((_, hourIndex) => {
            return (
              <div className="day-hour-content" key={`hour_content_${hourIndex}_`}>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Day
