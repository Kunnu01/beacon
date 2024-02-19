import { FC } from 'react';

type ITextFieldProps = {
  type?: 'text' | 'email' | 'number';
  label?: string;
  placeholder?: string;
  startAdornment?: JSX.Element;
  disabled?: boolean;
};

const TextField: FC<ITextFieldProps> = ({ type = 'text', placeholder, startAdornment, label, disabled }) => {
  return (
    <div>
      {label && <span className="text-gray-600 text-base">{label}</span>}
      <div className="relative my-2 rounded-md shadow-sm">
        {startAdornment && (
          <div className="pointer-events-none peer-disabled:opacity-50 peer-disabled:pointer-events-none absolute inset-y-0 flex items-center px-3">
            <span className="text-gray-500">{startAdornment}</span>
          </div>
        )}
        <input
          type={type}
          disabled={disabled}
          className={`block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 text-base
            ring-gray-300 placeholder:text-gray-500 placeholder:text-base
            disabled:pointer-events-none appearance-none focus:outline-none
            focus:ring-2 focus:ring-orange-400
            ${startAdornment ? 'pl-9' : 'pl-2'}
          `}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export { TextField };
