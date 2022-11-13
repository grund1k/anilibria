import { NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { Schedule } from '../../types/schedule';
import { State } from '../../types/store';


export const getSchedule = (state: State): Schedule => state[NameSpace.Schedule].schedule;
export const getScheduleStatus = (state: State): string => state[NameSpace.Schedule].status;

export const useGetSchedule = () => useAppSelector(getSchedule);
export const useGetScheduleStatus = () => useAppSelector(getScheduleStatus);
