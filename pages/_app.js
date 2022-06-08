import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
// import Top from './Top';


function MyApp({ Component, pageProps }) {
  return(
    <div>
    {/* <Top /> */}
    <Component {...pageProps} />
    </div>
  )
  

}

export default MyApp
