import { getDays, months, weekDays } from "../../helpers/utils";

import './style.css';

function Year() {
  function getMonths() {
    const rows = [];
    let columns = [];
    for (let i = 0; i < months.length; i++) {
        columns.push(months[i]);
        if(columns.length === 4) {
          rows.push(columns);
          columns = []
        }
    }
    return rows;
  }
  const rowCols = getMonths();
  return (
    <div className="year-wrapper">
      {
        rowCols.map((row, rowIndex) => {
          return (
            <div key={`row_${rowIndex}`} className="year-row">
              {
                row.map((col) => {
                  const days = getDays({});
                  return (
                    <div key={col.fullName}>
                      <div className="year-row-month-name">{col.fullName}</div>
                      <div className="week-days-row">
                        {
                          weekDays.map((item) => {
                            return (
                              <div>{item.charAt(0)}</div>
                            )
                          })
                        }
                      </div>
                      <div>
                        {
                          days.map((dayRow, dayRowIndex) => {
                            return (
                              <div key={`day_row_${dayRowIndex}`} className="year-day-row">
                                {
                                  dayRow.map((dayCol) => {
                                    return (
                                      <div>{dayCol + 1}</div>
                                    )
                                  })
                                }
                              </div>
                            )
                          })
                        }
                      </div>
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

export default Year
