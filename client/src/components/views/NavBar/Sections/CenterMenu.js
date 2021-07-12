import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item>
      <input type="text" name="name" />
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu