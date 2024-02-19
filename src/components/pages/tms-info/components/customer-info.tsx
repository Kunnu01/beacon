import { Disclosure } from '@headlessui/react';
import { DisclosuereHeader } from './disclosure-header';
import { TextField } from '../../../ui';
import { useState } from 'react';
import { RiUserSmileLine } from 'react-icons/ri';

const CustomerInfo = () => {
  const [isEdit, enableEditMode] = useState(false);

  const toggleEditMode = () => enableEditMode(!isEdit);

  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <DisclosuereHeader
            icon={<RiUserSmileLine />}
            label="Customer"
            open={open}
            toggleEdit={toggleEditMode}
          />
          <Disclosure.Panel className="pt-3 flex-col space-y-6">
            <TextField disabled={!isEdit} label="Name" placeholder="e.g. Harvey Rodriguez & Co" />
            <TextField disabled={!isEdit} label="Address" placeholder="e.g. 37 Jade Mountain, Apr. 2" />
            <div className="flex justify-between space-x-4">
              <TextField disabled={!isEdit} label="City" placeholder="City" />
              <TextField disabled={!isEdit} label="State" placeholder="State" />
            </div>
            <div className="flex justify-between space-x-4">
              <TextField disabled={!isEdit} label="Zip" type="number" placeholder="e.g. 89381-6757" />
              <TextField disabled={!isEdit} label="Code" type="number" placeholder="Code" />
            </div>
            <TextField disabled={!isEdit} label="Contact" placeholder="e.g. harvey Rodriguez" />
            <TextField disabled={!isEdit} label="Phone" type="number" placeholder="Phone" />
            <TextField disabled={!isEdit} label="Email" type="email" placeholder="example@gmail.com" />
            <TextField disabled={!isEdit} label="Ref number" type="number" placeholder="Ref number" />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export { CustomerInfo };
