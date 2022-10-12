import { useEffect, useState } from 'react';

import InputMinutesField from './InputMinutesField';
import ResetButton from './ResetButton';

import { timeState } from '../interface/timeState';

import '../css/Timer.css';

const Timer: React.FC = () => {
  const [state, setState] = useState<timeState>({
    minutes: 25,
    seconds: 0,
    isActive: false,
  });

  const minutePassed = () => {
    setState(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 }));
  };

  const reset = () => {
    setState(prev => ({
      ...prev,
      minutes: 25,
      seconds: 0,
      isActive: false,
    }));
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (state.isActive) {
      interval = setInterval(() => {
        setState(prev => ({ ...prev, seconds: prev.seconds - 1 }));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [state.isActive]);

  if (state.seconds === -1) minutePassed();

  if (state.seconds === 0 && state.minutes === 0) {
    reset();
  }

  return (
    <div className='timer'>
      <div>
        {state.minutes}mins {state.seconds}seconds
      </div>

      <InputMinutesField
        setState={setState}
        isActive={state.isActive}
        minutes={state.minutes}
      />

      <ResetButton reset={reset} />
    </div>
  );
};

export default Timer;
