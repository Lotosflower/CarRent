import styles from "./Footer.module.css";
import { FooterSocial } from "./FooterSocial";
import Divider  from "./Divider"
import { FooterBottom } from "./FooterBottom";



export const Footer = () => {
    
    return(
        <section className = {styles.footer} >
            <FooterSocial/>
            <Divider />
            <FooterBottom/>
        </section>
        
    )
}