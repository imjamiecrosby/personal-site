import React from 'react';
import 'script!jquery'

import 'sanitize.css/sanitize.css';

import '../../css/foundation.css'
import '../../css/global.css'
import '../../css/hero.css'

import styles from './styles.css';

export default class App extends React.Component { 

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
