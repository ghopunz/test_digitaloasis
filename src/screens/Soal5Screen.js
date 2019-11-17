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

import Soal5Item from '../components/Soal5Item';

import { inject, observer } from 'mobx-react/native';

@inject('store')

@observer
export default class Soal5Screen extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    onHandleInput(){

        let { store } = this.props;

        store.soal5Store.loopingNumber(this.state.number);

    }

    renderResult(){

        let { store } = this.props;
        
        return(
            <FlatList
                // data = {this.state.users}
                data = {store.soal5Store.list_pegawai}
                extraData = {this.state}
                renderItem = {({item, index}) => (
                    <Soal5Item 
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
                    <Text>
                        Data Pegawai
                    </Text>
                    
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