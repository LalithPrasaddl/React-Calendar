import { getDays } from '../../helpers/utils';
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
  return (
    <div className="month-wrapper">
      {
        boxes.map((row, rowKey) => {
          return (
            <div className="month-row" key={`row_${rowKey}`}>
              {
                row.map((column: any, colIndex: number) => {
                  let colClassName = colIndex === 0 ? 'sunday' : ''
                  if(column.color) {
                    colClassName += ' color-sunday';
                  }
                  return (
                    <div className={colClassName} key={`column_${rowKey}_${colIndex}`}>{column.dayText || column.day}</div>
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
