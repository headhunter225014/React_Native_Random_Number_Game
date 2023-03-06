import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, ImageBackground, SafeAreaView, View, KeyboardAvoidingView } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {NativeBaseProvider } from "native-base";
import SpinnerNative from "./screens/Spinner";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";





export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gamesIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    //sets userNumber to the input and also changes the gameOver var
    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds){
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    //var that holds the startGameScreen
    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;


    //checks if user input number, if true change the screen var
    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    //checks if the game is Over number is true and the user input number, change screen to Game Over
    if (gamesIsOver && userNumber) {
        screen = <GameOverScreen
            userNumber={userNumber}
            roundsNumber={guessRounds}
            onStartNewGame={startNewGameHandler}/>
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
                        <View style={{flex: 1}}>
                            {screen}
                        </View>
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
