type View = 'week' | 'month' | 'day' | 'year'

type CurrDate = {
  date: number;
  month: number;
  year: number;
  monthText: string;
}

type DayDate = {
  day: number,
  month: number,
  year: number,
  color?: boolean,
  dayText?: string;
}
