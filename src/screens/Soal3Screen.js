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


import { inject, observer } from 'mobx-react/native';


@inject('store')

@observer
export default class Soal3Screen extends Component{

    constructor(props){
        super(props);
        this.state = {
           words:''

        }
    }

    onHandleInput(){

        let { store } = this.props;

        store.soal3Store.anagramProcess(this.state.words);

    }

    renderResult(){

        let { store } = this.props;
        
        return(
            <Text>
                Output: {store.soal3Store.resultAnagram}
            </Text>
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
                            
                            placeholder='Input word'
                            onChangeText={(text) => this.setState({words: text})}
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