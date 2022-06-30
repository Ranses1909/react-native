import React from 'react';
import { SafeAreaView } from 'react-native';
// import Contador from './src/screens/Contador';
// import HiWorldScreen from './src/screens/HiWorldScreen';
// import BoxOModel from './src/screens/BoxOModel';
// import Dimensiones from './src/screens/Dimensiones';
// import PositionScreen from './src/screens/positionScreen';
// import FlexScreen from './src/screens/FlexScreen';
import TareaScreen from './src/screens/TareaScreen';

// npx react-native run-android

const App = () => {
  return (
    //  <HiWorldScreen/>
    // <Contador/>
    <SafeAreaView style={{flex: 1,}}>
    {/* <BoxOModel/> */}
    {/* <Dimensiones /> */}
    {/* <PositionScreen/> */}
    {/* <FlexScreen></FlexScreen> */}
    <TareaScreen />
  </SafeAreaView>
  );
};

export default App;

  //  <HiWorldScreen/>
