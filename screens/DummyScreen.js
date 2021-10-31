import React from "react";
import {View, Text} from "react-native";

export default class DummyScreen extends React.Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}


object = {
    key1:{
        key1_01:0,
        key2_01:{}
    },
    key2:{

    }
}


animals = {
   tiger:{

   },
   lion:{

   },
   snake:{

   }
}

x = animals

x.map((aniName)=>{
    y =  aniName
})