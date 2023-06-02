import { getDays, getTodaysDate } from '../../helpers/utils';
import './style.css';

function MonthView({
  currDate
}: {
  currDate: CurrDate
}) {
  const boxes = getDays({
    year: currDate.year,
    month: currDate.month
  })
  const today = getTodaysDate()
  return (
    <div className="month-wrapper">
      {
        boxes.map((row, rowKey) => {
          return (
            <div className="month-row" key={`row_${rowKey}`}>
              {
                row.map((column: any, colIndex: number) => {
                  let colClassName = colIndex === 0 ? 'sunday' : '';
                  let todayClass = currDate.year === today.year && column.month === today.month && column.day === currDate.date ? 'today' : ''
                  if(column.color) {
                    colClassName += ' color-sunday';
                  }
                  return (
                    <div className={colClassName} key={`column_${rowKey}_${colIndex}`}>
                      <span className={todayClass}>{column.dayText || column.day}</span>
                      </div>
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

export default MonthView
