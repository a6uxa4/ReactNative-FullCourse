import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import EditModal from '../components/EditModal'
import AppCard from '../components/UI/AppCard'

export default function TodoScreen({ goBack, todo, deleteHandler, onSave }) {
	const [modal, setModal] = useState(false)

	function saveHandler(title) {
		onSave(todo.id, title)
		setModal(false)
	}
	return (
		<View>
			<EditModal
				value={todo.title}
				visible={modal}
				onCancel={() => setModal(false)}
				onSave={saveHandler}
			/>
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<Button onPress={() => setModal(true)} title='Редактировать' />
			</AppCard>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button title='Назад' onPress={goBack} color='#757575' />
				</View>
				<View style={styles.button}>
					<Button
						title='Удалить'
						color='#e53935'
						onPress={() => deleteHandler(todo.id)}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	card: {
		marginBottom: 20,
		padding: 15,
	},
	button: {
		width: '40%',
	},
	title: {
		fontSize: 20,
	},
})
