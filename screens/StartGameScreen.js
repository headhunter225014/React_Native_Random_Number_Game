import {StyleSheet, TextInput, View, ScrollView, Alert, Text} from "react-native";
import MainButton from "../components/ui/MainButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    //state for input
    const [enteredNumber, setEnteredNumber] = useState('');

    //handling the input
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    //testing if the number is correct. If not showing an alert
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //showing alert
            Alert.alert('Invalid Number', "Number has to be between 1 to 99",
                [{text: 'Okay',
                            style: 'destructive',
                            onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Random Number</InstructionText>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <MainButton onPress={resetInputHandler}>Reset</MainButton>
                    </View>
                    <View style={styles.button}>
                        <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center'
    },
});

export default StartGameScreen;