import React from 'react';
import { Router, Route, Switch ,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import OrderPage from './routes/OrderPage'

import styles from './router.css'

function RouterConfig({ history }) {
  return (
      <Router history={history}>
        <div className={styles.container}>
          <div className={styles["left-nav"]}>
            <div className={styles.title}>E洁家政管理系统</div>
            <ul>
              <li className={styles["nav-list-item"]}><Link to="/customer">顾客管理</Link></li>
              <li className={styles["nav-list-item"]}><Link to="/order">订单管理</Link></li>
            </ul>
          </div>

          <div className={styles["right-content"]}>
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route path="/orderLine" exact component={OrderLinePage} />
              <Route path="/customer" exact component={CustomerPage} />
              <Route path="/order" exact component={OrderPage} />
            </Switch>
          </div>

        </div>
      </Router>
    
  );
}

export default RouterConfig;
