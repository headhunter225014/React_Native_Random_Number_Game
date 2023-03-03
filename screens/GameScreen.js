import {Text, View, StyleSheet, SafeAreaView, Alert, FlatList} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";
//generates random number
let minBoundary = 1;
let maxBoundary = 100;

//just a function that generates random number in the range of min and max
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);

    //additionally, we don't want to end the game if the number was guessed at the first place.
    //Instead we exclude the correct number on the first place
    if (rndNum === exclude){
        return generateRandomBetween(minBoundary, maxBoundary, exclude);
    } else {
        return rndNum;
    }
}


function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    //hook to check if the gameOver var changed
    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    },[]);


    //function to handle the direction of the next guess, ak changing limits for random function
    function nextGuessHandler(direction) {
        //chekcs if we are lying about the direction of our number compared to the guess and output an ALert
        if (
            (direction == 'lower' && currentGuess < userNumber) ||
            (direction == 'higher' && currentGuess > userNumber))
        {
            Alert.alert("Don't lie",
                        "You know that is wrong...",
                        [{text: "Sorry!", style: 'cancel'}]);
            return;}


        // changes the limits depends on the direction
        if (direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        //calls new random number function with new limits and sets new guess to that number
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.cardGameScreenMargin}>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color='white'/>
                        </MainButton>
                    </View>
                    <View style={styles.button}>
                        <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="md-add" size={24} color='white'/>
                        </MainButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                keyExtractor={(item) => item}/>
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
        flexDirection: 'row',
    },
    button: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    cardGameScreenMargin: {
        marginTop: 10
    },
    listContainer: {
        flex: 1,
        padding : 16,
    }
});
export default GameScreen;