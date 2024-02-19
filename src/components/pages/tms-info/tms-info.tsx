import { GeneralInfo, CustomerInfo } from './components';
import { RiBillLine } from 'react-icons/ri';
import { IoCubeOutline, IoStarOutline, IoPaperPlaneOutline } from 'react-icons/io5';

const TMSInfo = () => {
  const headers = [
    {
      label: 'Bill To',
      icon: <RiBillLine />,
    },
    {
      label: 'Pick Up',
      icon: <IoCubeOutline />,
    },
    {
      label: 'Consignee',
      icon: <IoStarOutline />,
    },
    {
      label: 'Carrier',
      icon: <IoPaperPlaneOutline />,
    },
  ];

  return (
    <div>
      <CustomerInfo />
      <hr className="my-3" />
      {headers.map(h => (
        <div key={h.label}>
          <GeneralInfo label={h.label} icon={h.icon} />
          <hr className="my-3" />
        </div>
      ))}
      <button className="w-full py-4 bg-orange-500/75 mt-8 rounded-2xl text-white text-center text-xl">Confirm</button>
    </div>
  );
};

export { TMSInfo };
