import {Text, View, StyleSheet, SafeAreaView, Alert} from "react-native";
import Title from "../components/ui/Title";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";
//generates random number
let minBoundary = 1;
let maxBoundary = 100;
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);

    if (rndNum === exclude){
        return generateRandomBetween(minBoundary, maxBoundary, exclude);
    } else {
        return rndNum;
    }
}


function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if (
            (direction == 'lower' && currentGuess < userNumber) ||
            (direction == 'higher' && currentGuess < userNumber))
        {
            Alert.alert("Don't lie",
                        "You know that is wrong...",
                        [{text: "Sorry!", style: 'cancel'}]);
            return}


        if (direction === 'lower'){
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>-</MainButton>
                    <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>+</MainButton>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    },
    buttons: {

    }
});
export default GameScreen;