import { FC } from 'react';

type IBadgeProps = {
  text: string;
  rounded?: 'full' | 'md';
  startAdornment?: JSX.Element;
} & React.ComponentProps<'div'>;

const Badge: FC<IBadgeProps> = ({ text, rounded = 'full', startAdornment, className, ...props }) => {
  return (
    <div
      className={`px-2
        flex
        border
        rounded-${rounded}
        ${className}
      `}
      {...props}
    >
      {startAdornment && (
        <div className="flex mr-1 items-center">
          <span className="sm:text-sm">{startAdornment}</span>
        </div>
      )}
      <span className="font-normal text-base">{text}</span>
    </div>
  );
};

export { Badge };
