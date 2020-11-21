import React from 'react'
import Header from './component/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Add from './pages/Add';
import Styles from './pages/Styles';
import { Route, Switch } from 'react-router-dom';
import SongLyrics from './pages/SongLyrics';
import SongWithSameStyle from './pages/SongWithSameStyle';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/styles">
                    <Styles />
                </Route>
                <Route path="/styles/:styleName">
                    <SongWithSameStyle />
                </Route>
                <Route path="/song/:id">
                    <SongLyrics />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App
