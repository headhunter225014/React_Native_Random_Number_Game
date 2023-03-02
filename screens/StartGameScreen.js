import {StyleSheet, TextInput, View, ScrollView, Alert} from "react-native";
import MainButton from "../components/ui/MainButton";
import {useState} from "react";
import Colors from "../constants/colors";
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
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 15,
        backgroundColor: Colors.primary800,
        elevation: 5,
        shadowColor: '#343b49',
        shadowOffset: {width: 2, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.4,
        alignItems: "center"

    },
    input: {
        height: 50,
        width: 70,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        flex: 1
    }
});

export default StartGameScreen;