import React, {Component} from 'react';

import {
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import{
    Container,
    Content,
    View,
    Text,
    Button,
} from 'native-base'


import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';


@inject('store')

@observer
export default class CreateUserScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
           

        }
    }

    render(){
        let { store } = this.props;


        return(
            <Container>
         
                <Content style={styles.content}>
                    <Text>
                        Create User
                    </Text>
                    
                </Content>

               
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    content:{
        padding: 20
    },

})