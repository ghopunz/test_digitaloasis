import React, {Component} from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

import{
    View,
    Text,
    Thumbnail,
    Icon
} from 'native-base'

import {Grid, Row, Col} from 'react-native-easy-grid';

import Colors from '../styles/colors';
import { Actions } from 'react-native-router-flux';

import { inject, observer } from 'mobx-react/native';

@inject('store')

@observer

export default class Soal1Item extends Component{

    constructor(props){
        super(props);
        this.state = {
           
            isDeleted: false,
        }
    }

    onHandleRemove(){
        
        let { store, nip } = this.props;

        store.soal5Store.removePegawai(nip);
        // this.setState({isDeleted: true})
    }

    removeConfirmation(){
        Alert.alert(
            'Delete Pegawai',
            'Are You Sure?',
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => this.onHandleRemove()},
            ],
            {cancelable: false},
        );
    }

    render(){
        let { name, nip, photo, email, gender, hobby } = this.props;

        // if(this.state.isDeleted){
        //     return null;
        // }
        // else{

            return(
                <TouchableOpacity 
                    style={styles.content}
                    onPress={() => Actions.push('detail_pegawai', {data: this.props})}    
                >
                    <Row>
                        <Col size={1}>
                            <Thumbnail source={photo} />
                            {/* <Thumbnail source={{uri: '../resources/images/photos/kemot.jpeg'}} /> */}
                        </Col>
                        <Col size={4} style={{marginLeft: 25}}>
                            <Row>
                                <Text>
                                    {nip}
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{fontSize: 14, color: Colors.gray}}>
                                    {name}
                                </Text>
                            </Row>
                        </Col>
                        <Col size={1} style={{alignItems:'center', justifyContent:'center'}}>
                            <TouchableOpacity
                                onPress={() => Actions.push('edit_user', {data: this.props})}
                            >
    
                                <Icon name="md-create" style={[styles.icon, {color: Colors.darkBlue}]}/>
                            </TouchableOpacity>
                        </Col>
                        <Col size={1} style={{alignItems:'center', justifyContent:'center'}}>
                            <TouchableOpacity
                                onPress={() => this.removeConfirmation()}
                            >
    
                                <Icon name="md-trash" style={[styles.icon, {color: Colors.red}]}/>
                            </TouchableOpacity>
                        </Col>
                        
                    </Row>
                </TouchableOpacity>
            )
        // }

    }
}

const styles = StyleSheet.create({

    content:{
        // marginLeft: 20,
        // borderBottomColor: Colors.gray,
        // borderBottomWidth: 0.5,
        borderColor: Colors.gray,
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        marginLeft:10,
        marginRight:10,
    },

    icon:{
        fontSize: 24,
    }
    
})