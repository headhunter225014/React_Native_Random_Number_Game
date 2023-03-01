import {StyleSheet, TextInput, View, ScrollView, Alert} from "react-native";
import MainButton from "../components/MainButton";
import {useState} from "react";

function StartGameScreen() {
    //state for input
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

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
        backgroundColor: "#3d031d",
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
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: '#ddb52f',
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