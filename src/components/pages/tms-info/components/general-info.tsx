import { Disclosure } from '@headlessui/react';
import { DisclosuereHeader } from './disclosure-header';
import { TextField } from '../../../ui';
import { FC, useState } from 'react';

type IGeneralInfoProps = {
  label: string;
  icon: JSX.Element;
};

const GeneralInfo: FC<IGeneralInfoProps> = ({ label, icon }) => {
  const [isEdit, enableEditMode] = useState(false);
  const toggleEditMode = () => enableEditMode(!isEdit);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosuereHeader label={label} icon={icon} open={open} toggleEdit={toggleEditMode} />
          <Disclosure.Panel className="pt-3">
            <TextField label="Name" disabled={!isEdit} placeholder="e.g. Harvey Rodriguez & Co" />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export { GeneralInfo };
