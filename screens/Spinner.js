import React from "react";
import { Spinner, HStack, Center, NativeBaseProvider } from "native-base";
import {StyleSheet} from "react-native";


//Just testing loading component for fun
const SpinnerNative = () => {
    return (
        <HStack space={8} justifyContent="center" style={styles.container}>
            <Spinner color="emerald.500" size="lg"/>
        </HStack>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
});

export default SpinnerNative;

