import { FC, SelectHTMLAttributes, ChangeEvent, useState } from 'react';
import ErrorMessage from './InputError';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
  months: { value: string; label: string; days: { value: number; label: number }[] }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: FC<SelectFieldProps> = ({ label, options, error, months, onChange, ...props }) => {
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>('');
  
  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
    onChange && onChange(event);
  };

  return (
    <div className={`h-8 outline-none ${error ? 'has-error' : ''}`}>
      <select {...props} onChange={handleMonthChange} className='h-full border rounded-md w-32'>
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedMonth && (
        <select {...props} className='h-full border rounded-md w-32' defaultValue="">
          <option value="" disabled hidden>
            Select Day
          </option>
          {months.find((month) => month.value === selectedMonth)?.days.map((day) => (
            <option key={day.value} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>
      )}

      {/* <ErrorMessage error={`${error}`} /> */}
    </div>
  );
};

export default SelectField;
