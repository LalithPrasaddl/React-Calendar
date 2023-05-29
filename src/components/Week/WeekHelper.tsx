import { weekDays } from "../../helpers/utils";

function WeekHelperView() {
  return (
    <div className="week-helper-row">
      <div className="week-time"></div>
      {
        weekDays.map((day, dayIndex) => {
          const className = dayIndex === 0 ? 'sunday' : ''
          return (
            <div key={`week_day_${day}`} className={className}><span>{day}</span></div>
          )
        })
      }
    </div>
  );
}

export default WeekHelperView
