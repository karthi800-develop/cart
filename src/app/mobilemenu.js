import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartOutlined,
    ContainerOutlined,
    DesktopOutlined, } from '@ant-design/icons';
    import Link from 'next/link';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link href='/'>Home</Link>, '/',  '' ,),
  getItem(<Link href='/game'>About Us</Link>, '/game',  '' ,),
  getItem(<Link href='/'>Service</Link>, '/s',  '' ,),
  getItem(<Link href='/'>Gallery</Link>, '/ss',  '' ,),
  getItem(<Link href='/'>Contact Us</Link>, '/sss',  '' ,),
];


const App = ({setOpen}) => {
  const onClick = (e) => {
    setOpen(false)
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width:'100%',
        border:'none'
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default App;