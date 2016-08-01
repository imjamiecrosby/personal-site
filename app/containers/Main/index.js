import React from 'react';

import 'sanitize.css/sanitize.css';

import Img from 'components/Img';
import Banner from './sf.jpg';

import styles from './styles.css';



export default class Main extends React.Component { 

  render() {


    return (
      <div>
        <div className="row">
          <div className="small-12 large-4 large-offset-1 xlarge-3 large-offset-1 columns no-padding">
            <div className={styles.titleOverlay}/>
          </div>



        </div>

        <div className="row">
          <div className="small-12 large-4 xlarge-3 columns no-padding">
            <div className={styles.leftContainer}>
            </div>
          </div>

          <div className="small-12 large-8 xlarge-9 columns no-padding">
            <div className={styles.rightContainer}>
              <Img className={styles.heroImage} src={Banner} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
