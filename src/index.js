import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';

import List from "./components/Product/List";
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './index.scss';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Layout className="full-height">
      <Header>
        <h1>ShopBridge</h1>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background layout-conatiner full-height">
          <List />
        </div>
      </Content>
      <Footer>
        <b>think</b>bridge Software 
      </Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
