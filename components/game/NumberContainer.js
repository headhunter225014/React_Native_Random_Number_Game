import {View, Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 350 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 350 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 350 ? 12 : 38,
        fontWeight: 'bold'
    }
});
export default NumberContainer;