import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

//component to display title on multiple screens
function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        fontWeight: 'bold'
    }
});

export default Title;