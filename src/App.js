import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.less';
import { Button } from "antd";

class App extends Component {
  render() {
    return (
      <div className={styles.App }>
        <header className={ styles.AppHeader }>
          <img src={logo} className={ styles.AppLogo } alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type={"primary"}>
            Learn React
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
