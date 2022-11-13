import { Titles } from './title';

export type ScheduleItem = {
  day: number,
  list: Titles,
}

export type Schedule = ScheduleItem[]
