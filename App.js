import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {NativeBaseProvider } from "native-base";
import SpinnerNative from "./screens/Spinner";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";


export default function App() {
    const [userNumber, SetUserNumber] = useState();

    function pickedNumberHandler(pickedNumber) {
        SetUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber}/>;
    }

  return (
      <>
          <NativeBaseProvider>
              <StatusBar  barStyle="light-content" hidden={false}/>
              <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
                <ImageBackground
                    source={require('./assets/images/backgroundDice.png')}
                    resizeMode="cover"
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundImage}>
                    <SafeAreaView style={styles.rootScreen}>
                        <ScrollView keyboardShouldPersistTaps='handled'
                                    bounces='false'>
                            {screen}
                            <SpinnerNative/>
                        </ScrollView>
                    </SafeAreaView>
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
