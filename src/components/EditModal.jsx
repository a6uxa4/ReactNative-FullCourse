import React from 'react'
import { Modal, TextInput, View, Button, StyleSheet } from 'react-native'

export default function EditModal({ visible, onCancel }) {
	return (
		<Modal visible={visible} animationType='slide' transparent={false}>
			<View style={styles.wrap}>
				<TextInput
					style={styles.input}
					placeholder='Введите название'
					autoCapitalize='none'
					autoCorrect={false}
				/>
				<View style={styles.buttons}>
					<Button onPress={onCancel} title='Отмена' color='red' />
					<Button title='Сохранить' />
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
