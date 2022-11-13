import { NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { State } from '../../types/store';
import { Titles } from '../../types/title';


export const getChanges = (state: State): Titles => state[NameSpace.Changes].changes;
export const getChangesStatus = (state: State): string => state[NameSpace.Changes].status;

export const useGetChanges = () => useAppSelector(getChanges);
export const useGetChangesStatus = () => useAppSelector(getChangesStatus);
