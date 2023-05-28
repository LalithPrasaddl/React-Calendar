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
  halfName: 'Jan'
}, {
  fullName: 'February',
  halfName: 'Feb'
}, {
  fullName: 'March',
  halfName: 'Mar'
},{
  fullName: 'April',
  halfName: 'Apr'
}, {
  fullName: 'May',
  halfName: 'May'
}, {
  fullName: 'June',
  halfName: 'Jun'
}, {
  fullName: 'July',
  halfName: 'Jul'
}, {
  fullName: 'August',
  halfName: 'Aug'
}, {
  fullName: 'September',
  halfName: 'Seb'
}, {
  fullName: 'October',
  halfName: 'Oct'
}, {
  fullName: 'November',
  halfName: 'Nov'
}, {
  fullName: 'December',
  halfName: 'Dec'
}]

export function getDays({

}) {
  const rows = [];
  let columns = []
  for (let i = 0; i < 42; i++) {
      columns.push(i);
      if(columns.length === 7) {
        rows.push(columns);
        columns = []
      }
  }
  return rows;
}
