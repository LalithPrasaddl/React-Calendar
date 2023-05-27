import './style.css';

function WeekView() {
  function getHours() {
    const columns: any[] = [];
    for (let i = 0; i < 24; i++) {
        columns.push(i + 1);
    }
    return columns;
  }
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
      <div className="week-time"></div>
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
