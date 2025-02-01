'use client'

import { useState } from "react";
import SplashScreen from "./splash_screen";
import TitleScreen from "./title_screen";
import Head from "next/head";
import AboutMe from "./aboutme";

const Home: React.FC = () => {
  
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(false); // ifdebug

  const handleSplashFinish = () => setIsSplashVisible(false);

  return (
    <>
      <Head>
        <title>Ronak Patel</title>
        <meta name="description" content="Ronak Patel's Portfolio" />
      </Head>
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <div className="">
          {/* <ThreeBackground/> */}
          <TitleScreen />
          <AboutMe/>
          
        </div>
      )}
    </>
  )

    
    
}

export default Home;