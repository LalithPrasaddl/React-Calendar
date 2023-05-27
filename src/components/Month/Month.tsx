import './style.css';

function MonthView() {
  function getBoxes() {
    const rows: any[] = [];
    let column: number[] = [];
    for (let i = 0; i < 42; i++) {
        column.push(i + 1);
        if(column.length === 7) {
          rows.push(column)
          column = []
        }
    }
    return rows;
  }
  const boxes = getBoxes()
  return (
    <div>
      {
        boxes.map((row, rowKey) => {
          return (
            <div className="month-row" key={`row_${rowKey}`}>
              {
                row.map((column: number, colIndex: number) => {
                  const colClassName = colIndex === 0 ? 'sunday' : ''
                  return (
                    <div className={colClassName} key={`column_${rowKey}_${colIndex}`}>{column}</div>
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
