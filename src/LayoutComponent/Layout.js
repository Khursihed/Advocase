import Home from "../HomeComponent/HomePage";

import styles from './layout.module.css'

function Layout(props){
    return(
        <div className={styles.layout}>
            {<Home/>}
            {props.children}
        </div>
    );
}

export default Layout;