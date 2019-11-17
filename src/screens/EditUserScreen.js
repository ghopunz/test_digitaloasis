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
    Radio,
    Icon,
    Thumbnail,
    Toast
} from 'native-base'

import { Form, TextValidator } from 'react-native-validator-form';
import SelectMultiple from 'react-native-select-multiple'

import {Grid, Row, Col} from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Colors from '../styles/colors';

import ImagePicker from 'react-native-image-picker';

import { inject, observer } from 'mobx-react/native';

let hobbies = [
  { label: 'Sepak Bola', value: 1 },
  { label: 'Voli', value: 2 },
  { label: 'Tenis Meja', value: 3 }
]



@inject('store')

@observer
export default class EditUserScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
           
            name: '',
            email: '',
            nip: '',
            gender: 0,
            selectedHobbies:[],
            attachmentSource:null,

        }
    }

    componentDidMount(){
        let { name, nip, photo, email, gender, hobby } = this.props.data;

        this.setState({
            name: name,
            nip: nip,
            email: email,
            gender: gender,
            selectedHobbies: hobby,
            attachmentSource: photo
        })
    }

    handleChangeName = (name) => {
        this.setState({ name });
    }

    handleChangeEmail = (email) => {
        this.setState({ email });
    }

    handleChangeNIP = (nip) => {
        this.setState({ nip });
    }


    onSelectionsChangeHobby = (selectedHobbies) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedHobbies })
    }

    submit = () => {
        // your submit logic
        let { store } = this.props;
        let { name, email, nip, gender, selectedHobbies, attachmentSource} = this.state;

        let old_nip = this.props.data.nip;
        // let name = this.state.name;
        // let email = this.state.email;
        // let nip = this.state.nip;
        // let gender = this.state.gender;
        // let hobby = this.state.selectedHobbies;
        // let photo = this.state.attachmentSource;

        // alert('Valid')
        if(this.state.attachmentSource != null && this.state.selectedHobbies.length > 0){

            store.soal5Store.editPegawai(name, email, nip, gender, selectedHobbies, attachmentSource, old_nip);

            Toast.show({
                text: "User has been created!",
                // buttonText: "Okay",
                duration: 3000
            })
            Actions.pop();

        }
        else{
            if(attachmentSource == null){
                alert('You must upload photo')
            }
            else if(selectedHobbies.length == 0){
                alert('You must select hobby')
            }
        }
    }

    handleSubmit = () => {
        this.refs.form.submit();
    }

    selectPhotoTapped() {
        const options = {
          title: 'Select Avatar',
          cancelButtonTitle: 'Cancel',
          quality: 0.6,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          // console.log('Response = ', response);
    
          if (response.didCancel) {
            // console.log('User cancelled photo picker');
          }
          else if (response.error) {
            // console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            // console.log('User tapped custom button: ', response.customButton);
          }
          else {
    
    
            // this.setState({file_content: 'data:' + response.type + ';base64,' + response.data})
            // this.setState({filetype:response.type, filename: response.fileName})
    
            //SHOW IMAGE
            this.setState({attachmentSource: {uri: response.uri, width: response.width, height: response.height}})
    
          }
        });
    }


    render(){
        let { store } = this.props;

        let { email, name, nip, gender } = this.state;

        return(
            <Container>
         
                <Content style={styles.content}>
                    <Form
                        ref="form"
                        onSubmit={this.submit}
                    >
                        {/* NAME */}
                        <View>
                            <Text style={styles.labelForm}>
                                Name
                            </Text>
                        </View>
                        <View>
                            {/* WITH REGEX only alphabets with space */}
                            <TextValidator
                                name="name"
                                label="name"
                                validators={['required', 'matchRegexp:^[a-zA-Z ]*$']}
                                errorMessages={['This field is required', 'Name must only letters and whitespace']}
                                placeholder={name.toString()}
                                type="text"
                                // keyboardType="email-address"
                                value={name}
                                onChangeText={this.handleChangeName}
                            />
                        </View>

                        {/* EMAIL */}
                        <View>
                            <Text style={styles.labelForm}>
                                Email
                            </Text>
                        </View>
                        <View>

                            <TextValidator
                                name="email"
                                label="email"
                                validators={['required', 'isEmail']}
                                errorMessages={['This field is required', 'Email invalid']}
                                placeholder="Your email"
                                type="text"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={this.handleChangeEmail}
                                autoCapitalize = 'none'
                            />
                        </View>

                        {/* NIP */}
                        <View>
                            <Text style={styles.labelForm}>
                                NIP
                            </Text>
                        </View>
                        <View>

                            <TextValidator
                                name="nip"
                                label="nip"
                                validators={['required', 'isNumber']}
                                errorMessages={['This field is required', 'NIP invalid']}
                                placeholder={nip.toString()}
                                type="text"
                                keyboardType="numeric"
                                value={nip}
                                onChangeText={this.handleChangeNIP}
                            />
                        </View>

                        {/* GENDER */}
                        <View>
                            <Text style={styles.labelForm}>
                                Gender
                            </Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop: 10}}>
                            <View>

                                <Text>Laki-laki</Text>
                            </View>
                            <View>

                                <Radio 
                                    onPress={() => this.setState({gender: 0})}
                                    selected={gender == 0}
                                    selectedColor={Colors.darkBlue}
                                    style={styles.radioFilter}
                                />
                            </View>
                            <View style={{marginLeft: 50}}>

                                <Text>Perempuan</Text>
                            </View>
                            <View>

                                <Radio 
                                    onPress={() => this.setState({gender: 1})}
                                    selected={gender == 1}
                                    selectedColor={Colors.darkBlue}
                                    style={styles.radioFilter}
                                />
                            </View>
                        </View>

                        {/* HOBBY */}
                        <View style={{marginTop: 10}}>
                            <Text style={styles.labelForm}>
                                Hobby
                            </Text>
                        </View>
                        <View>

                            <SelectMultiple
                                items={hobbies}
                                selectedItems={this.state.selectedHobbies}
                                onSelectionsChange={this.onSelectionsChangeHobby}
                            />
                        </View>

                        {/* PHOTO PROFILE */}
                        <View style={{marginTop: 10}}>
                            <Text style={styles.labelForm}>
                                Photo Profile
                            </Text>
                        </View>
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            {(this.state.attachmentSource != null)?
                            <Thumbnail 
                                large
                                source={this.state.attachmentSource}
                            
                            />:
                            <Icon name='md-person' style={{fontSize:100, color: Colors.gray}}/>}
                            <TouchableOpacity
                                onPress={() => this.selectPhotoTapped()}
                            >
                                <Text>
                                    Upload Photo
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Button
                            info
                            block
                            onPress={this.handleSubmit}
                            style={{marginBottom: 50, marginTop:10}}
                        >
                            <Text>
                                Create User
                            </Text>
                        </Button>
                    </Form>
                    
                </Content>

               
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    content:{
        padding: 20
    },
    radioFilter:{
        marginLeft: 20,
    },
    labelForm:{
        fontWeight:'bold'
    }

})