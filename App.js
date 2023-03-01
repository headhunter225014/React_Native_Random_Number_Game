import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {NativeBaseProvider } from "native-base";
import SpinnerNative from "./screens/Spinner";



export default function App() {

  return (
      <>
          <NativeBaseProvider>
              <StatusBar  barStyle="light-content" hidden={false}/>
              <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
                <ImageBackground
                    source={require('./assets/images/backgroundDice.png')}
                    resizeMode="cover"
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundImage}>
                    <ScrollView keyboardShouldPersistTaps='handled'
                                bounces='false'>
                        <StartGameScreen/>
                        <SpinnerNative/>
                    </ScrollView>
                </ImageBackground>
              </LinearGradient>
          </NativeBaseProvider>
      </>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
});
