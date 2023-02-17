import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function AppCard(props) {
	return (
		<View style={{ ...styles.default, ...props.style }}>
			{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	default: {
		padding: 2,
		flexDirection: 'row',
		justifyContent: 'spave-between',
		alignItems: 'center',
		shadowColor: '#000',
		shadowRadious: 2,
		shadowOpacity: 0.3,
		shadowOffset: { width: 2, height: 2 },
		backgroundColor: '#fff',
		borderRadious: 10,
	},
})
