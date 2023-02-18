import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

export default function Navbar() {
	return (
		<View
			style={{
				...styles.navbar,
				...Platform.select({
					ios: styles.navbarsIos,
					android: styles.navbarsAndroid,
				}),
			}}>
			<Text style={styles.text}>Todo App !</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10,
	},
	navbarsIos: {
		borderBottomColor: '#3949ab',
		borderBottomWidth: 1,
	},
	navbarsAndroid: {
		backgroundColor: '#3949ab',
	},
	text: {
		color: Platform.OS === 'ios' ? '#3949ab' : 'white',
		fontSize: 20,
	},
})
