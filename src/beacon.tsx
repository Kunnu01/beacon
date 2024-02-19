import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { IoInformationCircle, IoInformationCircleOutline, IoCodeSlashOutline } from 'react-icons/io5';
import { TextField, Badge, Tabs } from './components/ui';
import { data } from './data';
import { Banner, TMSInfo } from './components/pages';
import { HiOutlineTruck } from 'react-icons/hi2';
import { GrSchedule } from 'react-icons/gr';

const ID = 27658930;

const Beacon = () => {
  const infoData = data.find(({ id }) => id === ID);

  const [activeTab, setActiveTab] = useState('tms');

  const tabs = [
    {
      label: 'TMS Info',
      key: 'tms',
      icon: <HiOutlineTruck />,
    },
    {
      label: 'Scheduling Info',
      key: 'scheduling',
      icon: <GrSchedule />,
    },
    {
      label: 'Labels',
      key: 'labels',
      icon: <IoCodeSlashOutline />,
    },
  ];

  return (
    <div>
      <div className="bg-gray-800 h-14 p-2 flex items-center justify-between">
        <img
          src="https://assets-global.website-files.com/62b67316c53c9156aa2cc271/659cb08c89184f45334dddad_beacon-logo-picture-div.png"
          className="m-3 h-5"
          alt="Beacon logo"
        />
        <IoMdClose color="#fff" size={24} />
      </div>
      <div className="p-4">
        <TextField startAdornment={<CiSearch size={20} />} placeholder="Search" />
        <h1 className="text-xl my-5">
          Load PRO
          <span className="text-orange-500 underline underline-offset-2 decoration-1"> #{ID}</span>
        </h1>
        {infoData?.labels.length && (
          <div className="flex justify-between">
            <div className="flex items-center text-base">
              Labels
              <IoInformationCircleOutline className="ml-1 text-orange-600" />
            </div>
            <div className="flex">
              {infoData.labels.map(label => (
                <Badge key={label} text={label} className="ml-1 text-gray-600" />
              ))}
            </div>
          </div>
        )}
        {infoData?.status && (
          <div className="flex justify-between mt-4">
            <div className="flex items-center text-base">Status</div>
            <Badge
              text={infoData.status}
              rounded="md"
              className="bg-red-100 text-orange-600"
              startAdornment={<IoInformationCircle className="text-orange-600" />}
            />
          </div>
        )}
        <Banner />
        <Tabs tabs={tabs} value={activeTab} onChange={v => setActiveTab(v)} />
        <div className="mt-3">{activeTab === 'tms' && <TMSInfo />}</div>
      </div>
    </div>
  );
};

export { Beacon };
