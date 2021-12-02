import React from 'react';
import { 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold, 
  Roboto_900Black 
} from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { DailyReport } from './src/screens/DailyReport';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium, 
    Roboto_700Bold, 
    Roboto_900Black
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar translucent={false}/>
        <DailyReport />
      </>
    );

  }

}
