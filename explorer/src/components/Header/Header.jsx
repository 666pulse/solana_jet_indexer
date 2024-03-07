import React from 'react';
import { useRef, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { Breadcrumb, Menu, theme } from 'antd';
import { Space, Table, Tag, Layout } from 'antd';
import axios, {isCancel, AxiosError} from 'axios';


export default function MainHeader() {
  const { Header } = Layout;

  const items = new Array(5).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

  return (
    <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
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
