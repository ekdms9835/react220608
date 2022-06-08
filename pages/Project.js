import Gnb from "./Gnb";
import Top from "./Top";
import styles from '../styles/Gnb.module.css'


export default function Project() {
  return (
        <>
        <div className={styles.topzone}>
            <Top />
            <Gnb />
          
        </div>


        <div className={styles.maincomtainer} >

          <h1> 프로젝트 관리</h1>

        </div>
        </>
  )
}
