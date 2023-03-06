import {View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

function Card({children, style}) {
    return (
        <View style={[styles.card, style]}>{children}</View>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        marginTop: deviceWidth < 350 ? 18 : 36,
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
});
export default Card;