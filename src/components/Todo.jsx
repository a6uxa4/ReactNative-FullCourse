import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Todo({ todo, deleteHandler, onOpen }) {
	return (
		<TouchableOpacity
			onPress={() => onOpen(todo.id)}
			onLongPress={() => deleteHandler(todo.id)}>
			<View style={styles.todo}>
				<Text>{todo.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10,
		marginTop: 10,
	},
})
