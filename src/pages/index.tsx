import Head from "next/head"
import Home from "./home/home"
  
function index() {
  return (
    <div>
      <Head>
          <title>Dorman </title>
      </Head>
  
      <Home/>
    </div>
  )
}

export default index
