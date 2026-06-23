import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import {
  Tabs as ReactTabs,
  TabList,
  TabPanel,
} from 'react-tabs';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTabId?: string;
}

interface CustomTabProps extends Omit<LinkProps, 'to'> {
  selected?: boolean;
  selectedClassName?: string;
  disabled?: boolean;
  disabledClassName?: string;
  to: string;
}

// CustomTab component wraps Link and sets tabsRole so react-tabs recognizes it
const CustomTab: React.FC<CustomTabProps> & { tabsRole?: string } = ({
  children,
  selected,
  selectedClassName,
  disabled,
  disabledClassName,
  to,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={`tab-link ${selected ? 'is-active' : ''}`}
      {...props}
    >
      <li className={selected ? 'is-active' : ''}>
        <span>{children}</span>
      </li>
    </Link>
  );
};

// Set the static property expected by react-tabs library
CustomTab.tabsRole = 'Tab';

export const Tabs: React.FC<TabsProps> = ({ tabs, selectedTabId }) => {
  const selectedIndex = tabs.findIndex(tab => tab.id === selectedTabId);
  const activeIndex = selectedIndex >= 0 ? selectedIndex : 0;

  return (
    <div className="tabs is-boxed is-medium mb-5">
      <ReactTabs selectedIndex={activeIndex} onSelect={() => {}}>
        <TabList className="tabs-list">
          {tabs.map(tab => (
            <CustomTab
              key={tab.id}
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </CustomTab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} />
        ))}
      </ReactTabs>
    </div>
  );
};

Tabs.defaultProps = {
  selectedTabId: '',
};
