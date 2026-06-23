import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

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
        <nav className="tabs is-boxed is-medium mb-5">
          <div className="tabs-list">
            {tabs.map(tab => (
              <NavLink
                key={tab.id}
                to={`/tabs/${tab.id}`}
                className="tab-link"
                activeClassName="is-active"
              >
                {tab.title}
              </NavLink>
            ))}
          </div>
        </nav>

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
