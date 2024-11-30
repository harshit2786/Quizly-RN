import LottieView from 'lottie-react-native';
import React, { useRef } from 'react'


const Loader = () => {
    const animation = useRef<LottieView>(null);
  return (
    <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'black',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/Loader.json')}
      />
  )
}

export default Loader
