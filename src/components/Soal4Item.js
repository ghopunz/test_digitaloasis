import React, {Component} from 'react';

import {
    StyleSheet,
} from 'react-native';

import{
 
    View,
    Text,
} from 'native-base'


export default class Soal4Item extends Component{

    constructor(props){
        super(props);
        this.state = {
           

        }
    }

    render(){
        let { number} = this.props;


        return(
            <View style={styles.content}>
                <Text>
                    {number}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    content:{
        marginLeft: 20
    },

    
})