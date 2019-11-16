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
export default class HomeScreen extends Component{

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
                    <View style={{marginTop:20}}>

                        <Button
                            info
                            
                            onPress={() => Actions.soal_1()}
                        >
                            <Text>
                                Soal 1
                            </Text>
                        </Button>
                    </View>

                    <View style={{marginTop:20}}>

                        <Button
                            info
                            
                            onPress={() => Actions.soal_3()}
                        >
                            <Text>
                                Soal 3
                            </Text>
                        </Button>
                    </View>
                    
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