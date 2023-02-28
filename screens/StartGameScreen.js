import {StyleSheet, TextInput, View} from "react-native";
import MainButton from "../components/MainButton";
function StartGameScreen() {
    return(
        <View style={styles.container}>
            <TextInput/>
            <MainButton>Reset</MainButton>
            <MainButton>Confirm</MainButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 15,
        backgroundColor: "#72063c",
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.4
    }
});

export default StartGameScreen;