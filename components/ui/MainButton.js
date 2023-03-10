import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function MainButton({children, onPress}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress}
                       style={({pressed}) =>
                           pressed
                           ? [styles.container, styles.pressed]
                           : styles.container}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 10,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.6
    }
})
export default MainButton;