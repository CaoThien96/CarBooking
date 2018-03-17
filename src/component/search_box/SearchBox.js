//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions,TextInput,Image } from "react-native";
import RNGooglePlacePicker from "react-native-google-place-picker";

const { width, height } = Dimensions.get("window");
// create a component
class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locationGo:{
				address:null
			},
			locationCome:{
				address:null
			}
		};
	}
	locationGo() {
		RNGooglePlacePicker.show((response) => {
		  if (response.didCancel) {
				console.log("User cancelled GooglePlacePicker");
		  }
		  else if (response.error) {
				console.log("GooglePlacePicker Error: ", response.error);
		  }
		  else {
				console.log(response);
				this.setState({
			  		locationGo: response
				});
		  }
		});
	}
	locationCome(){
		RNGooglePlacePicker.show((response) => {
			if (response.didCancel) {
				  console.log("User cancelled GooglePlacePicker");
			}
			else if (response.error) {
				  console.log("GooglePlacePicker Error: ", response.error);
			}
			else {
				  console.log(response);
				  this.setState({
					locationCome: response
				  });
			}
		  });
	}
	render() {
		return (
			<View style={styles.container}>
           
				<View style={styles.textInput} >
					<Image style={styles.image} source={require("../../../asset/location.png")}  />
					<Text onPress={this.locationGo.bind(this)} style={styles.input}>{this.state.locationGo.address}</Text>
				</View>
				<View style={styles.textInput}>
					<Image style={styles.image} source={require("../../../asset/location.png")}  />
					<Text onPress={this.locationCome.bind(this)} style={styles.input}>{this.state.locationCome.address}</Text>
				</View>
            
			</View>
        
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		height:100,
		width:width-20,
		backgroundColor:"#ffff",
		marginTop:30,
		marginLeft:10,
		marginRight:20,
		borderRadius:10
	},
	textInput:{
		flexDirection:"row",
		marginTop:5
	},
	image:{
		flex:1
	},
	input:{
		flex:10
	}
});

//make this component available to the app
export default SearchBox;
