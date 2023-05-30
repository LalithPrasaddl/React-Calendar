export const weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

export const months = [{
  fullName: 'January',
  halfName: 'Jan',
  days: 31
}, {
  fullName: 'February',
  halfName: 'Feb',
  days: 0
}, {
  fullName: 'March',
  halfName: 'Mar',
  days: 31
},{
  fullName: 'April',
  halfName: 'Apr',
  days: 30
}, {
  fullName: 'May',
  halfName: 'May',
  days: 31
}, {
  fullName: 'June',
  halfName: 'Jun',
  days: 30
}, {
  fullName: 'July',
  halfName: 'Jul',
  days: 31
}, {
  fullName: 'August',
  halfName: 'Aug',
  days: 31
}, {
  fullName: 'September',
  halfName: 'Sep',
  days: 30
}, {
  fullName: 'October',
  halfName: 'Oct',
  days: 31
}, {
  fullName: 'November',
  halfName: 'Nov',
  days: 30
}, {
  fullName: 'December',
  halfName: 'Dec',
  days: 31
}]

export function getDaysInMonth({
  year,
  month
}: {
  year: number,
  month: number
}) {
  const index = month === -1 ? 11 : month;
  let days = months[index].days;
  if (days === 0) {
      if(year % 4 === 0) {
        days = 29;
      } else {
        days = 28;
      }
  }
  return days;
}

export function getDays({
  year,
  month
}: {
  year: number;
  month: number
}) {
  const days = [];
  const date = new Date(`${month + 1}/1/${year}`)
  const currMonthDays = getDaysInMonth({year, month})
  const prevMonthDays = getDaysInMonth({year, month: month - 1})
  const prevDays = prevMonthDays - date.getDay();
  for (let i = prevDays; i < prevMonthDays; i++) {
      days.push({
        day: i + 1,
        month: month - 1 === -1 ? 11 : month - 1,
        year: month - 1 === -1 ? year - 1 : year,
        color: true,
      })
  }
  for (let i = 0; i < currMonthDays; i++) {
      days.push({
        day: i + 1,
        month,
        year,
        color: false,
        dayText: i === 0 ? `${i + 1} ${months[month].halfName}` : null
      })
  }
  const remDays = 42 - days.length
  for (let i = 0; i < remDays; i++) {
    const nextMonth = month + 1 === 12 ? 0 : month + 1
      days.push({
        day: i + 1,
        month: nextMonth,
        year: month + 1 === 12 ? year + 1 : year,
        color: true,
        dayText: i === 0 ? `${i + 1} ${months[nextMonth].halfName}` : null
      })
  }
  const rows = [];
  let columns = []
  for (let i = 0; i < days.length; i++) {
      columns.push(days[i]);
      if(columns.length === 7) {
        rows.push(columns);
        columns = []
      }
  }
  return rows;
}

export function getHours() {
  const columns: any[] = [];
  for (let i = 0; i < 24; i++) {
      columns.push(i + 1);
  }
  return columns;
}


export function getTodaysDate() {
  const date = new Date();
  const month = date.getMonth();
  return {
    date: date.getDate(),
    month,
    year: date.getFullYear(),
    monthText: months[month].fullName
  }
}

export function getPrevNextDate({
  view,
  currDate,
  mode
}: {
  view: View;
  currDate: CurrDate;
  mode: 'prev' | 'next'
}) {
  const date: CurrDate = {...currDate}
  if(view === 'year') {
    date.year = mode === 'prev' ? (date.year - 1) : date.year + 1;
  }
  if(view === 'month') {
    date.month = mode === 'prev' ? (date.month - 1) : date.month + 1;
  }
  if(view === 'day') {
    date.date = mode === 'prev' ? (date.date - 1) : date.date + 1;
  }
  if(view === 'week') {
    date.date = mode === 'prev' ? (date.date - 7) : date.date + 7;
  }
  if(date.date <= 0) {
    const prevMonth = date.month === 0 ? 11 : date.month - 1;
    const prevMonthDays = getDaysInMonth({year: date.year, month: prevMonth})
    date.date = prevMonthDays + date.date;
    date.month -= 1;
  }
  if(date.date > getDaysInMonth({year: date.year, month: date.month})) {
    date.date = date.date - getDaysInMonth({year: date.year, month: date.month});
    date.month += 1
  }
  if(date.month === -1) {
    date.month = 11;
    date.year -= 1;
  }
  if(date.month === 12) {
    date.month = 0;
    date.year += 1;
  }
  date.monthText = months[date.month].fullName
  return date;
}
