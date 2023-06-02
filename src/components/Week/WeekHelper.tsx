import { weekDays, getWeekDates, getTodaysDate } from "../../helpers/utils";

function WeekHelperView({
  currDate
}: {
  currDate: CurrDate
}) {
  const weekDates = getWeekDates(currDate);
  const today = getTodaysDate()
  return (
    <div className="week-helper-row">
      <div className="week-time"></div>
      {
        weekDays.map((day, dayIndex) => {
          let dateClass = 'week-helper-row-date';
          const date = weekDates[dayIndex]
          if(date.year === today.year && date.month === today.month && date.day === currDate.date) {
            dateClass += ' today';
          }
          return (
            <div key={`week_day_${day}`}>
              <span>{day}</span>
              <span className={dateClass}>{date.day}</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default WeekHelperView
