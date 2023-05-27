import { weekDays } from "../../helpers/utils";

function MonthHelperView() {
  return (
    <div className="month-helper-row">
      {
        weekDays.map((day, dayIndex) => {
          const className = dayIndex === 0 ? 'sunday' : ''
          return (
            <div key={`month_day_${day}`} className={className}>{day}</div>
          )
        })
      }
    </div>
  );
}

export default MonthHelperView
