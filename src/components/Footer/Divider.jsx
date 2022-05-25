import styles from "./Footer.module.css";
import { Divider } from 'antd';




const _Divider = () => {
    
    return(
        <section className = {styles.divider} >
            <Divider className = {styles.divider}/>
        </section>
    )
}

export default _Divider;