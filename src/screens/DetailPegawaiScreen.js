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
    Thumbnail
} from 'native-base'

import {Grid, Row, Col} from 'react-native-easy-grid';

export default class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
           

        }
    }

    renderHobby(hobby){

        let labelHobby = []

        for(i = 0; i < hobby.length; i++){
            labelHobby.push(hobby[i].label);
        }

        return labelHobby;
    }

    renderGender(value){

        if(value == 0){
            return 'Laki-laki'
        }
        else{
            return 'Perempuan'
        }
    }

    renderData(){
        let { name, nip, photo, email, gender, hobby } = this.props.data;

        let hobbies = this.renderHobby(hobby).join();
        let genderLabel = this.renderGender(gender);

        let data = [];
        let labelName = ['NIP', 'Name', 'Email', 'Gender', 'Hoby'];
        let valueData = [nip, name, email, genderLabel, hobbies]

        for(let i = 0; i < labelName.length; i++){
            data.push(
                <Row key={i}>
                    <Col size={2}>
                        <Text>
                            {labelName[i]}
                        </Text>
                    </Col>
                    <Col size={1}>
                        <Text>
                            :
                        </Text>
                    </Col>
                    <Col size={5}>
                        <Text>
                            {valueData[i]}
                        </Text>
                    </Col>
                </Row>
            )
        }

        return data;
    }

    render(){
        let { name, nip, photo, email, gender, hobby } = this.props.data;


        return(
            <Container>
         
                <Content style={styles.content}>

                    <Row style={{alignItems:'center', justifyContent:'center', marginBottom: 20}}>

                        <Thumbnail large source={photo} />
                    </Row>

                    {this.renderData()}
                    
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