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
    Fab,
    Icon,
} from 'native-base'

import Colors from '../styles/colors';

import Soal5Item from '../components/Soal5Item';

import SearchInput, { createFilter } from 'react-native-search-filter';

import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';

const KEYS_TO_FILTERS = ['nip', 'name'];

@inject('store')

@observer
export default class Soal5Screen extends Component{

    constructor(props){
        super(props);
        this.state = {
            sorting_selected: 0,
            searchTerm:'',
        }
    }

    onHandleInput(){

        let { store } = this.props;

        store.soal5Store.loopingNumber(this.state.number);

    }

    renderResult(){

        let { store } = this.props;
        
        let filteredEmails = store.soal5Store.list_pegawai.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return(
            <FlatList
                // data = {this.state.users}
                // data = {store.soal5Store.list_pegawai}
                data = {filteredEmails}
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

    componentDidMount(){
        let { store } = this.props;

        store.soal5Store.sortingData(this.state.sorting_selected);
    }

    // getRefresh = () => {

    //     this.componentDidMount()
    // }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
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
                <View style={{marginLeft: 20, marginTop: 10, marginRight: 20}}>
                    <SearchInput 
                        onChangeText={(term) => { this.searchUpdated(term) }} 
                        style={styles.searchInput}
                        placeholder="Type a NIP or Name to search"
                        />
                </View>

                <Content>
                   {this.renderResult()}
                    
                </Content>

                <Fab
                    
                    style={{ backgroundColor: Colors.darkBlue }}
                    position="bottomRight"
                    onPress={() => Actions.create_user()}>
                    <Icon name="add" />
                    
                </Fab>

               
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    content:{
        padding: 20
    },
    searchInput:{
        padding: 10,
        borderColor: Colors.gray,
        borderWidth: 0.7,
        marginBottom: 10,
    }
    
})