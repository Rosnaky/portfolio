'use client'

import { useState } from "react";
import SplashScreen from "./splash_screen";
import TitleScreen from "./title_screen";
import Head from "next/head";
import ThreeBackground from "./three_screen";

const Home: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);

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
        <div>
          {/* <ThreeBackground/> */}
          <TitleScreen />
        </div>
      )}
    </>
  )

    
    
}

export default Home;