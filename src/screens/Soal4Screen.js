import React, {Component} from 'react';

import {
    FlatList,
    StyleSheet,
    
} from 'react-native';

import{
    Container,
    Content,
    View,
    Text,
    Button,
    Input,
    Item,
} from 'native-base'

import Colors from '../styles/colors';

import Soal4Item from '../components/Soal4Item';

import { inject, observer } from 'mobx-react/native';

@inject('store')

@observer
export default class Soal4Screen extends Component{

    constructor(props){
        super(props);
        this.state = {
           number:''

        }
    }

    onHandleInput(){

        let { store } = this.props;

        store.soal4Store.loopingNumber(this.state.number);

    }

    renderResult(){

        let { store } = this.props;
        
        return(
            <FlatList
                // data = {this.state.users}
                data = {store.soal4Store.list_number}
                extraData = {this.state}
                renderItem = {({item, index}) => (
                    <Soal4Item 
                        {...item}
                    />
                )}

                keyExtractor = {(item, index) => index.toString()}
            />
        )
    }

    render(){
        let { store } = this.props;


        return(
            <Container>
                <View
                    style={{padding: 20}}
                >
                    <Item >
                        <Input
                            keyboardType='numeric'
                            placeholder='Input number'
                            onChangeText={(text) => this.setState({number: text})}
                        />
                    </Item>
                    
                    <Button
                        info
                        block
                        onPress={() => this.onHandleInput()}
                    >
                        <Text>
                            Input
                        </Text>
                    </Button>
                </View>
                <Content>
                   {this.renderResult()}
                    
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