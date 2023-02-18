import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Alert } from 'react-native'

export default function AddToDo({ onSubmit }) {
	const [value, setValue] = useState('')

	function pressHandler() {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		} else {
			Alert.alert('Название дела не можеть быть пустым')
		}
	}

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder='Введите название дела...'
				autoCorrect={false}
				autoCapitalize='none'
			/>
			<Button title='Добавить' onPress={pressHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		marginBottom: 15,
	},
	input: {
		width: '70%',
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#3949ab',
	},
})
