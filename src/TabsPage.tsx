import React from 'react';
import { useParams } from 'react-router-dom';

import { Tabs, Tab } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs tabs={tabs} selectedTabId={tabId} />

        <div className="box has-background-white-ter p-5">
          {selectedTab ? (
            <p className="title is-4 has-text-grey-darker">
              {selectedTab.content}
            </p>
          ) : (
            <p className="title is-4 has-text-grey-light">
              Please select a tab
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
