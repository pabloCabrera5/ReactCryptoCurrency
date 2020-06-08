
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import { CardCryptos } from './components/cardCryptos/cardcryptos';
import { Header } from './components/header/header';
import { TableCryptos } from './components/tableCryptos/tablecryptos';
import { Home } from './components/home/home';
import { DetailCrypto } from './components/cryptoDetail/cryptoDetail';

// https://docs.coincap.io/?version=latest#ab6ce4ff-3669-4b60-88bb-a5e7c12e6881

function App() {

  return (
    <div className="App">

      <header className="App-header">
        CRYPTOS APP
      </header>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/card' component={() => <CardCryptos />} />
        <Route path='/table' component={() => <TableCryptos />} />
        <Route path='/card/:id' component={() => <DetailCrypto />} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
