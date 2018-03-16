//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions,TextInput,Image } from "react-native";
const { width, height } = Dimensions.get("window");
// create a component
class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
            
		};
	}
	render() {
		return (
			<View style={styles.container}>
           
				<View style={styles.textInput} >
					<Image style={styles.image} source={require("../../../asset/location.png")}  />
					<TextInput style={styles.input}  placeholder="Nhap diem di"/>
				</View>
				<View style={styles.textInput}>
					<Image style={styles.image} source={require("../../../asset/location.png")}  />
					<TextInput style={styles.input} placeholder="Nhap diem den"/>
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
