import LottieView from 'lottie-react-native';
import React, { useRef } from 'react'


const Wrong = () => {
    const animation = useRef<LottieView>(null);
  return (
    <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'black',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/wrong.json')}
      />
  )
}

export default Wrong
