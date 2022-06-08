/* eslint-disable @next/next/no-img-element */
import { Header } from "semantic-ui-react";
// import Gnb from "./Gnb";
import styles from '../styles/Gnb.module.css'


export default function Top() {
    return (
    <div>
        <div className={styles.top}>
            <img 
            src="/images/mainbackground.png" 
            alt="logo"
            style={{
                width: "1920px",
                height: "90px"            
            }} 
            />
            <img 
            src="/images/logo.png" 
            alt="logo"
            style={{
                width: "160px",
                position: "absolute",               
                top: 35,
                left: 10}} />
        </div> 
    </div>
    )
}