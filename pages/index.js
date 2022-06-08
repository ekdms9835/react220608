import Head from 'next/head'
import styles from '../styles/Gnb.module.css'
import Gnb from './Gnb'
import Top from './Top'
import { useRouter } from 'next/router'
import Project_imformation from './Project_imformation'



export default function Home() {


  return (
  
    <div>
      <div className={styles.topzone}>
      <Top />
      <Gnb />
      </div>
      
      <div>
      <div className={styles.maincomtainer} 
        >

        <Project_imformation /> 

        </div>
        </div>
    </div>
  )
}
