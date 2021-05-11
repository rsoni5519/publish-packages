import React, {useState} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import AutoTrackables from '@lerna-react-native/react-native';

const HomeScreen = () => {
    const [autoTrackablesInstance] = useState(new AutoTrackables());

    const handleTrackData = (context: any) => {
        autoTrackablesInstance.report(context);
    };

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title="Track UserAgent" onPress={() => handleTrackData('userAgent')} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Track ScreenSize"
                        onPress={() => handleTrackData('screenSize')}
                    />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Track Coordinates"
                        onPress={() => handleTrackData('coordinates')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        borderRadius: 10,
    },
});

export default HomeScreen;
