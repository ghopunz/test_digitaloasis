/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import { Router, Scene} from 'react-native-router-flux';

import HomeScreen from '../screens/HomeScreen';
import Soal1Screen from '../screens/Soal1Screen';
import Soal3Screen from '../screens/Soal3Screen';
import Soal4Screen from '../screens/Soal4Screen';
import Soal5Screen from '../screens/Soal5Screen';
import DetailPegawaiScreen from '../screens/DetailPegawaiScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import EditUserScreen from '../screens/EditUserScreen';

import { inject, observer } from 'mobx-react/native';


@inject('store')

@observer

export default class Routers extends Component {

	constructor() {
		super();
		this.state = { 
			
		};
	}

	startWithCache(){

		const { store } = this.props;
		
	}

	
	componentDidMount(){
		this.startWithCache()
	}

	render() {

		
		return (
			<Router>

				{/* SCENE 'initial' for showing first scene*/}
				<Scene key='root'>
					{/* <Scene key='cobamodal' component={CobaModal} title="Show Ticket" hideNavBar initial/> */}
				
					<Scene key="home" initial hideNavBar  component={HomeScreen} title="Home"/>
					<Scene key="soal_1"  component={Soal1Screen} title="Soal 1"/>
					<Scene key="soal_3"  component={Soal3Screen} title="Soal 3"/>
					<Scene key="soal_4"  component={Soal4Screen} title="Soal 4"/>
					<Scene key="soal_5"   component={Soal5Screen} title="Soal 5"/>
					<Scene key="detail_pegawai"  component={DetailPegawaiScreen} title="Detail Pegawai"/>
					<Scene key="create_user"  component={CreateUserScreen} title="Create Pegawai"/>
					<Scene key="edit_user"  component={EditUserScreen} title="Edit Pegawai"/>
					
					
				</Scene>
			</Router>
		);

		
	}  

}


AppRegistry.registerComponent('App', () => Routers);
