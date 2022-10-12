import { inputProps } from '../interface/inputMinutesFieldProps';

const InputMinutesField: React.FC<inputProps> = ({
  setState,
  isActive,
  minutes,
}) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      minutes: { value: string };
    };

    setState(prev => ({
      ...prev,
      isActive: !prev.isActive,
      minutes: Number(target.minutes.value) || minutes,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className='minutes-form__container'>
      <label htmlFor='minutes'>Set your own minutes:</label>
      <input
        placeholder='Enter your minutes here'
        type='number'
        name='minutes'
        id='minutes'
      />
      <button type='submit'>{isActive ? 'Pause' : 'Start'}</button>
    </form>
  );
};

export default InputMinutesField;
