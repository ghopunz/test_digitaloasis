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
                                Soal 1 (PRINT DIGITAL OASIS)
                            </Text>
                        </Button>
                    </View>

                    <View style={{marginTop:20}}>

                        <Button
                            info
                            
                            onPress={() => Actions.soal_3()}
                        >
                            <Text>
                                Soal 3 (ANAGRAM)
                            </Text>
                        </Button>
                    </View>

                    <View style={{marginTop:20}}>

                        <Button
                            info
                            
                            onPress={() => Actions.soal_4()}
                        >
                            <Text>
                                Soal 4 (SEGITIGA ZERO)
                            </Text>
                        </Button>
                    </View>

                    <View style={{marginTop:20}}>

                        <Button
                            info
                            
                            onPress={() => Actions.soal_5()}
                        >
                            <Text>
                                Soal 5 (CRUD)
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