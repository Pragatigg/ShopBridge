import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import List from 'containers/Product/List';
import Details from 'containers/Product/Details';
import shopBridge from 'assets/shop-bridge.png';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header>
      <h1>
        <img src={shopBridge} alt="logo" />
        <span className="ml-2"> ShopBridge </span>
      </h1>
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
      Created by <b>Pragati Garud</b>
    </Footer>
  </Layout>
);

export default App;
