import React,{useEffect} from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native'


const Splash = ({navigation}) => {

    // useEffect(() => {      
    //     setTimeout(() => {
    //         navigation.navigate('Home')
    //     }, 5000);
    //     return () => {
    //       console.log("cleanup")
    //     }
    //   }, [])
 
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#F9F9F9' }} />
                <StatusBar hidden={true} />
                <Image
                    style={styles.logo}
                    source={require('../assets/image/logo_black.png')}>
                </Image>
            </View>
        )
    }




const styles = StyleSheet.create({

    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000'
    },
    logo: {
        width: '100%',
        height: '50%',
        alignItems:'center',
        justifyContent:'center'
    },
    containerImg: {
        justifyContent: 'center'
    }
});

export default Splash;