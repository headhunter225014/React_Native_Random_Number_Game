import {Image, View, StyleSheet, Text, Dimensions, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import MainButton from "../components/ui/MainButton";
import image from "native-base/src/components/primitives/Image";
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 350) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize =80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView styles={{flex: 1}}>
          <View style={styles.rootContainer}>
              <Title>Game Over</Title>
              <View style={[styles.imageContainer, imageStyle]}>
                  <Image source={require('../assets/images/success.png')} style={styles.image}/>
              </View>
              <View >
                  <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text><Text>.</Text>
                  </Text>
              </View>
              <MainButton onPress={onStartNewGame}>Start New Game</MainButton>
          </View>
        </ScrollView>
    )
};

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
       // borderRadius: deviceWidth < 350 ? 75 : 150,
        //width: deviceWidth < 350 ? 150 : 300,
        //height: deviceWidth < 350 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500
    }
});

export default GameOverScreen;