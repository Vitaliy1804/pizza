import React from 'react';
import styles from './NotFoundBlock.module.scss'
console.log(styles);

 const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
        <h1>
        <span>🤦 </span>    
        <br/>
            NotFoundBlock
        </h1>
        </div>
    )
}

export default NotFoundBlock;