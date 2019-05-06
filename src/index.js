import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './modules/Main/Main';
import store from './store';
import Home from './modules/Home/Home';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Regulations from './components/Regulations';
import ProductContainer from './modules/Product/ProductContainer';
import CartContainer from './modules/Cart/CartContainer';
import NotFound from './components/NotFound';
import './sass/style.scss';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Main>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/p/:by/:direction/:currentPage'} component={Home} />
            <Route exact path={'/faq'} component={FAQ} />
            <Route exact path={'/regulations'} component={Regulations} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/product/:guitarId'} component={ProductContainer} />
            <Route exact path={'/cart/'} component={CartContainer} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Main>
      </BrowserRouter>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root
);
