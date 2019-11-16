import React, {Component} from 'react';

import {
    StyleSheet,
} from 'react-native';

import{
 
    View,
    Text,
} from 'native-base'


export default class Soal1Item extends Component{

    constructor(props){
        super(props);
        this.state = {
           

        }
    }

    render(){
        let { id, word } = this.props;


        return(
            <View style={styles.content}>
                <Text>
                    {id} {word}
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