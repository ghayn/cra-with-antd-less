import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.less';
import { Button } from "antd";
import decoratorTest from './decoratorTest';

@decoratorTest({
 buttonLabel: 'Learn React Now!'
})
class App extends Component {
  render() {
    const { buttonLabel } = this.props;

    return (
      <div className={styles.App }>
        <header className={ styles.AppHeader }>
          <img src={logo} className={ styles.AppLogo } alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type={"primary"} onClick={ () => window.location.href = 'https://reactjs.org'}>
            {buttonLabel}
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
