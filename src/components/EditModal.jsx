import React, { useState } from 'react'
import { Modal, TextInput, View, Button, StyleSheet, Alert } from 'react-native'

export default function EditModal({ visible, onCancel, value, onSave }) {
	const [title, setTitle] = useState(value)

	function saveHandler() {
		if (title.trim().length < 3) {
			Alert.alert(
				'Ошибка',
				`Минимальная длинна название 3 символа. Сейчас ${
					title.trim().length
				} символов.`,
			)
		} else {
			onSave(title)
		}
	}
	return (
		<Modal visible={visible} animationType='slide' transparent={false}>
			<View style={styles.wrap}>
				<TextInput
					value={title}
					onChangeText={setTitle}
					style={styles.input}
					placeholder='Введите название'
					autoCapitalize='none'
					autoCorrect={false}
				/>
				<View style={styles.buttons}>
					<Button onPress={onCancel} title='Отмена' color='red' />
					<Button title='Сохранить' onPress={saveHandler} />
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 10,
		borderBottomColor: 'darkblue',
		borderBottomWidth: 2,
		width: '80%',
	},
	buttons: {
		width: '100%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})
