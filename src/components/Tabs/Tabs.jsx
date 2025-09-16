/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => onTabSelected(tab.id)}
            >
              <a href={`#tab-${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeContent.content}
      </div>
    </div>
  );
};
