import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Pages/Home'
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { navigationRef }  from './RootNavigation';
import NewsDetail from './Pages/NewsDetail';
import AboutGlobo from './Pages/About';
import QuotePage from './Pages/Quote';
import CatalogPage from './Pages/Catalog';
import CatalogDetail from './Pages/CatalogDetail';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading />
  }else{
    return(
      <NavigationContainer 
        style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0}}
        ref={navigationRef}
      >
        <Stack.Navigator initialRouteName='Globomantics' headerMode='screen'>
          <Stack.Screen name='Globomantics' component={Homepage} options={{
            header: () => <Header headerDisplay='Globomantics' />
          }}/>

          <Stack.Screen name='NewsDetail' component={NewsDetail} options={{
            header: () => <Header headerDisplay='News' />
          }}/>

          <Stack.Screen name='About' component={AboutGlobo} options={{
            header: () => <Header headerDisplay='About Globomantics' />
          }}/>

          <Stack.Screen name='Quote' component={QuotePage} options={{
            header: () => <Header headerDisplay='Get a quote' />
          }}/>

          <Stack.Screen name='Catalog' component={CatalogPage} options={{
            header: () => <Header headerDisplay='Globomantics Robotics' />
          }}/>

          <Stack.Screen name='CatalogDetail' component={CatalogDetail} options={{
            header: () => <Header headerDisplay='Product Information' />
          }}/>
          
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    )
  }
}