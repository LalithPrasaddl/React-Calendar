import { weekDays } from "../../helpers/utils";

function MonthHelperView() {
  return (
    <div className="month-helper-row">
      {
        weekDays.map((day, dayIndex) => {
          const className = dayIndex === 0 ? 'sunday' : ''
          return (
            <div key={`month_day_${day.fullName}`} className={className}>{day.halfName}</div>
          )
        })
      }
    </div>
  );
}

export default MonthHelperView
