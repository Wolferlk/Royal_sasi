import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Sidenav, Nav } from 'rsuite';
import { Dashboard, Group, Magic, GearCircle } from '@rsuite/icons/';

import { DashboardIcon, GroupIcon, MagicIcon, GearCircleIcon } from '@rsuite/icons/legacy';

const styles = {
  width: 240,
  display: 'inline-table',
  marginRight: 10
};

const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  return (
    <div style={styles}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>Dashboard</Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>User Group</Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced" icon={<Magic />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};

const App = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [openKeys, setOpenKeys] = useState(['3', '4']);
  const [expanded, setExpand] = useState(true);

  return (
    <>
      {[undefined, 'inverse', 'subtle'].map((appearance, index) => (
        <CustomSidenav
          key={index}
          appearance={appearance}
          activeKey={activeKey}
          openKeys={openKeys}
          onSelect={setActiveKey}
          onOpenChange={setOpenKeys}
          expanded={expanded}
          onExpand={setExpand}
        />
      ))}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
