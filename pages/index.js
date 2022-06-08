import Head from 'next/head'
import styles from '../styles/Gnb.module.css'
import Gnb from './Gnb'
import Top from './Top'
import { useRouter } from 'next/router'
import Project_imformation from './Project_imformation'



export default function Home() {


  return (
  
    <div>
      <Top />
      <Gnb />
      
      <div className={styles.maincomtainer} 
        >
          sdfsdf
        <Project_imformation />


        </div>

    </div>
  )
}
