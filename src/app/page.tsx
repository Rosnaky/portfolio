'use client'

import { useState } from "react";
import SplashScreen from "./splash_screen";

const Home: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);

  const handleSplashFinish = () => setIsSplashVisible(false);

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <main>
          <div>Ronak</div>
        </main>
      )}
    </>
  )

    
    
}

export default Home;