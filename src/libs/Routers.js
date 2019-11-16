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

		// AsyncStorage.getItem('registered_time_zone_id').then((registered_time_zone_id) => {
		// 	// REGISTEREDTZ = registered_time_zone_id
		// 	store.userStore.user_registered_time_zone_id = parseInt(registered_time_zone_id);
		// 	this.setState({isLoaded:true});
		// })

		
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
				
					<Scene key="home" hideNavBar initial component={HomeScreen} title="Home"/>
					<Scene key="soal_1"  component={Soal1Screen} title="Soal 1"/>
					<Scene key="soal_3"  component={Soal3Screen} title="Soal 3"/>
					
					
				</Scene>
			</Router>
		);

		
	}  

}


AppRegistry.registerComponent('App', () => Routers);
