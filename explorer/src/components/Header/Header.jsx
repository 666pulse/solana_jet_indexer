import React from 'react';
import { useRef, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { Breadcrumb, Menu, Layout } from 'antd';
import { Space, Table, Tag, theme } from 'antd';

// const items = new Array(5).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const items = [
  {
    label: (
      <a href="https://www.bing.com/" target="_blank" rel="noopener noreferrer">
        Bing
      </a>
    ),
    key: 'bing',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
    key: 'antdesign',
  },
]



export default function MainHeader() {
  const { Header } = Layout;

  return (
    <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo">
          <img src={process.env.PUBLIC_URL + '/logo.svg'} />;
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />

      <a href="/account">
        account
      </a>

      </Header>
  );
}
