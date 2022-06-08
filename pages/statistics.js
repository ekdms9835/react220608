import Gnb from "./Gnb";
import Top from "./Top";
import styles from '../styles/Gnb.module.css'


export default function statistics() {
    return (
        <>

        <div className={styles.topzone}>
            <Top />
            <Gnb />

        </div>

        <div className={styles.maincomtainer} >

        <h1> 통계 </h1>

        </div>
        </>

    )
}
