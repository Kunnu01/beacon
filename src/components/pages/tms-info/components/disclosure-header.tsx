import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { FC } from 'react';

type IDisclosureHeader = {
  open: boolean;
  label: string;
  icon?: JSX.Element;
  toggleEdit: () => void;
};

const DisclosuereHeader: FC<IDisclosureHeader> = ({ open, label, icon, toggleEdit }) => {
  const handleOnEditClick = (e: any) => {
    e.stopPropagation();
    toggleEdit();
  };

  return (
    <Disclosure.Button className="flex w-full items-center justify-between py-2">
      <div className="text-xl flex items-center font-semibold">
        <div className='mr-2'>{icon}</div>
        {label}
        <button className="ml-2 text-orange-500" onClick={handleOnEditClick}>
          Edit
        </button>
      </div>
      <ChevronUpIcon
        className={`
        rounded-full
        ${open ? 'text-white bg-orange-500' : 'rotate-180 transform bg-orange-200 border-2 text-orange-500 border-orange-500'} h-7 w-7`}
      />
    </Disclosure.Button>
  );
};

export { DisclosuereHeader };
