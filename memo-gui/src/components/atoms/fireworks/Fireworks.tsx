import classnames from 'classnames';
import React from 'react';
import styles from './Fireworks.module.css';
import { FireworksProps } from './Fireworks.props';

export const Fireworks = ({
  style,
  ...props
}: FireworksProps) => {

  return (
    <div className={styles["container"]}>
      <div className={classnames(styles["pattern0"], styles["fireworks"], styles["fire0"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern1"], styles["fireworks"], styles["fire1"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern2"], styles["fireworks"], styles["fire2"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern3"], styles["fireworks"], styles["fire3"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern4"], styles["fireworks"], styles["fire4"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern5"], styles["fireworks"], styles["fire5"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern6"], styles["fireworks"], styles["fire6"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern7"], styles["fireworks"], styles["fire7"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern8"], styles["fireworks"], styles["fire8"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern9"], styles["fireworks"], styles["fire9"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern10"], styles["fireworks"], styles["fire10"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern11"], styles["fireworks"], styles["fire11"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern12"], styles["fireworks"], styles["fire12"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern13"], styles["fireworks"], styles["fire13"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern14"], styles["fireworks"], styles["fire14"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern15"], styles["fireworks"], styles["fire15"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern16"], styles["fireworks"], styles["fire16"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern17"], styles["fireworks"], styles["fire17"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern18"], styles["fireworks"], styles["fire18"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
      <div className={classnames(styles["pattern19"], styles["fireworks"], styles["fire19"])}> 
        <div className={styles["ring_1"]}></div>
        <div className={styles["ring_2"]}></div>
      </div>
    </div>
  );
};
