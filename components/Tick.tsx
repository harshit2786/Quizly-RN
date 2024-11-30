import LottieView from 'lottie-react-native';
import React, { useRef } from 'react'


const Tick = () => {
    const animation = useRef<LottieView>(null);
  return (
    <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 500,
          height: 500,
          backgroundColor: 'black',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/tick.json')}
      />
  )
}

export default Tick
