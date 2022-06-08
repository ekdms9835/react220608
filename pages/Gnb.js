import styles from '../styles/Gnb.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Gnb() {

    const router = useRouter();
    const now = router.pathname;
    // console.log(now);


    return(
    <div>
        <div className={styles.topbar}>

            <div className={styles.topbarcontainer}>
            <Link href="/">
                <div className={styles.dashbar} style={{ backgroundColor: now === "/"? "#3196E4" :""}}>
                <a style={{color:"white", textDecoration:"none"}}> 대시보드</a>
            </div>
            </Link>

            <Link href="/Project">
            <div className={styles.dashbar} style={{backgroundColor: now === "/Project"?"#3196E4":""}}>
            <a style={{color:"white", textDecoration:"none"}}>프로젝트 관리</a>
            </div>
            </Link>

            <Link href="/statistics">
            <div className={styles.dashbar} style={{ 
                backgroundColor: now === "/statistics"? "#3196E4" :""}}>
                <a style={{color:"white", textDecoration:"none"}}> 통계</a>
            </div>
            </Link>
            </div>

        </div>
    </div>
    ) 
}