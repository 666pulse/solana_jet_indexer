import React from 'react';

import {Layout } from 'antd';
const {Content, Footer } = Layout;

export default function MainFooter() {
  return (
    <Footer
    style={{
      textAlign: 'center',
    }}
  >
    DePINscan ©{new Date().getFullYear()}
  </Footer>
  );
}
