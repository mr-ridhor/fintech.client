// TextInputField.tsx

import  { FC, InputHTMLAttributes, ChangeEvent } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({ label, error, value, onChange, ...props }) => {
  return (
    <div className={`space-y-1 ${error ? 'has-error' : ''}`}>
      <p>{label}:</p>
      <input type="text" value={value} onChange={onChange} {...props} className='h-8 w-full p-2 outline-none rounded-md' />
      {error && <div className="text-red-400">{error}</div>}
    </div>
  );
};

export default TextInput;
