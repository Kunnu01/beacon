import { FC } from 'react';

type Tab = {
  key: string;
  label: string;
  icon?: JSX.Element;
};

type ITabsProps = {
  tabs: Tab[];
  value?: string;
  onChange: (value: string) => void;
};

const Tabs: FC<ITabsProps> = ({ tabs, value, onChange }) => {
  return (
    <div className="border-b border-gray-200 mt-3">
      <nav className="flex justify-between space-x-2" aria-label="Tabs" role="tablist">
        {tabs.length &&
          tabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`
                py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap
                text-gray-500 hover:text-orange-600 focus:outline-none text-base
                ${
                  value === tab.key &&
                  `
                 border-orange-400 text-orange-500 border-b-orange-400
                `
                }
              `}
              role="tab"
              onClick={() => onChange(tab.key)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
      </nav>
    </div>
  );
};

export { Tabs };
