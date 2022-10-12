import { timeState } from './timeState';

export interface inputProps {
  setState: React.Dispatch<React.SetStateAction<timeState>>;
  isActive: boolean;
  minutes: number;
}
