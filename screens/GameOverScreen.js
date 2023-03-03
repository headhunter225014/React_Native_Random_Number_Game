import {Image, View, StyleSheet, Text} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import MainButton from "../components/ui/MainButton";
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
      <View style={styles.rootContainer}>
          <Title>Game Over</Title>
          <View style={styles.imageContainer}>
              <Image source={require('../assets/images/success.png')} style={styles.image}/>
          </View>
          <View >
              <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text><Text>.</Text>
              </Text>
          </View>
          <MainButton onPress={onStartNewGame}>Start New Game</MainButton>
      </View>
    )
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500
    }
});

export default GameOverScreen;