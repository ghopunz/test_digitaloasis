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

    renderHoby(hoby){

        let labelHoby = []

        for(i = 0; i < hoby.length; i++){
            labelHoby.push(hoby[i].label);
        }

        return labelHoby;
    }

    renderData(){
        let { name, nip, photo, email, gender, hoby } = this.props.data;

        let hobbies = this.renderHoby(hoby).join();

        let data = [];
        let labelName = ['NIP', 'Name', 'Email', 'Gender', 'Hoby'];
        let valueData = [nip, name, email, gender, hobbies]

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
        let { name, nip, photo, email, gender, hoby } = this.props.data;


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