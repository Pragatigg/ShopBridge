import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import List from 'containers/Product/List';
import Details from 'containers/Product/Details';
import store from 'redux/store';
import reportWebVitals from 'reportWebVitals';
import 'antd/dist/antd.css';
import 'index.scss';

const { Header, Content, Footer } = Layout;
const ROOT = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <Header>
          <h1>ShopBridge</h1>
        </Header>
        <Content className="site-layout">
          <div className="site-layout-background layout-conatiner">
            <Router>
              <Switch>
                <Route path="/" exact>
                  <List />
                </Route>
                <Route path="/new">
                  <Details />
                </Route>
                <Route path="/products/:id">
                  <Details />
                </Route>
              </Switch>
            </Router>
          </div>
        </Content>
        <Footer>
          <b>think</b>bridge Software 
        </Footer>
      </Layout>
    </Provider>
  </React.StrictMode>,
  ROOT
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
