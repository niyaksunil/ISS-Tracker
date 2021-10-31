import React from "react";
import {View, 
    Text , 
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                <View style = {styles.titleBar}>
                    <Text style={styles.titleText}>ISS Tracker App</Text>
                </View>

                <TouchableOpacity style = {styles.routeCards}
                 onPress = {()=>{this.props.navigation.navigate('ISSLocation')}}>
                    <Text style = {styles.routeText}>ISS Location</Text>
                    <Text style = {styles.knowMore}>{'Know More ...'}</Text>
                    <Text style = {styles.bgDigit}>1</Text>
                    <Image source = {require('../assets/iss_icon.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.routeCards}
                 onPress = {()=>{this.props.navigation.navigate('Meteor')}}>
                    <Text style = {styles.routeText}>Meteors</Text>
                    <Text style = {styles.knowMore}>{'Know More ...'}</Text>
                    <Text style = {styles.bgDigit}>2</Text>
                    <Image source = {require('../assets/meteor_icon.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,           
    },
    titleBar:{
        flex:0.15,
        justifyContent : 'center',
        alignItems: 'center'
    },
    titleText :{
        fontSize: 40,
        fontWeight: "bold",
        
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    routeCards:{
        flex : 0.25,
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 50,
        marginRight : 50,
        borderRadius : 30,
        backgroundColor : 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 55,
        paddingLeft: 30,
        
    },
    backgroundImage:{
        flex : 1,
        resizeMode : 'cover',
    },
    knowMore:{
        paddingLeft : 30,
        color : 'red',
        fontSize : 15,
    },
    bgDigit :{
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 180,
        width: 180,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
    
})