import React from 'react';

interface prop {
  reset: (e: React.FormEvent) => void;
}

const ResetButton: React.FC<prop> = ({ reset }) => {
  return (
    <button type='button' onClick={reset}>
      Reset
    </button>
  );
};

export default ResetButton;
