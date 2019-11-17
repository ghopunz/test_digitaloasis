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
    Picker,
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
            sorting_selected: 0,
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

    onValueChangeSorting(value) {
        let { store } = this.props;

        this.setState({
            sorting_selected: value
        });

        
        store.soal5Store.sortingData(value);
    }


    render(){
        let { store } = this.props;


        return(
            <Container>
                <View
                    style={{marginLeft: 20, marginTop: 20}}
                >
                    <Text style={{fontSize: 20, alignSelf:'center', fontWeight:'bold'}}>
                        Data Pegawai
                    </Text>
                    
                </View>

                <View
                    style={{marginLeft: 20, marginTop: 10}}
                >

                    <View>

                        <Text>
                            Sort
                        </Text>
                    </View>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 150 }}
                        selectedValue={this.state.sorting_selected}
                        onValueChange={this.onValueChangeSorting.bind(this)}
                    >
                        <Picker.Item label="NIP" value={0} />
                        <Picker.Item label="Name" value={1}/>
                        
                    </Picker>
                    
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